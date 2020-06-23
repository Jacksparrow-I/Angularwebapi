import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { EmployesService } from "./employes.service";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
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

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './auth/auth.interceptor';


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
    MasterpageComponent,
    LoginComponent
  ],  
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,  
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [EmployesService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
