import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { Router } from '@angular/router';
import { UserService } from '../../shared_service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  private user:User;
  gender = ['Male', 'Female'];
  constructor(private route: Router, private userservice:UserService) { }

  ngOnInit() {
    this.user=this.userservice.getter();
  }

  submitForm(){
    if(this.user.id==undefined){
      this.userservice.createUser(this.user).subscribe((user)=>{
        console.log(user);
        this.route.navigate(['/allusers']);
      });
    }else{
      this.userservice.updateUser(this.user).subscribe((user)=>{
        console.log(user);
        this.route.navigate(['/allusers']);
      });
    }
  }
}
