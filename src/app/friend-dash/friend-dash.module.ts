import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendDashComponent } from './friend-dash.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [FriendDashComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    FriendDashComponent,
    MatIconModule
  ]
})
export class FriendDashModule { }
