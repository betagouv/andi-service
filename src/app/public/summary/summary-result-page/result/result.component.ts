import { Component, OnInit } from '@angular/core';
import { PmsmpService } from 'src/app/core/services/pmsmp.service';
import { Data, PmsmpResult } from 'src/models/pmsmp-result';

@Component({
  selector: 'andi-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  pmsmpDatas: Data[] = [];
  jobSuggestion = '';
  hasErrorResult = false;
  notFound = false;
  showMoreResultsBtn = true;

  constructor(private pmsmpService: PmsmpService) {}

  ngOnInit() {
    this.pmsmpService.errorResult.subscribe(error => {
      this.hasErrorResult = error !== '' ? true : false;
    });

    this.pmsmpService.pmsmpResult.subscribe((res: PmsmpResult) => {
      this.notFound = res.data.length === 0;
      this.pmsmpDatas = res.data.slice(0, 15);
      this.jobSuggestion = this.pmsmpService.jobSuggestion;
    });
  }

  toggleButton() {
    this.showMoreResultsBtn = !this.showMoreResultsBtn;
  }
}
