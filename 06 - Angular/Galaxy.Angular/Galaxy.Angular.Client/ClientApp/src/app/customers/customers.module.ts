import { NgModule } from '@angular/core';
import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CustomersGridComponent } from './customers-grid/customers-grid.component';
import { CustomersCardComponent } from './customers-card/customers-card.component';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';


@NgModule({
    declarations: [CustomersRoutingModule.components],
    imports: [
        CustomersRoutingModule,
        SharedModule
    ],
    entryComponents: [
        DialogMessageComponent
    ]
})
export class CustomersModule { }
