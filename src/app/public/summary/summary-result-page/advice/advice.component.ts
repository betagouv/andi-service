import { Component, OnInit } from '@angular/core';
import { TrackingService } from 'src/app/core/services/tracking.service';
import { StepContext } from 'src/models/tracking-request.model';

@Component({
  selector: 'andi-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss']
})
export class AdviceComponent implements OnInit {

  showAdvice = false;
  constructor(
    private trackingService: TrackingService,
  ) {}

  ngOnInit() {}

  openCerfa() {
    this.trackingService.track('matching', StepContext.LINKTO, {link: 'cerfa'});
    window.open('../../../../../assets/datas/convention-cerfa.pdf', '_blank');
  }

  toggleAdvice() {
    this.trackingService.track('matching', StepContext.GUIDANCE_CLICK);
    this.showAdvice = !this.showAdvice;
  }
}
