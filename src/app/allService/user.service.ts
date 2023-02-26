import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  saveUser(data:any){
    return this._http.post('http://localhost:3000/saveUser',data)
  }

  getUser(){
    return this._http.get('http://localhost:3000/getUser')
  }
  updateUser(id:any,data:any){
    return this._http.put(`http://localhost:3000/saveUser/${id}`,data)
  }

  getRole(){
    return this._http.get('http://localhost:3000/getRole')
  }

}
