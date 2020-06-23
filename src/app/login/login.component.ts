import { EmployesService } from './../employes.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Login, Employee } from '../emp';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formModel = {
    userName: '',
    password: ''
  }

  disList: any;
  depList: any;
  emp: Login = new Login ();

  message:any;

  constructor(public http: HttpClient,private employeeService: EmployesService,public router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  
    if (localStorage.getItem('token') != null)
    this.gotoList();
  }

  // public registerNow(){
  // {
  //     (this.employeeService.Login(this.emp)).subscribe((data)=>{this.message=(data)
  //       this.gotoList()
  //       if(this.message != null)
  //     {
        
  //       this.toastr.success("Login Successfully!");
  //     }
  //     else
  //     {
  //       this.toastr.warning("UserName or password is not correct!");
  //     }
  //     });
  //   }   
  // }
  // gotoList() {
  //   this.router.navigate(["/List-Employee"]);
  // }

  onSubmit(form: NgForm) {
    this.employeeService.Login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.toastr.success('Login Sucessfully')
        this.gotoList();
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else
          console.log(err);
      }
    );
  }

  gotoList() {
    // this.router.navigateByUrl('/List-Employee', { skipLocationChange: true });
    this.router.navigate(["/Main-Page"]);
  }
}