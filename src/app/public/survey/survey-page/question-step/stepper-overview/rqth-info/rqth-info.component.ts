import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'andi-rqth-info',
  templateUrl: './rqth-info.component.html',
  styleUrls: ['../diagnostic.scss']
})
export class RqthInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  downloadHelpRqth() {
    window.open('assets/datas/aide-rqth.pdf', '_blank');
  }

  goAgefiph() {
    window.open('https://www.agefiph.fr/', '_blank');
  }
}
