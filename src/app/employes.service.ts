import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { environment } from 'src/environments/environment'
import {Emp} from './emp';
import {Employee} from './emp';
import {Dep} from './emp';
import {Department} from './emp';
import {Des} from './emp';
import {Desigantion} from './emp';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  constructor(private http: HttpClient) { }



//********************************************* Department ***************************************************//


 getDepartment() {   
    return this.http.get(environment.apiBaseURI + "/api/Employee/GetDepartment")  ;
 } 

 addDepartment(emp:Dep) {   
  
  return this.http.post(environment.apiBaseURI + "/api/Employee/AddDepartment",emp) ;
}  

updateDepartment(emp:Department) {   
  return this.http.post(environment.apiBaseURI + "/api/Employee/UpdateDepartment",emp)  ;
}  

deleteDepartment(departmentId) {   
  return this.http.delete(environment.apiBaseURI + "/api/Employee/DeleteDepartment/"+departmentId)  ;
}

//********************************************* Designation ***************************************************//


 getDesignation() {   
    return this.http.get(environment.apiBaseURI + "/api/Employee/GetDesignation")  ;
 } 

 addDesignation(emp:Des) {   
  
  return this.http.post(environment.apiBaseURI + "/api/Employee/AddDesignation",emp) ;
}  

updateDesignation(emp:Desigantion) {   
  return this.http.post(environment.apiBaseURI + "/api/Employee/UpdateDesignation",emp)  ;
}  

deleteDesignation(designationId) {   
  return this.http.delete(environment.apiBaseURI + "/api/Employee/DeleteDesignation/"+designationId)  ;
}

//********************************************* Employee ***************************************************//

getEmployees() {   
  return this.http.get(environment.apiBaseURI + "/api/Employee/GetItems")  ;
}  

 addEmployees(emp:Emp) {   
  
  return this.http.post(environment.apiBaseURI + "/api/Employee/SaveItem",emp) ;
}  

updateEmployees(emp:Employee) {   
  return this.http.post(environment.apiBaseURI + "/api/Employee/UpdateItem",emp)  ;
}  

deleteEmployees(id) {   
  return this.http.delete(environment.apiBaseURI + "/api/Employee/DeleteItem/"+id)  ;
}

 
}
