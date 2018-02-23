import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users/users.service";
import {log} from "util";
import {WebsocketService} from "../shared/websocket.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user :any;

  constructor(public userService :UsersService,public websocketService:WebsocketService,public title:Title) { }
  ngOnInit() {
    this.websocketService.init();
    this.userService.loadUser();
    this.userService.getUserSubject().subscribe((user) => {
      console.log(user);
      this.user = user;
    });
    this.title.setTitle('(1) Messages')
  }

}
