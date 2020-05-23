import { Component, OnInit } from '@angular/core';

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
  selector: 'app-itcs',
  templateUrl: './itcs.component.html',
  styleUrls: ['./itcs.component.css']
})
export class ITcsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['mid', 'mname', 'memail','mdob','cno'];

  data = DATA;
  displayedColumn: string[] = ['desig'];

  data1 = DATA1;
  displayedColumn1: string[] = ['skills'];

  data2 = DATA2;
  displayedColumn2: string[] = ['id','guidelines'];

}




  
  
 