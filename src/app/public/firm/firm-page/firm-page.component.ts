import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { TrackingService } from 'src/app/core/services/tracking.service';

@Component({
  selector: 'andi-firm-page',
  templateUrl: './firm-page.component.html',
  styleUrls: ['./firm-page.component.scss']
})
export class FirmPageComponent implements OnInit, OnDestroy {

  constructor(
    private trackingService: TrackingService
  ) {}

  ngOnInit() {
    this.trackingService.track('employeurs', StepContext.ARRIVAL);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.trackingService.track('employeurs', StepContext.DEPART, {
      reason: 'destroy'
    });
  }


}
