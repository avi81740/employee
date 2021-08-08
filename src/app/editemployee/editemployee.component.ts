import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

 
  model2:any = this.emp.model2;
  constructor(private emp : EmployeeService,private router: Router) { }

  ngOnInit(): void {
  }
 
  updateEmployee(){
    this.emp.updateEmployee();
    this.router.navigate(['/employees']);
  }
}
