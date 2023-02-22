import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpdService {

  constructor(private http:HttpClient) { }


  getConsultantByDept(data:any){
    const  data1 = {
      Department:data
    }
  return this.http.post('http://localhost:3000/consultantByDept',data1)
  }

  saveOpdRecords(data:any){
    return this.http.post('http://localhost:3000/opdRecords',data)
  }
}
