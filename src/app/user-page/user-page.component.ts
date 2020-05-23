import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

    people = [
      {
        id: 1,
        name: 'Aditi Joshi',
        sectors: 'IT',
        //specialist:'Orthopaedic Surgeon',

      },
      {
        id: 2,
        name: 'Sneha Odugoudar',
        sectors: 'Agriculture',
        //specialist:'Cardiologist',

      },
      {
        id: 3,
        name: 'Apoorva Karadi',
        sectors: 'Food and Management',
        //specialist:'Spine Surgeon',

      },
      {
        id: 4,
        name: 'Jahnavi Desai',
        sectors: 'Logistics',
        //specialist:'Consulant,Diabetes & Endocrinology',
      },
    ];

  idFilter = new FormControl('');
  nameFilter = new FormControl('');

  sectorsFilter = new FormControl('');
  //  // dobFilter = new FormControl('');
  //   //specialistFilter = new FormControl('');
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['id', 'name', 'sectors', 'action'];
  filterValues = {

    id: '',
    name: '',
    sectors: '',
    //     //dob: '',
    //     //specialist:''
  };


  constructor(private router: Router,
    private userservice: UsersService) {

    //this.userservice.getUsers();
    this.dataSource.data = this.people
    this.dataSource.filterPredicate = this.createFilter();
  }

  ngOnInit() {
    
    this.idFilter.valueChanges
      .subscribe(
        id => {
          this.filterValues.id = id;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.nameFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.name = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )

    this.sectorsFilter.valueChanges
      .subscribe(
        sectors => {
          this.filterValues.sectors = sectors;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    // this.dobFilter.valueChanges
    //   .subscribe(
    //     dob => {
    //       this.filterValues.dob = dob;
    //       this.dataSource.filter = JSON.stringify(this.filterValues);
    //     }
    //   )
    // this.specialistFilter.valueChanges
    // .subscribe(
    //   specialist => {
    //     this.filterValues.specialist = specialist;
    //     this.dataSource.filter = JSON.stringify(this.filterValues);
    //   }
    // )
  }

  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function (data, filter): boolean {
      let searchTerms = JSON.parse(filter);
      return data.id.toString().toLowerCase().indexOf(searchTerms.id) !== -1
        && data.name.toLowerCase().indexOf(searchTerms.name) !== -1

        && data.sectors.toLowerCase().indexOf(searchTerms.sectors) !== -1;
      // && data.dob.toLowerCase().indexOf(searchTerms.dob) !== -1
      // && data.specialist.toLowerCase().indexOf(searchTerms.specialist) !== -1;
    }
    return filterFunction;
  }
  routeid: any;
  routeref: any;
  route(routeid) {
    console.log(routeid);
    if (routeid == 1)
      this.router.navigate(['/', 'itcs']);
  }
}






