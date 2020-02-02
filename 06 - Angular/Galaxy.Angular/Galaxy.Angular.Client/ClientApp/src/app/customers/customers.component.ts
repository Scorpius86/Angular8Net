import { Component, OnInit, ViewChild} from '@angular/core';
import { ICustomer } from '../shared/models/icustomer';
import { DataService } from '../core/services/data.service';
import { CustomersGridComponent } from './customers-grid/customers-grid.component';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';
import { Router } from '@angular/router';

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

    @ViewChild(CustomersGridComponent, {static:true}) grid: CustomersGridComponent;

  constructor(
    private dataService: DataService,
    public dialog: MatDialog,
    private router: Router
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
          this.loadGrid(this.customers);
      });
    }

  loadGrid(data: ICustomer[]) {
    this.grid.loadData(data);
  }

  changeDisplayMode(mode: DisplayModeEnum) {
    this.displayMode = mode;
  }

  editCustomer(customer: ICustomer) {
    this.router.navigate(['/customers/'+customer.Id+'/edit']);
  }

  deleteCustomer(customer: ICustomer) {
    const dialogRef = this.dialog.open(DialogMessageComponent, {
      width: '250px',
      data: customer
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.deleteCustomer(customer.Id)
          .subscribe(data => {
            if (data) {
              this.getCustomers();
            }
          });
      }
    });
  }

}

enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2
}
