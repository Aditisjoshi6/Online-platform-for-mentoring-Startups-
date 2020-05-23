import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface MentorDesigData {
  desig: string;
  mid:number;
}

@Component({
  selector: 'app-mdesig-box',
  templateUrl: './mdesig-box.component.html',
  styleUrls: ['./mdesig-box.component.css']
})
export class MdesigBoxComponent implements OnInit {

  action:string;
  local_data:any;
  
  constructor(
    public dialogRef: MatDialogRef<MdesigBoxComponent>,
  
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: MentorDesigData) {
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









  

  