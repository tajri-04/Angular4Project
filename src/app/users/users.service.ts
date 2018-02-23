import { Injectable } from '@angular/core';
import {RestService} from "../shared/rest.service";
import {Credentials} from "./credentials";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UsersService {
private location: Position;
private user;
private loginSubject =new Subject<any>();
private userSubject = new Subject<any>();


  constructor(public restService:RestService) { }


  getUserSubject(){
    return this.userSubject.asObservable();
  }

  loadUser(){
    this.restService.getUser().subscribe((user) => {
      console.log(user);
      this.user = user;
      this.userSubject.next(this.user);
    });
  }
getLocation() {
  navigator.geolocation.getCurrentPosition((position) => {
  this.location = position;
  console.log(position);
  });
}

 login(credentials : Credentials) :Observable<any>{
    this.restService
      .postLogin(credentials)
      .subscribe
      ((response) => this.onLoginSuccess(response,this.loginSubject),
     (response) => this.onLoginFail(response,this.loginSubject));
    return this.loginSubject.asObservable();
 }

private onLoginSuccess(response,subject){
    console.log(response);
  subject.next(response);
}


private onLoginFail(response,subject){
  console.log(response);
  subject.error(response);
}

logout(){
  this.restService.setToken('');
}


}
