import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

const app_routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/customers' },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: '**', pathMatch: 'full', redirectTo: '/customers' } // catch any unfound routes and redirect to home page

];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

