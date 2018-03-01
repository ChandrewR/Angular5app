import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ISecuredUsers } from './securedusers/securedusers';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {LoginService} from './login.service';
import { tokenKey } from '@angular/core/src/view';

@Injectable()
export class SecureduserService {
    token : string ='';
  constructor(private http : HttpClient,private loginService : LoginService) 
  { 

    this.loginService.castToken.subscribe(data => {this.token = data;
        alert('Token alert'+''+this.token);
    });
  }

  

  getSecuredUsers() : Observable<ISecuredUsers[]> {
      return this.http.get<ISecuredUsers[]>('http://localhost:5000/securedapi/securedusers?token='+this.token)
      .catch(this.errorHandler);
  }
  
  errorHandler(error: HttpErrorResponse) {
      return Observable.throw(error.message || "Server Error!!!!");
  }
}