import { Component, OnInit, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'beers-navbar',
  template: `
    <mat-toolbar>Beers Owed</mat-toolbar>
  `,
  styles: [
  ],
})
export class NavbarComponent implements OnInit {

  @Input() color:ThemePalette
  constructor() { }

  ngOnInit(): void {
  }

}
