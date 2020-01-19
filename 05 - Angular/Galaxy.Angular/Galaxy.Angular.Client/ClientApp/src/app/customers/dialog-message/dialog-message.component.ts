import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ICustomer } from '../../shared/models/icustomer';

@Component({
  selector: 'app-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.scss']
})
export class DialogMessageComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<DialogMessageComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { } 

    ngOnInit() {
        
  }

}
