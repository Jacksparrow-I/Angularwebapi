import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { EmployesService } from '../../employes.service'; 
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';  
import { Router, ActivatedRoute } from '@angular/router';
import { Desigantion } from '../../emp';

@Component({
  selector: 'app-updatedesignation',
  templateUrl: './updatedesignation.component.html',
  styleUrls: ['./updatedesignation.component.css']
})
export class UpdatedesignationComponent implements OnInit {

  Des: Desigantion = new Desigantion (0,"");
  message:any; 


  constructor(private http: HttpClient,private employeeService: EmployesService,private router: Router) { }

  ngOnInit(): void {
  }

  public Updatedata(){
    if(confirm('Your data updated successfully !'))
   {
    let resp=this.employeeService.updateDesignation(this.Des);
    resp.subscribe((data)=>this.message=data);
   }
  }
}