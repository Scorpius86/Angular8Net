import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from '../../shared/models/icustomer';

@Component({
  selector: 'app-customers-grid',
  templateUrl: './customers-grid.component.html',
  styleUrls: ['./customers-grid.component.scss']
})
export class CustomersGridComponent implements OnInit {
  @Input() customers: ICustomer[] = [];

  constructor() { }

  ngOnInit() {
  }

}
