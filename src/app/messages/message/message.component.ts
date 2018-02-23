import { DomSanitizer } from '@angular/platform-browser';
import { MessageType } from './message-type';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
@Input() private message;
@Input() private index;
private messageType = MessageType;
  constructor( private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (this.message.type === MessageType.VIDEO) {
      this.message.image = this.message.image.replace('youtube.com/watch?v=', 'youtube.com/embed/');
this.message.video = this.sanitizer.bypassSecurityTrustResourceUrl(this.message.image);
    }
  }

}
