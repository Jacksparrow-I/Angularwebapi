import { ValidatorFn } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"; 
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {Emp} from './emp';
import {Employee} from './emp';
import {Dep} from './emp';
import {Department} from './emp';
import {Des} from './emp';
import {Desigantion} from './emp';
import {Login} from './emp';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  constructor(private http: HttpClient) { }



//********************************************* Department ***************************************************//


 getDepartment() {   
    return this.http.get(environment.apiBaseURI + "/api/Employee/GetDepartment");
 } 

 addDepartment(emp:Dep) {   
  
  return this.http.post(environment.apiBaseURI + "/api/Employee/AddDepartment",emp,{responseType:'text' as 'json'}) ;
}  

updateDepartment(emp:Department,departmentId) {   
  return this.http.post(environment.apiBaseURI + "/api/Employee/UpdateDepartment/" + departmentId,emp,{responseType:'text' as 'json'})  ;
}  

deleteDepartment(departmentId) {   
  return this.http.delete(environment.apiBaseURI + "/api/Employee/DeleteDepartment/"+departmentId);
}

DepGetById(departmentId): Observable<any> {   
  return this.http.get(environment.apiBaseURI + "/api/Employee/DepartmentById/"+departmentId);
}

//********************************************* Designation ***************************************************//


 getDesignation() {   
    return this.http.get(environment.apiBaseURI + "/api/Employee/GetDesignation")  ;
 } 

 addDesignation(emp:Des) {   
  
  return this.http.post(environment.apiBaseURI + "/api/Employee/AddDesignation",emp,{responseType:'text' as 'json'}) ;
}  

updateDesignation(emp:Desigantion,designationId:number) {   
  return this.http.post(environment.apiBaseURI + "/api/Employee/UpdateDesignation/" + designationId,emp,{responseType:'text' as 'json'})  ;
}  

deleteDesignation(designationId) {   
  return this.http.delete(environment.apiBaseURI + "/api/Employee/DeleteDesignation/" + designationId);
}

DesGetById(designationId): Observable<any> {   
  return this.http.get(environment.apiBaseURI + "/api/Employee/DesignationById/" + designationId);
}

//********************************************* Employee ***************************************************//

getEmployees() { 

  return this.http.get(environment.apiBaseURI + "/api/Employee/GetItems")  ;
}  

 addEmployees(emp:Emp) {   
  
  return this.http.post(environment.apiBaseURI + "/api/Employee/SaveItem",emp,{responseType:'text' as 'json'}) ;
}  

updateEmployees(emp:Employee,id) {   
  return this.http.post(environment.apiBaseURI + "/api/Employee/UpdateItem/" + id,emp,{responseType:'text' as 'json'})  ;
}  

deleteEmployees(id) {   
  return this.http.delete(environment.apiBaseURI + "/api/Employee/DeleteItem/"+id);
}

EmpGetById(id): Observable<any> {   
  return this.http.get(environment.apiBaseURI + "/api/Employee/EmployeeById/"+id);
}

Login(FormData) {   
  return this.http.post(environment.apiBaseURI + "/api/Authentication",FormData) ;
} 

 
}
