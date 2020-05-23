import { FormGroup, FormControl, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private fb:FormBuilder)
   { }
   form = this.fb.group({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
   });

  //form : FormGroup;
  ngOnInit() {
    
    }
    get f() { return this.form.controls; }

  route() {
    console.log(this.f.email.value);
    console.log(this.f.password.value);
    if (this.f.email.value == 'aditi@gmail.com')
      this.router.navigate(['/', 'mentor-profile']);
    else if (this.f.email.value == 'amruta@gmail.com')
      this.router.navigate(['/', 'admin']);
    else
      this.router.navigate(['/', 'user-page']);
  }
}

  
  //({
   // email: new FormControl(),
  //password: new FormControl()
  //});

  