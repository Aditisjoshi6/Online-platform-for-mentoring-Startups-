import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTable } from '@angular/material';
import { MdialogBoxComponent } from './../mdialog-box/mdialog-box.component';
import { MdesigBoxComponent } from './../mdesig-box/mdesig-box.component';
import { MskillsBoxComponent } from './../mskills-box/mskills-box.component';
import { MguidelinesBoxComponent } from './../mguidelines-box/mguidelines-box.component';

export interface MentorsData {
  mname: string;
  mid: number;
  memail: string;
  mdob: string;
  cno: number;
}

export interface MentorDesigData {
  desig: string;
  mid:number;
}

export interface MentorSkillData {
  skills: string;
  id:number;
}

export interface MentorGuidelinesData {
  guidelines: string;
  id:number;
}

const ELEMENT_DATA: MentorsData[] = [
  {mid: 101, mname: 'Aditi Joshi', memail:'aditi@gmail.com', mdob:'1988-3-19',cno: 9876543210}
];
  
const DATA : MentorDesigData[] = [
    {mid : 101, desig : 'Senior Venture Associate at New Chip'}
 ];

 const DATA1 : MentorSkillData[] = [
  {id : 1, skills: "Research"},
  {id: 2, skills:'Venture Capital'},
  {id: 3, skills:'Entrepreneurship'},
  {id: 4, skills:'Market Strategy'}
];

const DATA2 : MentorGuidelinesData[] = [
  {id : 1, guidelines:'Study Top Direct Response Advertisers.'},
  {id : 2, guidelines:'Find the top direct response advertisers--the companies spending money every month--in your industry and study their ad copy.'},
  {id : 3, guidelines:'Respond to the ads and document their entire sales process.'},
  {id : 4, guidelines:'Provide Fast, Convenient Customer Support'},
  {id : 5, guidelines:'Reward Loyal Customers : Modern consumers want personalization. '},
];


@Component({
  selector: 'app-mentor-profile',
  templateUrl: './mentor-profile.component.html',
  styleUrls: ['./mentor-profile.component.css']
})


export class MentorProfileComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['mid', 'mname', 'memail','mdob','cno','action'];

  data = DATA;
  displayedColumn: string[] = ['desig','action'];

  data1 = DATA1;
  displayedColumn1: string[] = ['skills','action'];

  data2 = DATA2;
  displayedColumn2: string[] = ['id','guidelines','action'];

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;


  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(MdialogBoxComponent,{
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  //Profile
  addRowData(row_obj){
  var d = new Date();
  this.dataSource.push({
       mid:d.getTime(),
       mname:row_obj.mname,
       memail: row_obj.memail,
       mdob:row_obj.mdob,
       cno:row_obj.cno,
      
   });
  this.table.renderRows();
 }
  
  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.mid == row_obj.mid){
        value.mname = row_obj.mname;
        value.memail = row_obj.memail;
        value.mdob = row_obj.mdob,
        value.cno = row_obj.cno
      }
      return true;
    });
  }

  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.mid != row_obj.mid;
    });
  }


  //Desig
  openDialog1(action1,obj) {
    obj.action = action1;
    const dialogRef = this.dialog.open(MdesigBoxComponent,{
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData1(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData1(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData1(result.data);
      }
    });
  }

  addRowData1(row_obj){
  var d = new Date();
  this.data.push({
       mid:d.getTime(),
       desig:row_obj.desig,
      
   });
  this.table.renderRows();
 }
  
  updateRowData1(row_obj){
    this.data = this.data.filter((value,key)=>{
      if(value.mid == row_obj.mid){
        value.desig = row_obj.desig;
       }
      return true;
    });
  }

  deleteRowData1(row_obj){
    this.data = this.data.filter((value,key)=>{
      return value.mid != row_obj.mid;
    });
  }
 
  //Skills
  openDialog2(action1,obj) {
    obj.action = action1;
    const dialogRef = this.dialog.open(MskillsBoxComponent,{
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData2(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData2(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData2(result.data);
      }
    });
  }

  addRowData2(row_obj){
  var d = new Date();
  this.data1.push({
       id:d.getTime(),
       skills:row_obj.skills,
      
   });
  this.table.renderRows();
 }
  
  updateRowData2(row_obj){
    this.data1= this.data1.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.skills = row_obj.skills;
      }
      return true;
    });
  }

  deleteRowData2(row_obj){
    this.data1 = this.data1.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }

  //Guidelines
  openDialog3(action1,obj) {
    obj.action = action1;
    const dialogRef = this.dialog.open(MguidelinesBoxComponent,{
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData3(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData3(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData3(result.data);
      }
    });
  }

  addRowData3(row_obj){
  var d = new Date();
  this.data2.push({
       id:d.getTime(),
       guidelines:row_obj.guidelines,
      
   });
  this.table.renderRows();
 }
  
  updateRowData3(row_obj){
    this.data2= this.data2.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.guidelines = row_obj.guidelines;
      }
      return true;
    });
  }

  deleteRowData3(row_obj){
    this.data2 = this.data2.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }
}
