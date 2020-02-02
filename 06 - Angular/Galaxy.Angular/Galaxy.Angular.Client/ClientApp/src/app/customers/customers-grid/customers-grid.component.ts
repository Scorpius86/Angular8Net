import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ICustomer } from '../../shared/models/icustomer';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-customers-grid',
  templateUrl: './customers-grid.component.html',
  styleUrls: ['./customers-grid.component.scss']
})
export class CustomersGridComponent implements OnInit, OnChanges {   
  @Input() customers: ICustomer[] = [];
  displayedColumns: string[] = ['Image','FirstName', 'LastName', 'Address', 'City', 'State', 'Total'];
  dataSource: MatTableDataSource<ICustomer>;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
      //this.loadData(changes.customers.currentValue);
  }

  loadData(data: ICustomer[]) {
    this.dataSource = new MatTableDataSource<ICustomer>(data)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
