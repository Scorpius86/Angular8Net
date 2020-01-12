import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from '../../core/services/validation.service';
import { IUserLogin } from '../../shared/models/iuser-login';
import { AuthService } from '../../core/services/auth.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { AppUserAuth } from '../../shared/models/app-user-auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]]
    });
  }

  getErrorMessage(control) {
    return control.invalid ? ValidationService.getValidatorErrorMessage(Object.keys(control.errors)[0]) : '';
  }

  submit({ value, valid }: { value: IUserLogin, valid: boolean }) {
    this.authService.login(value)
      .subscribe(() => {
        const config = new MatSnackBarConfig();
        config.duration = 3000;

        if (this.authService.isAuthenticated) {
          config.panelClass = ['messageInformation'];
          this.snackBar.open('Logged in', null, config);
          
          if (this.authService.redirectUrl) {
            const redirectUrl = this.authService.redirectUrl;
            this.authService.redirectUrl = '';
            this.router.navigate([redirectUrl]);
          } else {
            this.router.navigate(['/customers']);
          }
        } else {
          const loginError = 'Unable to login';
          this.errorMessage = loginError;

          config.panelClass = ['messageDanger'];
          this.snackBar.open(loginError, null, config);
        }
      });
  }
}
