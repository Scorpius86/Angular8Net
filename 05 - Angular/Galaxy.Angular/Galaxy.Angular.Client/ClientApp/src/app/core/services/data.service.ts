import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IOrder } from '../../shared/models/iorder';
import { IState } from '../../shared/models/istate';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ICustomer } from '../../shared/models/icustomer';

@Injectable()
export class DataService {
  port = '44347';
  baseUrl = `${this.window.location.protocol}//${this.window.location.hostname}:${this.port}`;
  customersBaseUrl = this.baseUrl + '/api/customers';
  ordersBaseUrl = this.baseUrl + '/api/orders';
  orders: IOrder[];
  states: IState[];

  constructor(
    private http: HttpClient,
    @Inject('Window') private window: Window) { }

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.customersBaseUrl)
      .pipe(
        map(customers => {
          this.calculateCustomersOrderTotal(customers);
          return customers;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'server error');
  }

  calculateCustomersOrderTotal(customers: ICustomer[]) {
    for (const customer of customers) {
      if (customer && customer.Orders) {
        let total = 0;
        for (const order of customer.Orders) {
          let orderTotal = 0;
          for (const item  of order.Items) {
            orderTotal += item.ItemCost;
          }
          order.OrderTotal = orderTotal;
          total += orderTotal;
        }
        customer.Total = total;
      }
    }
  }
}
