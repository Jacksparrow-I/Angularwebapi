import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AddComponent } from './employee/add/add.component';
import { ListComponent } from './employee/list/list.component';
import { UpdateComponent } from './employee/update/update.component';


const routes: Routes = [

  { path: '', redirectTo: 'Add-Employee', pathMatch: 'full' }, 
  { path: 'Add-Employee', component: AddComponent },  
  { path: 'List-Employee', component: ListComponent },
  { path: 'Update-Employee', component: UpdateComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
