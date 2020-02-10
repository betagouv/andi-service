import { Component, OnInit } from '@angular/core';
import { TrackingService } from 'src/app/core/services/tracking.service';
import { StepContext } from 'src/models/tracking-request.model';

@Component({
  selector: 'andi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private trackingService: TrackingService,
  ) {}

  ngOnInit() {}


  trackClick(description): void {
    this.trackingService.track('header', StepContext.LINKTO, {link: description});
  }

  trackMailto(description): void {
    this.trackingService.track('header', StepContext.MAILTO, {link: description});
  }

  goToHome() {
    this.trackingService.track('header', StepContext.LINKTO, {link: 'home'});
    window.open('https://andi.beta.gouv.fr', '_self');
  }
}
