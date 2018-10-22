import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  user;
  userId;

    formUpdate={
      name:"",
      firstname:"",
      username:"",
      birthday:"",
      address:"",
      city:"",
      zipcode:"",
      phone:"",
      email:"",
      post:""
    }

  constructor(private usersService:UsersService,private route:ActivatedRoute) {
      this.route.params.subscribe((params) => {
          this.userId=params['id'];
      })

      this.usersService.getUser(this.userId).subscribe(user=>{

          this.user=user;
          console.log(this.user);

      });
  }

  ngOnInit() {
  }
  updateEmployee(id){
      this.usersService
      .updatedEmployee(this.formUpdate.name,
        this.formUpdate.firstname,
        this.formUpdate.username,
        this.formUpdate.birthday,
        this.formUpdate.address,
        this.formUpdate.city,
        this.formUpdate.zipcode,
        this.formUpdate.phone,
        this.formUpdate.email,
        this.formUpdate.post,
        this.userId)      
  }

}