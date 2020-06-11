import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { EmployesService } from '../../employes.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private http: HttpClient,private employeeService: EmployesService,public router: Router,private toastr: ToastrService) { 

    this.reloadData();
  }

  public empList: any;
  public depList: any;
  public desList: any;
  reid: any;
  term: string;
  

  ngOnInit(): void {

    this.reloadData();
  }

  reloadData() {

      this.employeeService.getEmployees()
      .subscribe((data) => this.empList=data);

      this.employeeService.getDepartment()
      .subscribe((data) => this.depList=(data));

      this.employeeService.getDesignation()
      .subscribe((data) => this.desList=(data));
  }

  GetById(id: number){
    this.router.navigate(['Update-Employee',id]);
  }

 deletedata(id:number){
   if(confirm('Are you sure you want to delete this record !'))
   {
    let resp= this.employeeService.deleteEmployees(id);
    resp.subscribe((data)=> {this.reid=data; this.reloadData()});
   }
  
 }
 
}
