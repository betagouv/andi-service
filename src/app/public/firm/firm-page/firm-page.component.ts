import { Component, OnInit } from '@angular/core';
import { TrackingService } from 'src/app/core/services/tracking.service';

@Component({
  selector: 'andi-firm-page',
  templateUrl: './firm-page.component.html',
  styleUrls: ['./firm-page.component.scss']
})
export class FirmPageComponent implements OnInit {

  constructor(
    private trackingService: TrackingService
  ) {}

  ngOnInit() {
    this.trackingService.track('employeurs', StepContext.ARRIVAL);
  }

}
