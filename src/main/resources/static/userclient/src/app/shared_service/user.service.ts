import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {User} from '../user';

//import {Observable} from 'rxjs';
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl:string = "http://localhost:8080/api";
  private headers = new Headers({'Content-Type':'apllication/json'})
  private options = new RequestOptions({headers:this.headers})
  private user:User;
  constructor(private _http:HttpClient) { }

  getAll(): Observable<any> {
    return this._http.get<User[]>(this.baseUrl+'/users');
  }

  getUser(id:number){
    return this._http.get<User[]>(this.baseUrl+'/user/'+id);
  }

  deleteUser(id:number){
    return this._http.delete(this.baseUrl+'/user/'+id);
  }
  createUser(User:User){
    return this._http.post(this.baseUrl+'/create',User);
  }

  updateUser(User:User){
    return this._http.put(this.baseUrl+'/update', User); 
  }

  setter(user:User){
    this.user = user;
  }

  getCreate(){
    return this.user.email;
  }

  getter(){
    return this.user;
  }
  

  //getUsers(){
    //return this._http.get(this.baseUrl+'/users', this.options).pipe(map(res => res.json()));
  //}*/

  
}
