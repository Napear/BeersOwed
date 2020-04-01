import { Component, OnInit, Input } from '@angular/core';
import { Friend } from '../shared/friend.model';

@Component({
  selector: 'beers-friend-card',
  templateUrl: './friend-card.component.html',
  styles: [
  ],
})
export class FriendCardComponent implements OnInit {
  @Input() friend: Friend

  constructor() { }

  ngOnInit(): void {

  }



}
