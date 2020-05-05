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

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddComponent,
    ListComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployesService],
  bootstrap: [AppComponent,AddComponent,ListComponent,UpdateComponent]
})
export class AppModule { }
