import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { EmployesService } from '../../employes.service'; 
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';  
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../../emp';
import { EmpId } from '../../emp';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  form = new FormGroup({
    id: new FormControl('',Validators.required),
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
  emp: Employee = new Employee (0,"","",0,"",0,0,"",0);
  message:any; 
  id:number;
  public empobj : any;


  constructor(private http: HttpClient,private employeeService: EmployesService,public route: ActivatedRoute,private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {

    this.disList=this.employeeService.getDesignation().subscribe((data)=>this.disList=data);
    this.depList=this.employeeService.getDepartment().subscribe((data)=>this.depList=data);

    this.empobj = new EmpId();
    this.id = this.route.snapshot.params['id'];

    this.employeeService.EmpGetById(this.id)
    .subscribe(data => {
      console.log(data)
      this.emp = data;
    }, error => console.log(error));
    
  }


  public Updatedata(){
   {
    let resp=this.employeeService.updateEmployees(this.emp,this.id);
    resp.subscribe((data)=>{
      this.message=(data)
      if( data == 1)
      {
        this.gotoList()
        this.toastr.success("your record Update Sucessfully!");
      }
      else if( data == -1)
      {
        this.toastr.warning("Oops ! Data is already exist");
      }
      else
      {
        this.toastr.warning("Error !!!");
      }
    });
    //this.Des = new DesId();
   }
  }
  gotoList() {
    this.router.navigateByUrl('/List-Employee', { skipLocationChange: true });
    this.router.navigate(["/List-Employee"]);
  }
  
}
