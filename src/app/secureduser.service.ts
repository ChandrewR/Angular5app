import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
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
    });
  }

  

  getSecuredUsers() : Observable<ISecuredUsers[]> {
      let headerInfo = new HttpHeaders().set('x-access-token',this.token);
      /* .append('Access-Control-Allow-Origin','*')
      .append('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS'); */
      return this.http.get<ISecuredUsers[]>('http://localhost:5000/securedapi/securedusers', {
        headers : headerInfo
      })
      .catch(this.errorHandler);

      /* return this.http.get<ISecuredUsers[]>('http://localhost:5000/securedapi/securedusers?token='+this.token)
      .catch(this.errorHandler); */
  }
  
  errorHandler(error: HttpErrorResponse) {
      return Observable.throw(error.message || "Server Error!!!!");
  }
}