import { Component, OnInit, Input } from '@angular/core';
import { Data } from 'src/models/pmsmp-result';
import { Router } from '@angular/router';
import { TrackingService } from 'src/app/core/services/tracking.service';
import { StepContext } from 'src/models/tracking-request.model';

@Component({
  selector: 'andi-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {

  @Input() pmsmpItem: Data;
  @Input() pmsmpOrder: number;
  contact = false;

  constructor(
    private router: Router,
    private trackingService: TrackingService,
    ) { }

  ngOnInit() {
  }

  searchEngine() {
    this.trackingService.track('matching', StepContext.RESULT_CLICK, {link: 'google', siret: this.pmsmpItem.siret, order: this.pmsmpOrder});
    window.open('https://www.google.fr/search?q=' + this.pmsmpItem.name + ' ' + this.pmsmpItem.address, '_blank');
  }

  redirectCompanyInfo() {
    this.trackingService.track('matching', StepContext.RESULT_CLICK, {link: 'datagouv', siret: this.pmsmpItem.siret, order: this.pmsmpOrder});
    window.open('https://entreprise.data.gouv.fr/etablissement/' + this.pmsmpItem.siret, '_blank');
  }

  switchContactBtn() {
    this.contact = !this.contact;
    this.trackingService.track('matching', StepContext.RESULT_CLICK, {link: 'show', siret: this.pmsmpItem.siret, order: this.pmsmpOrder});
  }

}
