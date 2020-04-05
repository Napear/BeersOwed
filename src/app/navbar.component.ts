import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beers-navbar',
  template: `
    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1">
        <img src="../assets/cheers.svg" width="30" height="30" class="d-inline-block align-top">
        Beers Owed
      </span>
    </nav>
  `,
  styles: [`
    .navbar-brand {
      font-size: xx-large;
      font-family: 'Lobster', cursive;
    }
  `],
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
