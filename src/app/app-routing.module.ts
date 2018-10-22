import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './pages/users/users.component';
import {HomeComponent} from './pages/home/home.component';
import {UserComponent} from './pages/user/user.component';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { CustomersComponent } from './pages/customers/customers.component';

const routes: Routes = [

    {
        path:'',
        component:HomeComponent,
    },
    {
        path:'users',
        component:UsersComponent,
    },
    {
        path:'user/:id',
        component:UserComponent,
    },
    {
        path:'user/:id',
        component:ProjectsComponent,
    },
    {
        path:'employees',
        component:EmployeesComponent,
    },
    {
        path:'user/:id',
        component:CustomersComponent,
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
