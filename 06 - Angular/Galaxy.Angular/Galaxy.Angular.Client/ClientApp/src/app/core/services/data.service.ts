import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IOrder } from '../../shared/models/iorder';
import { IState } from '../../shared/models/istate';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ICustomer } from '../../shared/models/icustomer';
import { IApiResponse } from '../../shared/models/iapi-response';

@Injectable()
export class DataService {
  port = '44347';
  baseUrl = `${this.window.location.protocol}//${this.window.location.hostname}:${this.port}`;
  customersBaseUrl = this.baseUrl + '/api/customers';
  ordersBaseUrl = this.baseUrl + '/api/orders';
  statesBaseUrl = this.baseUrl + '/api/states';
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
        })  ,
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

  getStates(): Observable<IState[]> {
    return this.http.get<IState[]>(this.statesBaseUrl)
      .pipe(catchError(this.handleError));
  }

  getCustomer(customerId: number): Observable<ICustomer> {
    return this.http.get<ICustomer>(this.customersBaseUrl + '/' + customerId)
      .pipe(
        map(customer => {
          this.calculateCustomersOrderTotal([customer]);
          return customer;
        }),
        catchError(this.handleError)
      );
  }


  insertCustomer(customer: ICustomer): Observable<ICustomer> {
    return this.http.post<ICustomer>(this.customersBaseUrl, customer)
      .pipe(catchError(this.handleError));
  }

  updateCustomer(customer: ICustomer): Observable<boolean> {
    return this.http.put<IApiResponse>(this.customersBaseUrl + '/' + customer.Id, customer)
      .pipe(
        map(res => res.Status),
        catchError(this.handleError)
      );
  }

  deleteCustomer(customerId: number): Observable<boolean> {
    return this.http.delete<IApiResponse>(this.customersBaseUrl + '/' + customerId)
      .pipe(
        map(res => res.Status),
        catchError(this.handleError)
      );
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
