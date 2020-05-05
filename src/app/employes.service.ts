import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  constructor(private http: HttpClient) { }

  getEmployees() {   
    return this.http.get(environment.apiBaseURI + '/api/Employes/GetEmp')  
 }  

 addEmployees(Employes) {   
  return this.http.post(environment.apiBaseURI + '/api/Employes/AddEmployes',Employes)  
}  

updateEmployees(Employes) {   
  return this.http.post(environment.apiBaseURI + '/api/Employes/UpdateEmployes',Employes)  
}  

deleteEmployees(id) {   
  return this.http.post(environment.apiBaseURI + '/api/Employes/DeleteEmployes',id)  
}


 
}
