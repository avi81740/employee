import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees = [
    {name:'Vivek',position:'Developer'},
    {name:'Avinash',position:'Manager'},
    {name:'Ashu',position:'Manager'},
    {name:'Saurabh',position:'Manager'},
    {name:'Rinki',position:'Developer'},
    {name:'Ankit',position:'Analyst'},
    {name:'Saurabh',position:'Manager'},
    {name:'Rinki',position:'Developer'},
    {name:'Ankit',position:'Analyst'},
    {name:'Saurabh',position:'Manager'},
    {name:'Rinki',position:'Developer'},
    {name:'Ankit',position:'Analyst'}
    
  ];
  
  constructor() { }
 
  color:any;

  myValue:any;
  model2:any = {};
  model:any = {};
  
  editEmployee(editEmployeeInfo:any){
    console.log(this.employees[editEmployeeInfo])
    this.model2.name = this.employees[editEmployeeInfo].name;
    this.model2.position = this.employees[editEmployeeInfo].position;
    this.myValue = editEmployeeInfo;
  }
  updateEmployee(){
    let editEmployeeInfo = this.myValue;
    
    for(let i=0; i<this.employees.length; i++){
      if(i==editEmployeeInfo){
        this.employees[i] = this.model2;
        this.model2 = {}
        console.log(this.employees[i])
      }
    }
  }
}
