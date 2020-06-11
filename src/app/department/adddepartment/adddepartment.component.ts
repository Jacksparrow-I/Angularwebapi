import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { EmployesService } from '../../employes.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { Dep, Employee } from '../../emp';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css']
})
export class AdddepartmentComponent implements OnInit {

form = new FormGroup({
  departmentName: new FormControl('',Validators.required)

})

  dep: Dep = new Dep ("");
  message:any; 

  constructor(public http: HttpClient,private employeeService: EmployesService,public router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }

  public registerNow(){
     {
      let resp=this.employeeService.addDepartment(this.dep);
      resp.subscribe((data)=>{
        this.message=(data)
        if(this.message == 1)
        {
          this.gotoList()
          this.toastr.success("your record added Sucessfully!");
        }
        else if(this.message == -1)
        {
          this.toastr.warning("Oops ! Data is already exist.")
        }
        else
        {
          this.toastr.success("Error !!!");
        }
      });
      //this.toastr.success("Oops ! Data is already exist.")
     } 
  }

  gotoList() {
    this.router.navigateByUrl('/List-Department', { skipLocationChange: true });
    this.router.navigate(["/List-Department"]);
  }
  
}
  