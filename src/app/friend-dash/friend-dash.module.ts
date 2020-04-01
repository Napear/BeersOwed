import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendDashComponent } from './friend-dash.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FriendCardComponent } from './friend-card.component';


@NgModule({
  declarations: [FriendDashComponent, FriendCardComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    FriendDashComponent
  ]
})
export class FriendDashModule { }
