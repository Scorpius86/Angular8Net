import { Component, OnInit} from '@angular/core';
import { ICustomer } from '../shared/models/icustomer';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  title: string;
  customers: ICustomer[] = [];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.title = 'Customers';
    this.displayMode = DisplayModeEnum.Card;

    this.getCustomers();
  }

  getCustomers() {
    this.dataService.getCustomers()
      .subscribe((response: ICustomer[]) => {
        this.customers = response;
      });
  }

  changeDisplayMode(mode: DisplayModeEnum) {
    this.displayMode = mode;
  }

}

enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2
}
