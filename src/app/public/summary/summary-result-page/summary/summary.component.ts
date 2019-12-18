import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { PmsmpService } from 'src/app/core/services/pmsmp.service';
import {
  IHash,
  SurveyStepperSharedService
} from 'src/app/core/services/survey-stepper.shared.service';

@Component({
  selector: 'andi-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  currentStateForm: IHash = {};

  addressCtrl = new FormControl();
  adrSuggestions = [];
  errorMsg = '';

  constructor(
    private loader: NgxUiLoaderService,
    private pmsmpService: PmsmpService,
    private surveyStepperSharedService: SurveyStepperSharedService
  ) {}

  ngOnInit() {
    this.currentStateForm = this.surveyStepperSharedService.stateForm;
    this.addressCtrl.setValue(this.currentStateForm.address);
    this.enableAutocomplete();
  }

  enableAutocomplete() {
    this.pmsmpService
      .enableAutocompleteAddress(this.addressCtrl)
      .subscribe((suggestions: any) => {
        if (suggestions !== undefined && suggestions.features.length === 0) {
          this.errorMsg = 'Aucune addresse trouvée !';
          this.adrSuggestions = [];
        } else {
          this.errorMsg = '';
          this.adrSuggestions = suggestions.features;
        }
      });
  }

  loadPmsmpList(userRequest) {
    this.loader.start();
    this.pmsmpService
      .getPmsmpList(this.addressCtrl.value, userRequest.job, userRequest.range)
      .subscribe(
        pmsmpListFound => {
          this.pmsmpService.pmsmpResult.next(pmsmpListFound);
          this.pmsmpService.errorResult.next('');
          this.loader.stop();
        },
        err => {
          console.log('Subscribe error GetPmsmpList : ', err);
          this.pmsmpService.errorResult.next('Subscribe error GetPmsmpList');
          this.loader.stop();
        }
      );
  }
}
