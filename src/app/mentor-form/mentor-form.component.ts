import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-mentor-form',
  templateUrl: './mentor-form.component.html',
  styleUrls: ['./mentor-form.component.css']
})
export class MentorFormComponent implements OnInit {

  constructor(private router: Router, private fb:FormBuilder) { }

  ngOnInit() {
  }
  form = this.fb.group({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
   });
}
