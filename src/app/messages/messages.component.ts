import { MessagesService } from './messages.service';
import { Message } from './message/message';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MockMessages } from '../mocks';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnDestroy {
  // private _messages: Message[]; // Array<Message>;
  private _messages: Message[] = [];
  private subscription: ISubscription;
  constructor(public messagesService: MessagesService) {
    this.messagesService = messagesService;
  }

  ngOnInit() {
   this.subscription = this.messagesService.getMessages().subscribe((messages) => {
   this._messages = messages;
    });
  }
  deleteMessage(i) {
   const x = this._messages.length - i - 1;
    this._messages[x].hidden = true;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
