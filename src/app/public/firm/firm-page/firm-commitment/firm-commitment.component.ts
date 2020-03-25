import { Component, OnInit } from '@angular/core';
import { TrackingService } from 'src/app/core/services/tracking.service';
import { StepContext } from 'src/models/tracking-request.model';

@Component({
  selector: 'andi-firm-commitment',
  templateUrl: './firm-commitment.component.html',
  styleUrls: ['./firm-commitment.component.scss']
})
export class FirmCommitmentComponent implements OnInit {

  constructor(
    private trackingService: TrackingService,
  ) { }

  ngOnInit() {
  }

  trackClick(description): void {
    this.trackingService.track('employeurs', StepContext.LINKTO, {link: description});
  }

}
