import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { TrackingService } from 'src/app/core/services/tracking.service';
import { StepContext } from 'src/models/tracking-request.model';

@Component({
  selector: 'andi-summary-result-page',
  templateUrl: './summary-result-page.component.html',
  styleUrls: ['./summary-result-page.component.scss']
})
export class SummaryResultPageComponent implements OnInit, OnDestroy {
  constructor(
    private trackingService: TrackingService,
  ) {}

  ngOnInit() {
    this.trackingService.track('matching', StepContext.ARRIVAL);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.trackingService.track('matching', StepContext.DEPART, {reason: 'destroy'});
  }
}
