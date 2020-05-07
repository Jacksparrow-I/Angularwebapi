import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddComponent } from './employee/add/add.component';
import { ListComponent } from './employee/list/list.component';
import { UpdateComponent } from './employee/update/update.component';


const routes: Routes = [

  // { path: '', redirectTo: 'addemp', pathMatch: 'full' }, 
  // { path: 'addemp', component: AddComponent },  
  // { path: 'listemp', component: ListComponent },
  // { path: 'updateemp', component: UpdateComponent },
  // { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
