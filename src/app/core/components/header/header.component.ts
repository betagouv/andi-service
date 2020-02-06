import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'andi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  goToHome() {
    window.open('https://andi.beta.gouv.fr', '_self');
  }
}
