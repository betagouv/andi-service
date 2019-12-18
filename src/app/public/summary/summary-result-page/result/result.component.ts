import { Component, OnInit } from '@angular/core';
import { PmsmpService } from 'src/app/core/services/pmsmp.service';
import { PmsmpResult, Data } from 'src/models/pmsmp-result';

@Component({
  selector: 'andi-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  pmsmpDatas: Data[] = [];
  hasErrorResult = false;

  constructor(private pmsmpService: PmsmpService) {}

  ngOnInit() {
    this.pmsmpService.errorResult.subscribe(error => {
      this.hasErrorResult = error !== '' ? true : false;
    });

    this.pmsmpService.pmsmpResult.subscribe((res: PmsmpResult) => {
      this.pmsmpDatas = res.data;
    });
  }
}
