import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'andi-job-esat',
  templateUrl: './job-esat.component.html',
  styleUrls: ['../diagnostic.scss']
})
export class JobEsatComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToSearch() {
    this.router.navigateByUrl('/summary');
  }
}
