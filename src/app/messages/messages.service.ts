import { RestService } from './../shared/rest.service';
import { Message } from './message/message';
import { Injectable } from '@angular/core';
import {MockMessages} from '../mocks';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class MessagesService {
private _messages: Message [] = [];
private messagesSubjet = new Subject<Message[]>();
private _nickname;

  constructor( private restService:RestService) {
    this.messagesSubjet.next(this._messages);
   }
  getMessages(): Observable<Message[]> {
   /* if (!this._messages) {
      this._messages = MockMessages;
    }
    return this._messages;*/
    this.loadMessages();
 // return of(this._messages);
 return this.messagesSubjet.asObservable();
  }

  addMessage(message: Message) {
   // this._messages.push(message);
   this.restService.postMessage(message).subscribe((messages) => {
    this._messages = messages;
    this.messagesSubjet.next(this._messages);
   });
  }
  getSyncMessages() {
    return this._messages;
  }
  loadMessages() {
   // this._messages = MockMessages.concat([]);
   // this.messagesSubjet.next(this._messages);
   this.restService.getMessages().subscribe((messages) => {
     this._messages = messages;
     this.messagesSubjet.next(this._messages);
    });
  }
}
