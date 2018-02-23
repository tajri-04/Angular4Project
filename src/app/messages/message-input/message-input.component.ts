
import { MessagesService } from './../../messages/messages.service';
import { Message, MessageType } from './../message/message';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {
 input: string;
 imageSwitch = false;
 imageURL: string;
  constructor( public messagesService: MessagesService) { }

  ngOnInit() {
  }

  onButtonClick() {
  console.log('button has been clicked', this.input);
  let message: Message = {
    author : 'theo' ,
    content: this.input ,
    date: Date.now().toString(),
    hidden: false,
    type:  MessageType.TEXT
  };
  // let messageType = MessageType.TEXT;
  if (this.imageURL) {
    if(this.imageURL.includes('youtube.com')) {
      message.type = MessageType.VIDEO;
    } else {
    message.type = MessageType.IMAGE;
    }
    message.image = this.imageURL;
  }
  this.messagesService.addMessage(message);
  this.input = '';
  this.imageSwitch = false;
  this.imageURL = '';
  }

}
