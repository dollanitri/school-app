import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	user: User = new User();
	errorMessage: String;
  constructor(private authService: AuthService, private router: Router) { }
  
  login() {
	this.authService.logIn(this.user).subscribe(data => {
		this.router.navigate(['/home']);
	},err => {
		this.errorMessage = "error: Tenat, UserName or Password is incorrect."
	});
  }
  
  ngOnInit() {
  }

}
