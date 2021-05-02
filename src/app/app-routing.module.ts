import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDetailsComponent } from './add-details/add-details.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path :  '', component: TableComponent, pathMatch: 'full' },
  { path : "form-deatails", component : AddDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
