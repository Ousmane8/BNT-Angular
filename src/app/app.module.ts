import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/user/user.component';
import { CreateComponent } from './pages/create/create.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { HomeComponent } from './pages/home/home.component';

// services
import {UsersService} from './services/users.service';
import { UpdateComponent } from './pages/update/update.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { ProjectComponent } from './pages/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    UserComponent,
    UpdateComponent,
    CreateComponent,
    ProjectsComponent,
    EmployeesComponent,
    CustomersComponent,
    HomeComponent,
    EmployeeComponent,
    CustomerComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
