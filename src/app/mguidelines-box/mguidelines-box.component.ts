import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface MentorGuidelinesData {
  guidelines: string;
  id:number;
}

@Component({
  selector: 'app-mguidelines-box',
  templateUrl: './mguidelines-box.component.html',
  styleUrls: ['./mguidelines-box.component.css']
})
export class MguidelinesBoxComponent implements OnInit {

  action:string;
  local_data:any;
  
  constructor(
    public dialogRef: MatDialogRef<MguidelinesBoxComponent>,
  
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: MentorGuidelinesData) {
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


  

  
  









 

