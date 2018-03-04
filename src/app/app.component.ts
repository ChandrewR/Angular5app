import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public showLogout : boolean;
  public homeIcon : boolean;
  constructor(public loginService :LoginService) {

  this.loginService.castLoggedIn.subscribe(data => this.showLogout = data);
  this.loginService.castshowHomeIcon.subscribe(data => this.homeIcon = data);
  }

  logout() {
    this.loginService.setLoggedIn(false);
    this.loginService.setshowHomeIcon(true);
    this.loginService.setToken('');
  }
}
