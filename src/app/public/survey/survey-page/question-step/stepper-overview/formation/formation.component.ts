import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'andi-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['../diagnostic.scss']
})

export class FormationComponent implements OnInit {
  @Input() isSick: boolean;
  @Input() isRqth: boolean;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToSearch() {
    this.router.navigateByUrl('/summary');
  }

  downloadHelpCep() {
    window.open('assets/datas/aide-cep.pdf', '_blank');
  }

  downloadHelpRqth() {
    window.open('assets/datas/aide-rqth.pdf', '_blank');
  }

  goAgefiph() {
    window.open('https://www.agefiph.fr/', '_blank');
  }
}
