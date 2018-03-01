import { Component, OnInit } from '@angular/core';
import {FormControl,FormsModule,ReactiveFormsModule,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import { Router} from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public snackBar: MatSnackBar,public loginService : LoginService,private router : Router,public http : HttpClient) { }

  ngOnInit() {
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
  return this.email.hasError('required') ? 'You must enter a email address' :
  this.email.hasError('email') ? 'Not a valid email' :'';
  }

  password = new FormControl('', [Validators.required]);

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a password' : 'Nothing';
    }

  public loginEmail : string = '';
  public loginPassword : string = '';

  public res : apires;

  login () {

    if ((this.email.hasError('required') || this.email.hasError('email')) || this.password.hasError('required')) {
      this.snackBar.open("Enter valid data", "OK", {
        duration: 3000,
        extraClasses: ['failure-snackbar']
      });
    }
    else {

    this.http.post('http://localhost:5000/auth/authenticate',
    {email : this.loginEmail, password : this.loginPassword})
    .subscribe((data:any) => {
      this.res = data;
      alert(this.res.message+this.res.success+this.res.token);
      if (this.res.success) {
        this.snackBar.open("You have logged-in to the application successfully", "OK", {
          duration: 3000,
          extraClasses: ['success-snackbar']
        });

        this.loginService.setLoggedIn(true);
        this.loginService.setshowHomeIcon(false);
        this.loginService.setToken(this.res.token);
        


        alert('loggedin');

        this.router.navigate(['users']);
      }
      else {
          this.snackBar.open("Invalid username/password", "OK", {
          duration: 3000,
          extraClasses: ['failure-snackbar']
        });
      }
    }); 

    
    }

  }

}

interface apires {
  success: boolean;
  message : string;
  token : string;
}