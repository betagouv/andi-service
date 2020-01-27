import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'andi-job-private',
  templateUrl: './job-private.component.html',
  styleUrls: ['../diagnostic.scss']
})
export class JobPrivateComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToSearch() {
    this.router.navigateByUrl('/summary');
  }
}
