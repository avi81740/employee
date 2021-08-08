import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { FormsModule } from '@angular/forms';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { ChartsModule } from 'ng2-charts';
import { MyChartComponent } from './my-chart/my-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    EditemployeeComponent,
    MyChartComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
