import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';

import {JwtResponse} from './jwt-response';
import {LoginInfo} from './login-info';
import {AppComponent} from './../app.component';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  attemptLogin (credentials: LoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(AppComponent.REST_API_URL + '/api/auth/signin', credentials, httpOptions);
  }
}
