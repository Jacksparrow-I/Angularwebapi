import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { EmployesService } from '../../employes.service'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private http: HttpClient,private employeeService: EmployesService) { }

  empList: any;

  ngOnInit(): void {

    this.employeeService.getEmployees()
      .subscribe((data) => this.empList=(data));
  }

}
