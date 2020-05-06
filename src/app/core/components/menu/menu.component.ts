import {Component, OnInit} from '@angular/core';
import {TrackingService} from '../../services/tracking.service';
import {StepContext} from '../../../../models/tracking-request.model';
import {Router} from '@angular/router';

@Component({
  selector: 'andi-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private trackingService: TrackingService, private router: Router) {
  }

  ngOnInit() {
  }

  goToHome() {
    this.trackingService.track('header', StepContext.LINKTO, {link: 'home'});
    this.router.navigateByUrl('/home');
  }

  goToSearch() {
    this.router.navigateByUrl('/summary');
  }

  goToFirm() {
    this.router.navigateByUrl('/employeurs');
  }
}
