import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { EmployesService } from '../../employes.service'; 
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';  
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  employeeForm: FormGroup;
  title: string = "Add Employee";  
  id: number;  
  errorMessage: any; 

  constructor(private http: HttpClient,private employeeService: EmployesService,private fb: FormBuilder,private router: Router) { }

  

  ngOnInit(): void {
    
  }

  save() {  
    if (!this.employeeForm.valid) {  
        return;  
    }  
    if (this.title == "Add Employee") {  
        this.employeeService.addEmployees(this.employeeForm.value)  
            .subscribe((data) => {  
                this.router.navigate(['/list-employee']);  
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
