import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { EmployesService } from '../../employes.service'; 
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';  
import { Router, ActivatedRoute } from '@angular/router';
import { Desigantion } from '../../emp';
import { DesId } from '../../emp';

@Component({
  selector: 'app-updatedesignation',
  templateUrl: './updatedesignation.component.html',
  styleUrls: ['./updatedesignation.component.css']
})
export class UpdatedesignationComponent implements OnInit {

  form = new FormGroup({
    designationId: new FormControl('',Validators.required),
    designationName: new FormControl('',Validators.required)
  })

  Des: Desigantion = new Desigantion (0,"");
  message:any; 
  designationId:number;
  public desobj : any;

  constructor(private http: HttpClient,private employeeService: EmployesService,public route: ActivatedRoute,public router: Router) { }

  ngOnInit(): void {

    this.desobj = new DesId();
    this.designationId = this.route.snapshot.params['designationId'];

    this.employeeService.DesGetById(this.designationId)
      .subscribe(data => {
        console.log(data)
        this.Des = data;
      }, error => console.log(error));
  }

  public Updatedata(){
    if(confirm('Your data updated successfully !'))
   {
    let resp=this.employeeService.updateDesignation(this.Des,this.designationId);
    resp.subscribe((data)=>this.message=data);

    this.Des = new DesId();
   }
  }
}