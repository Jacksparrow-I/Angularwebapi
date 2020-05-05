import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { EmployesService } from '../../employes.service'; 
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';  
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  employeeForm: FormGroup;
  title: string = "Add Employee";  
  id: number;  
  errorMessage: any; 

  constructor(private http: HttpClient,private employeeService: EmployesService,private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }

  update() {  
    
    if (this.employeeForm.valid) {  
        this.employeeService.updateEmployees(this.employeeForm.value)  
            .subscribe((data) => {  
                this.router.navigate(['/update-employee']);  
            }, error => this.errorMessage = error)  
    }
}  

get name() { return this.employeeForm.get('name'); }  
get email() { return this.employeeForm.get('email'); }  
get employeecode() { return this.employeeForm.get('employeecode'); }  
get city() { return this.employeeForm.get('city'); }  
get Gender() { return this.employeeForm.get('Gender'); }  
get department() { return this.employeeForm.get('department'); }  
get designation() { return this.employeeForm.get('designation'); }
get dob() { return this.employeeForm.get('dob'); }  
get salary() { return this.employeeForm.get('salary'); }

}
