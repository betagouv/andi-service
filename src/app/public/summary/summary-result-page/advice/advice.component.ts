import { Component, OnInit } from '@angular/core';
import { TrackingService } from 'src/app/core/services/tracking.service';
import { StepContext } from 'src/models/tracking-request.model';

@Component({
  selector: 'andi-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss']
})
export class AdviceComponent implements OnInit {

  showFirst = false;
  showSecond = false;
  showThird = false;
  constructor(
    private trackingService: TrackingService,
  ) {}

  ngOnInit() {}

  // TODO  QUID?
  openCerfa() {
    this.trackingService.track('matching', StepContext.LINKTO, {link: 'cerfa'});
    window.open('../../../../../assets/datas/convention-cerfa.pdf', '_blank');
  }


  toggleFirst() {
    this.trackingService.track('matching', StepContext.GUIDANCE_CLICK);
    this.showFirst = !this.showFirst;
  }

  toggleSecond() {
    this.trackingService.track('matching', StepContext.GUIDANCE_CLICK);
    this.showSecond = !this.showSecond;
  }

  toggleThird() {
    this.trackingService.track('matching', StepContext.GUIDANCE_CLICK);
    this.showThird = !this.showThird;
  }
}
