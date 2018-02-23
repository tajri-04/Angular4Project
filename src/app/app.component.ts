import { UsersService } from './users/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MessageBoard';
  constructor (public usersService: UsersService) {
  }
  ngOnInit() {
    this.usersService.getLocation();
  }

}
