import { SubscribeComponent } from './users/subscribe/subscribe.component';
import { MessagesComponent } from './messages/messages.component';
import { Routes } from '@angular/router';
import {LoginComponent} from "./users/login/login.component";

export const appRoutes: Routes = [
    { path: '', redirectTo: '/messages', pathMatch: 'full'},
    { path: 'messages', component: MessagesComponent},
    { path: 'subscribe', component: SubscribeComponent},
  { path: 'login', component: LoginComponent},
    { path: '**', redirectTo: '/messages'},
];

