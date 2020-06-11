import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { EmployesService } from '../../employes.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Des, Employee } from '../../emp';

@Component({
  selector: 'app-adddesignation',
  templateUrl: './adddesignation.component.html',
  styleUrls: ['./adddesignation.component.css']
})
export class AdddesignationComponent implements OnInit {

  form = new FormGroup({
    designationName: new FormControl('',Validators.required)
  })

  des: Des = new Des ("");
  message:any; 

  constructor(public http: HttpClient,private employeeService: EmployesService,public router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  
  public registerNow(){
     {
      let resp=this.employeeService.addDesignation(this.des);
      resp.subscribe((data)=>{
        this.message=(data)
        if(this.message == 1)
        {
          this.gotoList()
          this.toastr.success("your record added Sucessfully!");
        }
        else if(this.message == -1)
        {
          this.toastr.warning("Oops ! Data is already exist");
        }
        else
        {
          this.toastr.warning("Error !!!");
        }
      });

     }
  }

  gotoList() {
    this.router.navigateByUrl('/List-Designation', { skipLocationChange: true });
    this.router.navigate(["/List-Designation"]);
  }
  
}
  