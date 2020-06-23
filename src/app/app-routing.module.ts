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
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';



const routes: Routes = [

  { path: '', redirectTo: 'Login', pathMatch: 'full' }, 

  { path: 'Main-Page', component: MasterpageComponent,canActivate:[AuthGuard] }, 
  { path: 'Admin-page', component: DepartmentComponent,canActivate:[AuthGuard] }, 

  { path: 'Add-Employee', component: AddComponent,canActivate:[AuthGuard] },  
  { path: 'List-Employee', component: ListComponent,canActivate:[AuthGuard] },
  { path: 'Update-Employee/:id', component: UpdateComponent,canActivate:[AuthGuard] },

  { path: 'Add-Department', component: AdddepartmentComponent,canActivate:[AuthGuard] },  
  { path: 'List-Department', component: ListdepartmentComponent,canActivate:[AuthGuard] },
  { path: 'Update-Department/:departmentId', component: UpdatedepartmentComponent,canActivate:[AuthGuard] },

  { path: 'Add-Designation', component: AdddesignationComponent,canActivate:[AuthGuard] },  
  { path: 'List-Designation', component: ListdesignationComponent,canActivate:[AuthGuard] },
  { path: 'Update-Designation/:designationId', component: UpdatedesignationComponent,canActivate:[AuthGuard] },

  { path: 'Login', component: LoginComponent },

  { path: '**', redirectTo: 'Login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
