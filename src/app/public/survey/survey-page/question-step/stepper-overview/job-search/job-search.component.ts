import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'andi-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['../diagnostic.scss']
})
export class JobSearchComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToSearch() {
    this.router.navigateByUrl('/summary');
  }
}
