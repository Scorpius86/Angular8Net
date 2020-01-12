import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/models/icustomer';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styles: []
})
export class CustomersComponent implements OnInit {
  title: string;
  customers: ICustomer[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.title = 'Customers';
    this.getCustomers();
  }

  getCustomers() {
    this.dataService.getCustomers()
      .subscribe((response: ICustomer[]) => {
        this.customers = response;
      });
  }

}
