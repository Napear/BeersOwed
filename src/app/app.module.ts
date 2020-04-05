import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { FriendDashComponent } from './friend-dash/friend-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FriendDashComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
