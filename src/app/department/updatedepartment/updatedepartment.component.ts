import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { EmployesService } from '../../employes.service'; 
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';  
import { Router, ActivatedRoute } from '@angular/router';
import { Department } from '../../emp';

@Component({
  selector: 'app-updatedepartment',
  templateUrl: './updatedepartment.component.html',
  styleUrls: ['./updatedepartment.component.css']
})
export class UpdatedepartmentComponent implements OnInit {

  Dep: Department = new Department (0,"");
  message:any; 


  constructor(private http: HttpClient,private employeeService: EmployesService,private router: Router) { }

  ngOnInit(): void {
  }

  public Updatedata(){
    if(confirm('Your data updated successfully !'))
   {
    let resp=this.employeeService.updateDepartment(this.Dep);
    resp.subscribe((data)=>this.message=data);
   }
  }
}