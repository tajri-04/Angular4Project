import { appRoutes } from './app.route';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    UsersModule,
    BrowserModule,
    FormsModule,
    MessagesModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
