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

  public empList: any;

  ngOnInit(): void {

    this.employeeService.getEmployees()
      .subscribe((data) => this.empList=(data));
  }

  delete(Id) {  
    var ans = confirm("Do you want to delete customer with Id: " + Id);  
    if (ans) {  
        this.employeeService.deleteEmployees(Id).subscribe((data) => {  
            this.ngOnInit();  
        }, error => console.error(error))   
    }  
}  

}
