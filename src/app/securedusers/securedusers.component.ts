import { Component, OnInit } from '@angular/core';
import { SecureduserService } from '../secureduser.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-securedusers',
  templateUrl: './securedusers.component.html',
  styleUrls: ['./securedusers.component.css']
})
export class SecuredusersComponent implements OnInit {

  public users = [];
  public tokenCheck : boolean;
  public token : string = '';
  //displayedColumns = ['_id', 'name', 'password'];
  //dataSource = new MatTableDataSource(this.users);

  constructor(private secureduserService : SecureduserService, private loginService : LoginService) { }

  ngOnInit() {

    this.secureduserService.getSecuredUsers().subscribe(data => {this.users = data;
      this.tokenCheck = true;},
    error => {
      //this.errorMessage = error;
      if (error.indexOf('403')) {
        this.tokenCheck = false;
      }
    }
    );

    this.loginService.castToken.subscribe(
      data => { this.token = data; });
    
  }
}
