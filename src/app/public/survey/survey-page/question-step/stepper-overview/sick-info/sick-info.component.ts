import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'andi-sick-info',
  templateUrl: './sick-info.component.html',
  styleUrls: ['../diagnostic.scss']
})
export class SickInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goAmeli() {
    window.open('https://www.ameli.fr/', '_blank');
  }

  goMsa() {
    window.open('https://www.msa.fr/', '_blank');
  }
}
