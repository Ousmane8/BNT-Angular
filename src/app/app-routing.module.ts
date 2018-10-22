import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { CustomersComponent } from './pages/customers/customers.component';

const routes: Routes = [

    {
        path:'',
        component:HomeComponent,
    },
    {
        path:'employees',
        component:EmployeesComponent,
    },
    {
        path:'employee/:id',
        component:EmployeeComponent,
    },
    {
        path:'create',
        component:CreateComponent,
    },
    {
        path:'update/:id',
        component:UpdateComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
