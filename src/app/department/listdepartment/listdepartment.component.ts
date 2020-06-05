import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { EmployesService } from '../../employes.service'; 
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listdepartment',
  templateUrl: './listdepartment.component.html',
  styleUrls: ['./listdepartment.component.css']
})
export class ListdepartmentComponent implements OnInit {

  constructor(private http: HttpClient,private employeeService: EmployesService,public router: Router) { }

  public empList: any;
  term: string;

  ngOnInit(): void {

    this.employeeService.getDepartment()
      .subscribe((data) => this.empList=data);
  }

  GetById(departmentId: number){
    this.router.navigate(['Update-Department',departmentId]);
  }

  deletedata(departmentId:number){
    if(confirm('Are you sure you want to delete this record !'))
    {
     let resp= this.employeeService.deleteDepartment(departmentId);
     resp.subscribe((data)=>this.empList=data);
    }
  }
}
