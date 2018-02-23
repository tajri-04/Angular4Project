import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageComponent } from './message/message.component';
import { MessagesComponent } from './messages.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { MessagesService } from './messages.service';
import { FormsModule} from '@angular/forms';
import { MessageHideDirective } from './message-hide.directive';
import { HashTagsPipe } from './hash-tags.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    MessageComponent,
    MessagesComponent,
    MessageInputComponent,
    MessageHideDirective,
    HashTagsPipe
  ],
  exports: [ MessageComponent,
    MessagesComponent,
    MessageInputComponent ],
  providers: [MessagesService],
})
export class MessagesModule { }
