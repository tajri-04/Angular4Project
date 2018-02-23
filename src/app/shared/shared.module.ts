import { ApiConfig } from './api.config';
import { RestService } from './rest.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {WebsocketService} from "./websocket.service";


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [],
  providers: [ RestService, ApiConfig,WebsocketService]
})
export class SharedModule { }
