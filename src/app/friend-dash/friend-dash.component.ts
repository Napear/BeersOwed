import { Component, OnInit } from '@angular/core';
import { Friend } from '../shared/friend.model';

@Component({
  selector: 'beers-friend-dash',
  templateUrl: './friend-dash.component.html',
  styles: [`.fab-bottom-right {
                    position: fixed;
                    right: 35px;
                    bottom: 35px;
                    z-index: 100;
          }`
  ],
})
export class FriendDashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addFriend(){
    console.log("[*] Add Clicked!")
  }

  friends: Friend[] = [
    {
      firstName: "Heather",
      beersOwed:-20
    },
    {
      firstName: "Jack",
      beersOwed: 10
    }
  ]
}
