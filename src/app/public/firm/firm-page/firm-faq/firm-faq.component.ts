import { Component, OnInit } from '@angular/core';
import {StepContext} from '../../../../../models/tracking-request.model';
import {TrackingService} from '../../../../core/services/tracking.service';

@Component({
  selector: 'andi-firm-faq',
  templateUrl: './firm-faq.component.html',
  styleUrls: ['./firm-faq.component.scss']
})
export class FirmFaqComponent implements OnInit {

  constructor(private trackingService: TrackingService) { }

  ngOnInit() {
  }

  // TODO  QUID?
  openCerfa() {
    this.trackingService.track('matching', StepContext.LINKTO, {link: 'cerfa'});
    window.open('../../../../../assets/datas/convention-cerfa.pdf', '_blank');
  }

}
