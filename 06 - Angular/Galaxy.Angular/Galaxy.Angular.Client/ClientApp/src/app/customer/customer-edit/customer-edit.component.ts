import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

import { DataService } from '../../core/services/data.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { IModalContent, ModalService } from '../../core/modal/modal.service';
import { ICustomer } from '../../shared/models/icustomer';
import { IState } from '../../shared/models/istate';

@Component({
  selector: 'cm-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  customer: ICustomer =
    {
      Id: 0,
      FirstName: '',
      LastName: '',
      Gender: '',
      Address: '',
      City: '',
      State: {
        Abbreviation: '',
        Name: ''
      }
    };
  states: IState[];
  errorMessage: string;
  deleteMessageEnabled: boolean;
  operationText = 'Insert';
  @ViewChild('customerForm', { static: true }) customerForm: NgForm;
    
  constructor(private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    private snackBar: MatSnackBar,
    private modalService: ModalService) { }

  ngOnInit() {
    // Subscribe to params so if it changes we pick it up. Don't technically need that here
    // since param won't be changing while component is alive.
    // Could use this.route.parent.snapshot.params["id"] to simplify it.
    this.route.parent.params.subscribe((params: Params) => {
      const id = +params['id'];
      if (id !== 0) {
        this.operationText = 'Update';
        this.getCustomer(id);
      }
    });

    this.dataService.getStates().subscribe((states: IState[]) => this.states = states);
  }

  getCustomer(id: number) {
    this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
      this.customer = customer;
    });
  }

  submit() {
    const config = new MatSnackBarConfig();
    config.duration = 3000;

    if (this.customer.Id === 0) {
      this.dataService.insertCustomer(this.customer)
        .subscribe((insertedCustomer: ICustomer) => {
          if (insertedCustomer) {
            this.customerForm.form.markAsPristine();
            this.router.navigate(['/customers']);
          } else {
            const msg = 'Unable to insert customer';            
            config.panelClass = ['messageDanger'];
            this.snackBar.open(msg, null, config);
            this.errorMessage = msg;
          }
        },
          (err: any) => { }/*this.logger.log(err)*/);
    } else {
      this.dataService.updateCustomer(this.customer)
        .subscribe((status: boolean) => {
          if (status) {
            this.customerForm.form.markAsPristine();
            config.panelClass = ['messageInformation'];
            this.snackBar.open('Operation performed successfully.', null, config);
          } else {
            const msg = 'Unable to update customer';
            config.panelClass = ['messageDanger'];
            this.snackBar.open(msg, null, config);
            this.errorMessage = msg;
          }
        },
          (err: any) => { }/*this.logger.log(err)*/);
    }
  }

  cancel(event: Event) {
    event.preventDefault();
    // Route guard will take care of showing modal dialog service if data is dirty
    this.router.navigate(['/customers']);
  }

  delete(event: Event) {
    event.preventDefault();
    this.dataService.deleteCustomer(this.customer.Id)
      .subscribe((status: boolean) => {
        if (status) {
          this.router.navigate(['/customers']);
        } else {
          this.errorMessage = 'Unable to delete customer';
        }
      },
        (err) => { }/*this.logger.log(err)*/);
  }

  canDeactivate(): Promise<boolean> | boolean {
    if (!this.customerForm.dirty) {
      return true;
    }

    // Dirty show display modal dialog to user to confirm leaving
    const modalContent: IModalContent = {
      header: 'Lose Unsaved Changes?',
      body: 'You have unsaved changes! Would you like to leave the page and lose them?',
      cancelButtonText: 'Cancel',
      OKButtonText: 'Leave'
    };
    return this.modalService.show(modalContent);
  }

}
