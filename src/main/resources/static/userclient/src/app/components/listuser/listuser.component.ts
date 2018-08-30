import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared_service/user.service';
import { User } from '../../user';
 
@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
 private users:User[];
 private visible = false;
 private user:User;
  constructor(private route: Router, private userservice:UserService) { }

  ngOnInit() {
    this.userservice.getAll()
      .subscribe( users => {
        this.users = users;
      });
  };

  deleteUser(user){
    this.userservice.deleteUser(user.id).subscribe((users)=>{
      this.users.splice(this.users.indexOf(user),1);
    });
  }

  seeUser(user){
    this.user = new User();
    this.user.fname = user.fname;
    this.user.lname = user.lname;
    this.user.id = user.id;
    this.user.email = user.email;
    this.user.phone = user.phone;
      return this.visible=true;
  }

  updateUser(user){
    this.userservice.setter(user);
    this.route.navigate(['/createuser']);
  }

  newUser(){
    let user = new User()
    this.userservice.setter(user);
    this.route.navigate(['/createuser']);
  }

  cancel(){
    this.route.navigate(['/allusers']);
    return this.visible=false;
  }
}