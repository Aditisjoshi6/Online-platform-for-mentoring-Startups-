import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


export interface MentorsData {
  mname: string;
  mid: number;
  memail: string;
  mdob: string;
}


@Component({
  selector: 'app-mdialog-box',
  templateUrl: './mdialog-box.component.html',
  styleUrls: ['./mdialog-box.component.css']
})



export class MdialogBoxComponent implements OnInit {

  action:string;
  local_data:any;
  

  constructor(
    public dialogRef: MatDialogRef<MdialogBoxComponent>,
  
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: MentorsData) {
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


  

  