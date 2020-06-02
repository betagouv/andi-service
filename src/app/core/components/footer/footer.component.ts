import { Component, OnInit } from '@angular/core';
import { TrackingService } from 'src/app/core/services/tracking.service';
import { StepContext } from 'src/models/tracking-request.model';
import {Router} from '@angular/router';

@Component({
  selector: 'andi-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private trackingService: TrackingService, private router: Router
  ) { }

  ngOnInit() {
  }

  goToLegalNotice() {
    this.router.navigateByUrl('/mentions-legales');
  }

  goToCGU() {
    this.router.navigateByUrl('/conditions-generales');
  }

  goToPersonalDatas() {
    this.router.navigateByUrl('/donnees-personnelles');
  }

  trackClick(description): void {
    this.trackingService.track('footer', StepContext.LINKTO, {link: description});
  }

  trackMailto(description): void {
    this.trackingService.track('footer', StepContext.MAILTO, {link: description});
  }
}
