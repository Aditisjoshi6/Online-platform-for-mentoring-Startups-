import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from '../environments/environment';
import { Users } from './users';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url:string = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  postUsers(user:Users) {
    // return [
    //   {id:1,name:"Aditi Joshi",sectors:"IT"},
    //   {id:2,name:"Sneha Odugoudar",sectors:"Agriculture"},
    //   {id:3,name:"Apoorva Karadi",sectors:"Food and Management"},
    //   {id:4,name:"Jahanvi Desai",sectors:"Logistics"}
    // ];
    return this.http.post<any>(this.url,user);
  }

  // getUsers(): Observable<Users[]>{
  //   return this.http.get<Users[]>(this.url);
  // }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.url);
  }

}

