import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICustomer } from '../../shared/models/icustomer';

@Component({
  selector: 'app-customers-card',
  templateUrl: './customers-card.component.html',
  styleUrls: ['./customers-card.component.scss']
})
export class CustomersCardComponent implements OnInit {
    @Input() customers: ICustomer[] = [];
    @Output() delete: EventEmitter<ICustomer> = new EventEmitter<ICustomer>();

  constructor() { }

  ngOnInit() {
  }

}
