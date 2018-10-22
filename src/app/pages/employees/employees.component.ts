import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees;

  constructor(private usersService:UsersService) { 
    this.usersService.getEmployees().subscribe(employees=>{
      this.employees=employees;
      console.log(employees);
  })
  }

  

  ngOnInit() {
  }
  deleteEmployee(id){
    this.usersService
    .delete(id).subscribe(resp=>{
        console.log(resp);
    });
    // on recharge la page
    location.reload();
}

}
