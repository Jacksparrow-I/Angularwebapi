import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { EmployesService } from "./employes.service";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddComponent } from './employee/add/add.component';
import { ListComponent } from './employee/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([  
      { path: 'add-employee', component: AddComponent },  
      { path: 'list-employee', component: ListComponent }
  ])  
  ],
  providers: [EmployesService],
  bootstrap: [AppComponent,AddComponent,ListComponent]
})
export class AppModule { }
