import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  employees = this.emp.employees;
  newEmployeeClicked = false;
  constructor(private emp : EmployeeService) { }

  ngOnInit(): void {
    
  }
  editEmployee(i:any){
    this.emp.editEmployee(i);
  }
  model:any = {};
 
  AddEmployee(){
    this.employees.push(this.model);
    this.model = {}
  }
  
  AddNewEmployeeBtn(){
    this.newEmployeeClicked = !this.newEmployeeClicked;
  }
  deleteEmployee(i:any){
    this.emp.employees.splice(i,1)
  }

}
