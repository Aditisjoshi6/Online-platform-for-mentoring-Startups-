import { UsersService } from './../users.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { Users } from './../users';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  
  //user = new Users('mentor','Aditi','IT','aditi@gmail.com');
  
  
  form = this.fb.group({
           role : new FormControl('',Validators.required),
           name : new FormControl('',Validators.required),
           email : new FormControl('',[Validators.required,Validators.email]),
           password : new FormControl('',[Validators.required,Validators.minLength(6)]),

           
  }); 

  constructor(private router : Router, private userservice: UsersService, private fb:FormBuilder) { }

  get f(){return this.form.controls}
  ngOnInit() {
  }

  onSubmit(){
    //alert(JSON.stringify(this.form.value))
    // this.userservice.getUsers(this.user)
    // .subscribe(
    //   data => console.log('Success!',data),
    //   error => console.error('Error!',error)
    // )
    console.log(this.form.value);
    this.userservice.postUsers(this.form.value)
    .subscribe(
      response => console.log('Success',response),
      error => console.log('Error',error)
      
    );
  }

  // route()
  // {
  //     if(this.f.role.value=='mentor')
  //     this.router.navigate(['/','mentor-form']);
  //     else
  //     this.router.navigate(['/','login']);
  // }
}
