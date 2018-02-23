import { Injectable } from '@angular/core';
import {ApiConfig} from "./api.config";

@Injectable()
export class WebsocketService {

  private ws : WebSocket;

  constructor(private apiConfig : ApiConfig) {

  }

  init(){
    this.ws  = new WebSocket(this.apiConfig.wsUrl);
    this.ws.onmessage = (message) => {
      console.log('websocket service :: onMessage' , message);
    }
  }

}
