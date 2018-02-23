import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsersService } from './users.service';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SubscribeComponent, LoginComponent],
  providers: [UsersService]
})
export class UsersModule { }
