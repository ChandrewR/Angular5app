import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
//import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users = [];
  //displayedColumns = ['_id', 'name', 'password'];
  //dataSource = new MatTableDataSource(this.users);

  constructor(private userService : UserService) { }

  ngOnInit() {

    this.userService.getUsers().subscribe(data => this.users = data);
  }
}
