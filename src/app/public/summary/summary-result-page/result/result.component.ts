import { Component, OnInit } from '@angular/core';
import { PmsmpService } from 'src/app/core/services/pmsmp.service';
import { Data, PmsmpResult } from 'src/models/pmsmp-result';
import { TrackingService } from 'src/app/core/services/tracking.service';
import { StepContext } from 'src/models/tracking-request.model';

@Component({
  selector: 'andi-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  pmsmpDatas: Data[] = [];
  queryId: string;
  hasErrorResult = false;
  notFound = false;
  showMoreResultsBtn = true;

  constructor(
    private pmsmpService: PmsmpService,
    private trackingService: TrackingService,
    ) {}

  ngOnInit() {
    this.pmsmpService.errorResult.subscribe(error => {
      this.hasErrorResult = error !== '' ? true : false;
    });

    this.pmsmpService.pmsmpResult.subscribe((res: PmsmpResult) => {
      this.queryId = res._query_id;
      this.trackingService.track( 'matching', StepContext.MATCHING_SEARCH, {results: res.data.length, query_id: this.queryId});
      this.notFound = res.data.length === 0;
      this.pmsmpDatas = res.data.slice(0, 15);
    });
  }

  toggleButton() {
    this.trackingService.track( 'matching', StepContext.MORE_RESULTS, {query_id: this.queryId});
    this.showMoreResultsBtn = !this.showMoreResultsBtn;
  }
}
