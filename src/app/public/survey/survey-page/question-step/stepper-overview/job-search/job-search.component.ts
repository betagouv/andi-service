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

  goAgefiph() {
    this.router.navigateByUrl('www.agefiph.fr/');
  }
}
