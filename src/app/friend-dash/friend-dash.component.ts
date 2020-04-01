import { Component, OnInit } from '@angular/core';

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

}
