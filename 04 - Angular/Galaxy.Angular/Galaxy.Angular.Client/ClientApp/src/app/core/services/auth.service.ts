import { Injectable, Output, EventEmitter, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUserLogin } from '../../shared/models/iuser-login';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AppUserAuth } from '../../shared/models/app-user-auth';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  port = '44347';
  baseUrl = `${this.window.location.protocol}//${this.window.location.hostname}:${this.port}`;
  authUrl = this.baseUrl + '/api/auth';  
  redirectUrl: string;

  isAuthenticated = false;
  appUserAuth = new AppUserAuth();

  private jwtHelper = new JwtHelperService();

  @Output() authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private http: HttpClient,
    @Inject('Window') private window: Window
  ) {
    this.appUserAuth = this.getUserLoggedIn();
    this.setUserLoggedIn(this.appUserAuth);
  }

  private userAuthChanged(status: boolean) {
    this.authChanged.emit(status); // Raise changed event
  }

  login(userLogin: IUserLogin): Observable<AppUserAuth> {
    return this.http.post<AppUserAuth>(this.authUrl + '/login', userLogin)
      .pipe(
        map(appUserAuth => {
          this.setUserLoggedIn(appUserAuth);
          return appUserAuth;
        }),
        catchError(this.handleError)
      );
  }

  logout(): Observable<boolean> {
    return this.http.post<boolean>(this.authUrl + '/logout', null)
      .pipe(
        map(loggedOut => {
          const appUserAuth = new AppUserAuth();
          this.setUserLoggedIn(appUserAuth);
          return loggedOut;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Server error');
  }

  setUserLoggedIn(appUserAuth: AppUserAuth) {
    sessionStorage.setItem('currentUser', JSON.stringify(appUserAuth));

    const isExpired = this.jwtHelper.isTokenExpired(appUserAuth.BearerToken);

    this.isAuthenticated = appUserAuth.IsAuthenticated && !isExpired;
    this.appUserAuth = appUserAuth;
    this.userAuthChanged(appUserAuth.IsAuthenticated);    
  }

  getUserLoggedIn(): AppUserAuth{
    let appUserAuth = JSON.parse(sessionStorage.getItem('currentUser'));
    appUserAuth = appUserAuth || new AppUserAuth();
    return appUserAuth;
  }
}
