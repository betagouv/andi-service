import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'andi-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['../diagnostic.scss']
})
export class JobSearchComponent implements OnInit {
  @Input() isSick: boolean;
  @Input() isRqth: boolean;
  constructor(private router: Router) {}

  ngOnInit() {}

  goToSearch() {
    this.router.navigateByUrl('/summary');
  }

  goAmeli() {
    window.open('https://www.ameli.fr/', '_blank');
  }

  goMsa() {
    window.open('https://www.msa.fr/', '_blank');
  }

  downloadHelpRqth() {
    window.open('assets/datas/aide-rqth.pdf', '_blank');
  }

  goAgefiph() {
    window.open('https://www.agefiph.fr/', '_blank');
  }
}
