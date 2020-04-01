import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendDashComponent } from './friend-dash.component';



@NgModule({
  declarations: [FriendDashComponent],
  imports: [
    CommonModule
  ],
  exports: [FriendDashComponent]
})
export class FriendDashModule { }
