import { NgModule } from '@angular/core';
import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CustomersGridComponent } from './customers-grid/customers-grid.component';


@NgModule({
  declarations: [CustomersRoutingModule.components, CustomersGridComponent],
  imports: [
    CustomersRoutingModule,
    SharedModule
  ]
})
export class CustomersModule { }
