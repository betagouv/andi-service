import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'andi-job-private',
  templateUrl: './job-private.component.html',
  styleUrls: ['../diagnostic.scss']
})
export class JobPrivateComponent implements OnInit {
  @Input() isSick: boolean;
  @Input() isRqth: boolean;
  constructor(private router: Router) {}

  ngOnInit() {}

  goToSearch() {
    this.router.navigateByUrl('/summary');
  }

  goAgefiph() {
    this.router.navigateByUrl('https://www.agefiph.fr/');
  }
}
