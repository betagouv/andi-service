import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'andi-job-public',
  templateUrl: './job-public.component.html',
  styleUrls: ['../diagnostic.scss']
})
export class JobPublicComponent implements OnInit {
  @Input() isSick: boolean;
  @Input() isRqth: boolean;
  constructor(private router: Router) {}

  ngOnInit() {}

  goToSearch() {
    this.router.navigateByUrl('/summary');
  }
}
