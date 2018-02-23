import { ApiConfig } from './../../shared/api.config';
import { Credentials } from './../credentials';
import { RestService } from './../../shared/rest.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
subscriptionForm = new FormGroup({
login: new FormControl('', [Validators.maxLength(16)]),
password: new FormControl('', [passwordValidator()]),
});
  constructor(public restService: RestService, public router: Router, public apiConfig: ApiConfig) { }
  model = {};
error: string;
  ngOnInit() {
  }
  subscribeUser() {
    const credentials: Credentials = {
      login: this.subscriptionForm.value.login,
      password: this.subscriptionForm.value.password
    };
    console.log('subscribing', credentials);
    this.restService
    .postUser(credentials)
    .subscribe((answer) => {
      console.log(answer);
      this.router.navigate([this.apiConfig.messages.route])
    },
  (response) => {
    console.log('ERROR', response);
    this.error = response.error.error;
  } );
   }
}

function passwordValidator(): ValidatorFn {
  function passwordValidateurFn(passwordControl: FormControl): any {
   const password = passwordControl.value;
   if ( password && password.length > 4 && password.length < 16) {
     return null;
   }
   return {'invalidPassword': {value: password}};
  }
  return passwordValidateurFn;
}
