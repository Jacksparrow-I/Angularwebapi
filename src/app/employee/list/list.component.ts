import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { EmployesService } from '../../employes.service'; 
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private http: HttpClient,private employeeService: EmployesService,public router: Router) { }

  public empList: any;
  

  ngOnInit(): void {

    this.employeeService.getEmployees()
      .subscribe((data) => this.empList=(data));

      this.employeeService.getDepartment()
      .subscribe((data) => this.empList=(data));

      this.employeeService.getDesignation()
      .subscribe((data) => this.empList=(data));
  }



 deletedata(id:number){
   if(confirm('Are you sure you want to delete this record !'))
   {
    let resp= this.employeeService.deleteEmployees(id);
    resp.subscribe((data)=>this.empList=data);
   }
  
 }
 
}
