import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { environment } from 'src/environments/environment'
import {Emp} from './emp';
import {Employee} from './emp';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  constructor(private http: HttpClient) { }

  getEmployees() {   
    return this.http.get(environment.apiBaseURI + "/api/Employes/GetEmp")  ;
 }  

//  addEmployees(emp:Employee) {   
  
//   return this.http.post(environment.apiBaseURI + '/api/Employes/AddEmployes',emp) ;
  
// }  

 addEmployees(emp:Emp) {   
  
  return this.http.post(environment.apiBaseURI + "/api/Employes/AddEmployes",emp) ;
  
}  

updateEmployees(emp:Employee) {   
  return this.http.post(environment.apiBaseURI + "/api/Employes/UpdateEmployes",emp)  ;
}  

deleteEmployees(id) {   
  return this.http.delete(environment.apiBaseURI + "/api/Employes/DeleteEmployes/"+id)  ;
}

 
}
