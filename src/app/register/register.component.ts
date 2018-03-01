import { Component, OnInit } from '@angular/core';
import {FormControl,FormsModule,ReactiveFormsModule,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http : HttpClient,public snackBar: MatSnackBar,private router : Router) { }

  ngOnInit() {
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
  return this.email.hasError('required') ? 'You must enter a value' :
  this.email.hasError('email') ? 'Not a valid email' :'';
  }

  password = new FormControl('', [Validators.required]);

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a password' : 'Nothing';
  }

  secureCheck = new FormControl();

  public reqEmail: string = "";
  public reqPassword : string = "";
  public reqSecurecheck : boolean = false;

  public res : apires;

  register() {

    if ((this.email.hasError('required') || this.email.hasError('email')) || this.password.hasError('required'))
    {
      this.snackBar.open("Enter valid data", "OK", {
        duration: 3000,
        extraClasses: ['failure-snackbar']
      });
    }
    else
    {
    this.http.post('http://localhost:5000/api/addUser',
    {username : this.reqEmail, password : this.reqPassword, admin : this.reqSecurecheck})
    .subscribe((data:any) => {
      this.res = data;
      if (this.res.success) {
        this.snackBar.open("You have registered successfully", "OK", {
          duration: 3000,
          extraClasses: ['success-snackbar']
        });
      }
    }); 

    this.reqEmail = "";
    this.reqPassword = "";
    this.router.navigate(['home']);
  }
  }
}

interface apires {
  success: boolean;
  name: string;
}
