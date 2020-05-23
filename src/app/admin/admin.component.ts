import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  //constructor() { }

  ngOnInit() {
 }
 
 data = Highcharts;
 chartOptions = {
   chart: {
     type: 'pie'
   },
   title: {
     text: ''
 },
 
   xAxis: {
     categories: [
       'Total Users',
       'Mentors',
       'Users'
     ],
     crosshair: true
   },
   yAxis: {
     min: 0,
     title: {
       text: ''
     }
   },
   tooltip: {
     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
       '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
     footerFormat: '</table>',
     shared: true,
     useHTML: true
   },
   plotOptions : {
    pie: {
       allowPointSelect: true,
       cursor: 'pointer',
       dataLabels: {
          enabled: false           
       },
       showInLegend: true
    }
 },
 series : [{
  type: 'pie',
  name: 'Users share',
  data: [
     ['Total Users',   150.0],
     ['Mentors',       40],
     ['Users',    100],
  ]
}]
 };

}

