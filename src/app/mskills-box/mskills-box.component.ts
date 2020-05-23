import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface MentorSkillData {
  skills: string;
  mid:number;
}

@Component({
  selector: 'app-mskills-box',
  templateUrl: './mskills-box.component.html',
  styleUrls: ['./mskills-box.component.css']
})
export class MskillsBoxComponent implements OnInit {

  
  action:string;
  local_data:any;
  
  constructor(
    public dialogRef: MatDialogRef<MskillsBoxComponent>,
  
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: MentorSkillData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }


  ngOnInit() {
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
}








 

