import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user.model';
import { AppComponent } from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  logIn(user: User) {
	var base64Credential: string = btoa( user.username+ ':' + user.password);
    
	  const httpOptions = {
	  headers: new HttpHeaders({
		'Content-Type':  'application/json',
		'Authorization': "Basic " + base64Credential
	  })	
	  }
	  return this.http.post<User>(AppComponent.API_URL+"/login", user, httpOptions);
  }
  
  logOut() {
    // remove user from local storage to log user out
    return this.http.post(AppComponent.API_URL+"/logout",{});
  }
}
