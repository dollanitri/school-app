import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../../model/user.model'
import { AuthService } from './../../auth/auth.service';
import { TokenStorageService} from './../../auth/token-storage.service';
import { LoginInfo} from './../../auth/login-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: LoginInfo;

  constructor(private authService: AuthService, private token: TokenStorageService) { }
  
  ngOnInit() {
    if(this.token.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.token.getAuthorities();
    } 
  }

  onSubmit() {
    this.loginInfo = new LoginInfo(this.form.username, this.form.password, this.form.tenant);

    this.authService.attemptLogin(this.loginInfo).subscribe (
      data => {
        this.token.saveToken(data.accessToken);
        this.token.saveUserName(data.username);
        this.token.saveTenant(data.tenant);
        this.token.saveAuthorities(data.authorities);

        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.roles = this.token.getAuthorities();
        this.reloadPage();

      },
      error => {
        this.errorMessage = error.error.errorMessage;
        this.isLoginFailed = true;
      }
    )
  }

  reloadPage() {
    window.location.reload();
  }

}
