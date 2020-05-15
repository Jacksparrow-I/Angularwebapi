import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { EmployesService } from "./employes.service";

import { FormsModule } from '@angular/forms';  
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddComponent } from './employee/add/add.component';
import { ListComponent } from './employee/list/list.component';
import { UpdateComponent } from './employee/update/update.component';
import { DepartmentComponent } from './department/department.component';
import { AdddepartmentComponent } from './department/adddepartment/adddepartment.component';
import { ListdepartmentComponent } from './department/listdepartment/listdepartment.component';
import { UpdatedepartmentComponent } from './department/updatedepartment/updatedepartment.component';
import { DesignationComponent } from './designation/designation.component';
import { AdddesignationComponent } from './designation/adddesignation/adddesignation.component';
import { ListdesignationComponent } from './designation/listdesignation/listdesignation.component';
import { UpdatedesignationComponent } from './designation/updatedesignation/updatedesignation.component';
import { MasterpageComponent } from './masterpage/masterpage.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddComponent,
    ListComponent,
    UpdateComponent,
    DepartmentComponent,
    AdddepartmentComponent,
    ListdepartmentComponent,
    UpdatedepartmentComponent,
    DesignationComponent,
    AdddesignationComponent,
    ListdesignationComponent,
    UpdatedesignationComponent,
    MasterpageComponent
  ],  
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,  
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
