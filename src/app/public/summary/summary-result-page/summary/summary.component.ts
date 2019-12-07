import { Component, OnInit } from '@angular/core';
import { PmsmpService } from 'src/app/core/services/pmsmp.service';
import { Address, ADDRESS_TYPE } from 'src/models/pmsmp-request';
import { SurveyStepperSharedService, IHash } from 'src/app/core/services/survey-stepper.shared.service';

@Component({
  selector: 'andi-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  currentStateForm: IHash = {};

  constructor(
    private pmsmpService: PmsmpService,
    private surveyStepperSharedService: SurveyStepperSharedService
  ) {}

  ngOnInit() {
    this.currentStateForm = this.surveyStepperSharedService.stateForm;
  }

  loadPmsmpList(userRequest) {
    this.pmsmpService
    .getPmsmpList(userRequest.adress, userRequest.job, userRequest.range)
    .subscribe(pmsmpListFound => {
      this.pmsmpService.pmsmpResult.next(pmsmpListFound);
    });
  }
}

// .getPmsmpList(new Address(ADDRESS_TYPE.string, userRequest.adress), [])