import { Component, OnInit, Input } from '@angular/core';
import { Friend } from '../shared/friend.model';

@Component({
  selector: 'beers-friend-card',
  templateUrl: './friend-card.component.html',
  styles: [
    `.friend-card {
        max-width: 120px;
        margin: 10px
    }`
  ],
})
export class FriendCardComponent implements OnInit {
  @Input() friend: Friend

  constructor() { }

  ngOnInit(): void {

  }



}
