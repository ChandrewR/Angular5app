import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IUsers } from './users/users';

@Injectable()
export class UserService {

  constructor(private http : HttpClient) { }

  getUsers() : Observable<IUsers[]> {
      return this.http.get<IUsers[]>('http://localhost:5000/api/users');
  }

}
