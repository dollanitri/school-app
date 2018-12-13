import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppComponent} from './../app.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private http: HttpClient) { }
 
  getUserBoard(): Observable<string> {
    return this.http.get(AppComponent.REST_API_URL + '/api/test/user', { responseType: 'text' });
  }
 
  getPMBoard(): Observable<string> {
    return this.http.get(AppComponent.REST_API_URL + '/api/test/pm', { responseType: 'text' });
  }
 
  getAdminBoard(): Observable<string> {
    return this.http.get(AppComponent.REST_API_URL + '/api/test/admin', { responseType: 'text' });
  }
}
