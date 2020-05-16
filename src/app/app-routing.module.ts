import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
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


const routes: Routes = [

  { path: '', redirectTo: 'Main-Page', pathMatch: 'full' }, 

  { path: 'Main-Page', component: MasterpageComponent }, 
  { path: 'Admin-page', component: DepartmentComponent }, 

  { path: 'Add-Employee', component: AddComponent },  
  { path: 'List-Employee', component: ListComponent },
  { path: 'Update-Employee', component: UpdateComponent },

  { path: 'Add-Department', component: AdddepartmentComponent },  
  { path: 'List-Department', component: ListdepartmentComponent },
  { path: 'Update-Department', component: UpdatedepartmentComponent },

  { path: 'Add-Designation', component: AdddesignationComponent },  
  { path: 'List-Designation', component: ListdesignationComponent },
  { path: 'Update-Designation', component: UpdatedesignationComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
