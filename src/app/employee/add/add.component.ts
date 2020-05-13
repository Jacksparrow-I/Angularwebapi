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

  public disList: any;
  public depList: any;
  emp: Emp = new Emp ("","",0,"",0,0,"",0);
  message:any;   
  // employee: Employee = new Employee ("hello hi");

  constructor(public http: HttpClient,private employeeService: EmployesService,public router: Router) { }

  ngOnInit(): void {

    this.employeeService.getDepartment()
      .subscribe((data) => this.disList=(data));

      this.employeeService.getDesignation()
      .subscribe((data) => this.depList=(data));
  }

  // registerNow() {  
     
  //       this.employeeService.addEmployees(this.emp)
  //           .subscribe((data) => {  
  //               this.router.navigate(['/listemp']);  
  //           }, error => this.message = error)  
  //   }

public registerNow(){
  if(confirm('your record added Sucessfully!'))
   {
    let resp=this.employeeService.addEmployees(this.emp);
    resp.subscribe((data)=>this.message=data);
   }
  
   
}

}
