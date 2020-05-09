import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { EmployesService } from '../../employes.service'; 
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';  
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../../emp';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  emp: Employee = new Employee (0,"","",0,"",0,0,"",0);
  message:any; 


  constructor(private http: HttpClient,private employeeService: EmployesService,private router: Router) { }

  ngOnInit(): void {
  }

  public Updatedata(){
    if(confirm('Your data updated successfully !'))
   {
    let resp=this.employeeService.updateEmployees(this.emp);
    resp.subscribe((data)=>this.message=data);
   }
    
     
  }
  

}
