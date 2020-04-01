import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendDashComponent } from './friend-dash.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [FriendDashComponent],
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
