import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'andi-navigation-step',
  templateUrl: './navigation-step.component.html',
  styleUrls: ['./navigation-step.component.scss']
})
export class NavigationStepComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToSearch() {
    this.router.navigateByUrl('/summary');
  }
}
