import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  constructor(private http: HttpClient) { }

  getEmployees() {   
    return this.http.get(environment.apiBaseURI + '/api/Employes/GetEmp')  ;
 }  

 addEmployees(emp) {   
  
  return this.http.post(environment.apiBaseURI + '/api/Employes/AddEmployes',emp,{responseType:'text' as 'json'}) ;
  
}  

updateEmployees(emp) {   
  return this.http.post(environment.apiBaseURI + '/api/Employes/UpdateEmployes',emp)  ;
}  

deleteEmployees(id) {   
  return this.http.post(environment.apiBaseURI + '/api/Employes/DeleteEmployes',id)  ;
}


 
}
