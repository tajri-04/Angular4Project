import { Message } from './../messages/message/message';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ApiConfig } from './api.config';
import { Credentials } from '../users/credentials';
import {RequestOptions} from "@angular/http";
@Injectable()
export class RestService {

  private token = '';
 // static apiURL ='https://whispering-spire-74666.herokuapp.com/messages';
  constructor( private http: HttpClient, private apiConfig: ApiConfig) {
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
    }
  }


  setToken(token:string){
    console.log(token);
    this.token = token;
    localStorage.setItem('token',token);
  }

  getMessages() {
    //const  options ={headers:{'Authorisation' : this.token}};
    const headers = new HttpHeaders();
    headers.append('Authorisation' , this.token);
    const options = {headers:headers};

    return this.http.get<Message[]>(this.apiConfig.messages.url , options);
  }
  postMessage(message: Message) {
    const headers = new HttpHeaders();
    headers.append('Authorisation' , this.token);
    const options = {headers:headers};
  return this.http.post<Message[]>(this.apiConfig.messages.url, message,options);
  }

  postUser(credentials: Credentials) {
    return this.http.post<any>(this.apiConfig.users.url, credentials);
  }

  getUser(){
    const headers = new HttpHeaders();
    headers.append('Authorisation' , this.token);
    const options = {headers:headers};
    return this.http.get<any>(this.apiConfig.users.url,options);
  }

  postLogin(credentials: Credentials) {
    return this.http.post<any>(this.apiConfig.login.url, credentials);
  }
}
