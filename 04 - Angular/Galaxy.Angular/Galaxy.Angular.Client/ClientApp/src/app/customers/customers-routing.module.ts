import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomersGridComponent } from './customers-grid/customers-grid.component';
import { CanActivateGuard } from './guard/can-activate.guard';
import { CanDeactivateGuard } from './guard/can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    canActivate: [CanActivateGuard],
    canDeactivate: [CanDeactivateGuard],
    data: {
      expectedRole: 'admin',
      grantaccess: ['canAccessCustomers']
    } 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CanActivateGuard, CanDeactivateGuard]
})
export class CustomersRoutingModule {
  static components = [CustomersComponent, CustomersGridComponent];
}
