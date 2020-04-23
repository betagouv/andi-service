import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'andi-unfollowed',
  templateUrl: './unfollowed.component.html',
  styleUrls: ['../diagnostic.scss']
})
export class UnfollowedComponent implements OnInit {
  @Input() isSick: boolean;
  @Input() isRqth: boolean;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToSearch() {
    this.router.navigateByUrl('/summary');
  }
}
