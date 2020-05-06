import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'andi-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }


  goToStepper() {
    this.router.navigateByUrl('/survey');
  }

  goToSearch() {
    this.router.navigateByUrl('/summary');
  }
}
