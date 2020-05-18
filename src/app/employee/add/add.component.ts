import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { EmployesService } from '../../employes.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { Emp, Employee } from '../../emp';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  disList: any;
  depList: any;
  emp: Emp = new Emp ("","",0,"",0,0,"",0);
  message:any;   
  // employee: Employee = new Employee ("hello hi");

  constructor(public http: HttpClient,private employeeService: EmployesService,public router: Router) { }

  ngOnInit(): void {

    // this.employeeService.getDepartment()
    //   .subscribe((data) => this.disList=(data));

    //   this.employeeService.getDesignation()
    //   .subscribe((data) => this.depList=(data));

    this.disList=this.employeeService.getDesignation().subscribe((data)=>this.disList=data);
    this.depList=this.employeeService.getDepartment().subscribe((data)=>this.depList=data);
  }

  // registerNow() {  
     
  //       this.employeeService.addEmployees(this.emp)
  //           .subscribe((data) => {  
  //               this.router.navigate(['/listemp']);  
  //           }, error => this.message = error)  
  //   }

public registerNow(){
    let resp=this.employeeService.addEmployees(this.emp);
    resp.subscribe((data)=>this.message=(data));
    
    if(this.message == 1)
    {
      alert("Employee added Sucessfully");
    }   
    else
    {
      alert("Enter all required fields");
    }
   
}

}
