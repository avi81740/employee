import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {
  positions:string[] = []
  i :number[] = []
  
  constructor(private emp : EmployeeService) { 
  var search1 = 'Developer';
  var search2 = 'Manager';
  var search3 = 'Analyst';

  this.emp.employees.forEach(element => {              
      this.positions.push(element.position);
      console.log(this.positions)
  });
  let count1 = this.positions.reduce((n:any, x:any) => n + (x === search1), 0);
  let count2 = this.positions.reduce((n:any, x:any) => n + (x === search2), 0);
  let count3 = this.positions.reduce((n:any, x:any) => n + (x === search3), 0);
  this.i.push(count1,count2,count3)
  }
  

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
      fullWidth: true,
      display: true,
      labels: {
        fontFamily: 'Poppins',
        fontSize: 24,
        boxWidth: 20,
        padding: 30
      }
    }
  };
  public pieChartLabels: Label[] = ['Developer','Manager','Analyst'];
  public pieChartData: SingleDataSet = this.i;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

 

  ngOnInit() {
  }

}
