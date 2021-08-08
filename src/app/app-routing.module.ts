import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { MyChartComponent } from './my-chart/my-chart.component';

const routes: Routes = [
  { path: 'editEmployee', component: EditemployeeComponent },
  { path: 'employees', component: CrudComponent },
  { path: '', component: MyChartComponent },
  { path: 'home', component: MyChartComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
