import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './../users';
import { UsersService } from './../users.service';
import { MatDialog, MatTable } from '@angular/material';
import { DialogBoxComponent } from './../dialog-box/dialog-box.component';

export interface UsersData {
  name: string;
  id: number;
  email: string;
  dob: string;
}

const ELEMENT_DATA: UsersData[] = [
  {id: 1, name: 'Abhinav Joshi', email:'abhi@gmail.com', dob:'1993-5-5'},
  // {id: 1560608796014, name: 'Machine Learning'},
  // {id: 1560608787815, name: 'Robotic Process Automation'},
  // {id: 1560608805101, name: 'Blockchain'}
];

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

 
export class UserProfileComponent implements OnInit {

  constructor(private http:HttpClient, private userservice: UsersService, public dialog: MatDialog) { }
 
  public data;
  public users : Users[];
 
  ngOnInit() {
    
    this.userservice.getUsers()
    .subscribe((data:any[])=>{
      console.log(data);
      this.users=data;
    })
  }
  displayedColumns: string[] = ['id', 'name', 'email','dob','action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;


  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
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

  addRowData(row_obj){
  var d = new Date();
  this.dataSource.push({
       id:d.getTime(),
       name:row_obj.name,
       email: row_obj.email,
       dob:row_obj.dob
   });
  this.table.renderRows();
    
  }
  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
        value.email = row_obj.email;
        value.dob = row_obj.dob
      }
      return true;
    });
  }

  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }
}
