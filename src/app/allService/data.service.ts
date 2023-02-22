import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) { }

  department(data:any){
    return this._http.post('http://localhost:3000/department',data)
  }

  getDepartment(){
    return this._http.get('http://localhost:3000/department')
  }
  updateDepartment(id:any,data:any){
    return this._http.put(`http://localhost:3000/updatedepartment/${id}`,data)
  }

  designation(data:any){
    return this._http.post('http://localhost:3000/designation',data)
  }
  updateDesignation(id:any,data:any){
    return this._http.put(`http://localhost:3000/updatedesignation/${id}`,data)
  }
  getdesignation(){
    return this._http.get('http://localhost:3000/designation')
  }

  
  specialization(data:any){
    return this._http.post('http://localhost:3000/specialization',data)
  }
  getSpecialization(){
    return this._http.get('http://localhost:3000/specialization')
  }
  updateSpecialization(id:any,data:any){
    return this._http.put(`http://localhost:3000/updatespecialization/${id}`,data)
  }

  ward(data:any){
    return this._http.post('http://localhost:3000/ward',data)
  }
  updateWard(id:any,data:any){
    return this._http.put(`http://localhost:3000/updateward/${id}`,data)
  }
  getWard(){
    return this._http.get('http://localhost:3000/ward')
  }


  room(data:any){
    return this._http.post('http://localhost:3000/room',data)
  }
  updateRoom(id:any,data:any){
    return this._http.put(`http://localhost:3000/updateroom/${id}`,data)
  }

  getRoom(data1:any){
    const  data = {
        ward:data1
    }
    return this._http.post('http://localhost:3000/getroom',data)
  }

  serviceGroup(data:any){
    return this._http.post('http://localhost:3000/servicegroup',data)
  }
  updateServiceGroup(id:any,data:any){
    return this._http.put(`http://localhost:3000/updateServiceGroup/${id}`,data)  
  }

  getserviceGroup(){
    return this._http.get('http://localhost:3000/servicegroup')
  }

  getService(data:any){
    const  data1 = {
      servicename:data
    }
    return this._http.post('http://localhost:3000/getService',data1)
  }
saveService(data:any){
  return this._http.post('http://localhost:3000/service',data)
}
updatesaveService(id:any,data:any){
  return this._http.put(`http://localhost:3000/updateService/${id}`,data)
}

saveHospitalDetails(data:any){
  return this._http.post('http://localhost:3000/hospitaldetails',data)
}
getHospitalDetails(){
  return this._http.get('http://localhost:3000/hospitaldetails')
}


deleteDepartment(id:any){
  return this._http.delete(`http://localhost:3000/department/${id}`)
}
deleteDesignation(id:any){
  return this._http.delete(`http://localhost:3000/designation/${id}`)
}

deleteSpecialization(id:any){
  return this._http.delete(`http://localhost:3000/specialization/${id}`)
}

saveConsultant(data: any) {
  return this._http.post('http://localhost:3000/consultant',data)
}
getConsultant() {
  return this._http.get('http://localhost:3000/consultant')
}

  


}
