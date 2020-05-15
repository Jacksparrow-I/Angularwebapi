import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { EmployesService } from '../../employes.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { Dep, Employee } from '../../emp';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css']
})
export class AdddepartmentComponent implements OnInit {

  dep: Dep = new Dep ("");
  message:any; 

  constructor(public http: HttpClient,private employeeService: EmployesService,public router: Router) { }

  ngOnInit(): void {
  }

  public registerNow(){
    if(confirm('your record added Sucessfully!'))
     {
      let resp=this.employeeService.addDepartment(this.dep);
      resp.subscribe((data)=>this.message=(data));
     }
    
     
  }
  
  }
  