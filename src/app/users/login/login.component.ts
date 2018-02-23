import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {Credentials} from "../credentials";
import {RestService} from "../../shared/rest.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login :string;
  password: string;

  constructor(public userService:UsersService,public restService:RestService) { }

  ngOnInit() {
  }


  OnLoginButtonClick() {
    console.log(this.login, this.password);

    const credentials :Credentials = {
      login : this.login,
      password :this.password
    };
    this.userService.login(credentials)
      .subscribe((response)=> {
       console.log("LOGIN SUCCEFUL" ,response);
       this.restService.setToken(response.token);
    },
        (error) => {
        console.log('onError' , error);
        }

    );
  }

}
