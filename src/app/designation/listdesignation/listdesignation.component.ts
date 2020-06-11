import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { EmployesService } from '../../employes.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listdesignation',
  templateUrl: './listdesignation.component.html',
  styleUrls: ['./listdesignation.component.css']
})
export class ListdesignationComponent implements OnInit {

  constructor(private http: HttpClient,private employeeService: EmployesService,public route: ActivatedRoute,public router: Router,private toastr: ToastrService) { 

    this.reloadData();
  }

  reid : any;
  public disList: any;
  term: string;

  ngOnInit(): void {

    this.reloadData();
    
  }

  reloadData() {
    this.employeeService.getDesignation()
      .subscribe((data) => this.disList=data);
  }

  GetById(designationId: number){
    this.router.navigate(['Update-Designation',designationId]);

  }

  deletedata(designationId:number){
    if(confirm('Are you sure you want to delete this record !'))
    {
     let resp= this.employeeService.deleteDesignation(designationId);
     resp.subscribe((data)=> {this.reid=data; this.reloadData()}); 
    }
  }


}
