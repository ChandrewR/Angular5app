import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoginService {

  constructor() { }

  public loggedIn = new BehaviorSubject<boolean>(false);
  castLoggedIn = this.loggedIn.asObservable();

  public showHomeIcon = new BehaviorSubject<boolean>(true);
  castshowHomeIcon = this.showHomeIcon.asObservable();

  public token = new BehaviorSubject<string>('');
  castToken = this.token.asObservable();

  setLoggedIn(loggedIn) {
    this.loggedIn.next(loggedIn);
  }

  setshowHomeIcon(showHomeIcon) {
    this.showHomeIcon.next(showHomeIcon);
  }
  
  setToken(Token) {
    this.token.next(Token);
  }

}
