import { Component, OnInit } from '@angular/core';
import { TrackingService } from '../../services/tracking.service';
import { StepContext } from 'src/models/tracking-request.model';

@Component({
  selector: 'andi-some-help',
  templateUrl: './some-help.component.html',
  styleUrls: ['./some-help.component.scss']
})
export class SomeHelpComponent implements OnInit {

  constructor(
    private trackingService: TrackingService) { }

  ngOnInit() {
  }

  trackMailto(description): void {
    this.trackingService.track('header', StepContext.MAILTO, {link: description});
  }

}
