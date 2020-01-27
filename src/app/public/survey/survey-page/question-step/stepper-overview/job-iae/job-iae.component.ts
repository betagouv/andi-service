import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'andi-job-iae',
  templateUrl: './job-iae.component.html',
  styleUrls: ['../diagnostic.scss']
})
export class JobIaeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToSearch() {
    this.router.navigateByUrl('/summary');
  }
}
