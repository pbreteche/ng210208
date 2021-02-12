import { UserService } from './../user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';

  constructor(private user: UserService) { }

  get currentUser() {
    return this.user.user;
  }

  login() {
    this.user.user = this.username;
    this.username = '';
  }

  logout() {
    this.user.user = null;
  }

}
