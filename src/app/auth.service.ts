import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap, delay } from 'rxjs/operators';

import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  private authUrl = 'api/login';

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<User> {
    this.log('LOGIN');
    return this.http
      .post<User>(
        this.authUrl,
        { login: 'test', password: '123456' },
        httpOptions
      )
      .pipe(
        tap(_ => {
          this.log(_);
          this.isLoggedIn = true;
        })
      );
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  private log(message: string) {
    console.log('AuthService: ' + message);
  }
}
