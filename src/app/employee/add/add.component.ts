import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { EmployesService } from '../../employes.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Emp, Employee } from '../../emp';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    employeeCode: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),
    designation: new FormControl('',Validators.required),
    department: new FormControl('',Validators.required),
    dob: new FormControl('',Validators.required),
    salary: new FormControl('',Validators.required)
  })

  
  disList: any;
  depList: any;
  emp: Emp = new Emp ("","",0,"",0,0,"",0);
  message:any;   
  // employee: Employee = new Employee ("hello hi");

  constructor(public http: HttpClient,private employeeService: EmployesService,public router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {

    this.disList=this.employeeService.getDesignation().subscribe((data)=>this.disList=data);
    this.depList=this.employeeService.getDepartment().subscribe((data)=>this.depList=data);
  }

public registerNow(){
  {

    let resp=this.employeeService.addEmployees(this.emp);resp.subscribe((data)=>{this.message=(data)
    
      if(this.message == 1)
    {
      this.gotoList()
      this.toastr.success("your record added Sucessfully!");
    }
    else if(this.message == -1)
    {
      this.toastr.warning("Oops ! Employee Code is already exist");
    }
    else if( data == -2)
      {
        this.toastr.warning("Age should be more then 21 years");
      }
    else
    {
      this.toastr.warning("Error !!!");
    }
    });
  }   
}

gotoList() {
  // this.router.navigateByUrl('/List-Employee', { skipLocationChange: true });
  this.router.navigate(["/List-Employee"]);
}

}
