import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { EmployesService } from '../../employes.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { Emp } from '../../emp';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  
  emp: Emp=new Emp("","",0,"",0,"","",0);
  message:any;   

  constructor(public http: HttpClient,private employeeService: EmployesService,public router: Router) { }

  

  ngOnInit(): void {
    
  }

  // save() {  
     
  //       this.employeeService.addEmployees()  
  //           .subscribe((data) => {  
  //               this.router.navigate(['/list-employee']);  
  //           }, error => this.errorMessage = error)  
  //   }

public registerNow(){
  let resp=this.employeeService.addEmployees(this.emp);
  resp.subscribe((data)=>this.message=data);
   
}

}
