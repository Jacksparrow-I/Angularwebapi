import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { EmployesService } from '../../employes.service'; 
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listdesignation',
  templateUrl: './listdesignation.component.html',
  styleUrls: ['./listdesignation.component.css']
})
export class ListdesignationComponent implements OnInit {

  constructor(private http: HttpClient,private employeeService: EmployesService,public router: Router) { }

  public empList: any;

  ngOnInit(): void {

    this.employeeService.getDesignation()
      .subscribe((data) => this.empList=data);

  }

  deletedata(designationId:number){
    if(confirm('Are you sure you want to delete this record !'))
    {
     let resp= this.employeeService.deleteDesignation(designationId);
     resp.subscribe((data)=>this.empList=data);
    }
  }
}
