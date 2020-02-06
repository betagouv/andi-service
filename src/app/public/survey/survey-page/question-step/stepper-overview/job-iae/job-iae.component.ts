import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'andi-job-iae',
  templateUrl: './job-iae.component.html',
  styleUrls: ['../diagnostic.scss']
})
export class JobIaeComponent implements OnInit {
  @Input() isSick: boolean;
  @Input() isRqth: boolean;
  constructor(private router: Router) {}

  ngOnInit() {}

  goToSearch() {
    this.router.navigateByUrl('/summary');
  }

  downloadHelpRqth() {
    window.open('assets/datas/aide-rqth.pdf', '_blank');
  }

  goAgefiph() {
    window.open('https://www.agefiph.fr/', '_blank');
  }
}
