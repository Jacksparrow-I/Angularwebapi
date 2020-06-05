import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { EmployesService } from '../../employes.service'; 
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';  
import { Router, ActivatedRoute } from '@angular/router';
import { Department } from '../../emp';
import { DepId } from '../../emp';

@Component({
  selector: 'app-updatedepartment',
  templateUrl: './updatedepartment.component.html',
  styleUrls: ['./updatedepartment.component.css']
})
export class UpdatedepartmentComponent implements OnInit {

  form = new FormGroup({
    departmentId: new FormControl('',Validators.required),
    departmentName: new FormControl('',Validators.required)
  })

  Dep: Department = new Department (0,"");
  message:any; 
  departmentId:number;
  public depobj : any;


  constructor(private http: HttpClient,private employeeService: EmployesService,public route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

    this.depobj = new DepId();
    this.departmentId = this.route.snapshot.params['departmentId'];

    this.employeeService.DepGetById(this.departmentId)
    .subscribe(data => {
      console.log(data)
      this.Dep = data;
    }, error => console.log(error));
  }

  public Updatedata(){
    if(confirm('Your data updated successfully !'))
   {
    let resp=this.employeeService.updateDepartment(this.Dep,this.departmentId);
    resp.subscribe((data)=>this.message=data);

    this.Dep = new DepId();
   }
  }
}