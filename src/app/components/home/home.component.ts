import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import { User } from '../../model/user.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	currentUser: User;
  constructor(private authService: AuthService, private router: Router) {
	//this.currentUser = Json.parse (localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }
  
  // login out from the app
  logOut() {
    this.authService.logOut()
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {

        });
  }
}
