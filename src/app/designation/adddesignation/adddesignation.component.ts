import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { EmployesService } from '../../employes.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Des, Employee } from '../../emp';

@Component({
  selector: 'app-adddesignation',
  templateUrl: './adddesignation.component.html',
  styleUrls: ['./adddesignation.component.css']
})
export class AdddesignationComponent implements OnInit {

  form = new FormGroup({
    designationName: new FormControl('',Validators.required)
  })

  des: Des = new Des ("");
  message:any; 

  constructor(public http: HttpClient,private employeeService: EmployesService,public router: Router) { }

  ngOnInit(): void {
  }

  public registerNow(){
    if(confirm('your record added Sucessfully!'))
     {
      let resp=this.employeeService.addDesignation(this.des);
      resp.subscribe((data)=>this.message=(data));
     }
    
     
  }
  
  }
  