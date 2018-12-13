import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../auth/auth.service';
import { User } from './../../model/user.model';
import {Router} from '@angular/router';
import {TokenStorageService} from './../../auth/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;
  
  constructor(private token: TokenStorageService) {

  }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      userName: this.token.getUserName(),
      tenant: this.token.getTenant(),
      authorities: this.token.getAuthorities()
    };
  }
  
  // login out from the app
  logOut() {
    this.token.signOut();
    window.location.reload();
  }
}
