import { Component, OnInit } from '@angular/core';
import { PmsmpService } from 'src/app/core/services/pmsmp.service';
import { PmsmpResult } from 'src/models/pmsmp-result';

@Component({
  selector: 'andi-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  pmsmpResult: PmsmpResult;
  hasErrorResult = false;

  constructor(private pmsmpService: PmsmpService) {}

  ngOnInit() {
    this.pmsmpService.errorResult.subscribe(error => {
      if (error !== '') {
        this.hasErrorResult = true;
      }
    });

    this.pmsmpService.pmsmpResult.subscribe(res => {
      this.pmsmpResult = res;
    });
  }
}
