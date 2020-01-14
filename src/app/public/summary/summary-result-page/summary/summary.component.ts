import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { PmsmpService } from 'src/app/core/services/pmsmp.service';
import { FeatureCollection } from '../../../../../models/address-suggestion-response';
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
  jobCtrl = new FormControl();
  adrSuggestions = [];
  jobSuggestions = [];
  errorMsg = '';

  constructor(
    private loader: NgxUiLoaderService,
    private pmsmpService: PmsmpService,
    private surveyStepperSharedService: SurveyStepperSharedService
  ) {}

  ngOnInit() {
    this.currentStateForm = this.surveyStepperSharedService.stateForm;
    this.addressCtrl.setValue(this.currentStateForm.address);
    this.jobCtrl.setValue(this.currentStateForm.jobs);
    this.enableAutocompleteAddress();
    this.enableAutocompleteJob();
  }

  enableAutocompleteAddress() {
    this.pmsmpService
      .enableAutocompleteAddress(this.addressCtrl)
      .subscribe((suggestions: FeatureCollection) => {
        if (suggestions !== undefined && suggestions.features && suggestions.features.length === 0) {
          this.errorMsg = 'Aucun résultat ne correspond à votre saisie !';
          this.adrSuggestions = [];
        } else {
          this.errorMsg = '';
          this.adrSuggestions = suggestions.features;
        }
      });
  }
  enableAutocompleteJob() {
    this.pmsmpService
      .enableAutocompleteJob(this.jobCtrl)
      .subscribe((suggestions: any) => {
        if (suggestions !== undefined && suggestions.data && suggestions.data.length === 0) {
          this.errorMsg = 'Aucun résultat ne correspond à votre saisie !';
          this.jobSuggestions = [];
        } else {
          this.errorMsg = '';
          this.jobSuggestions = suggestions.data;
        }
      });
  }

  loadPmsmpList(userRequest) {
    this.loader.start();
    this.pmsmpService
      .getPmsmpList(this.addressCtrl.value, this.jobCtrl.value, userRequest.range)
      .subscribe(
        pmsmpListFound => {
          this.pmsmpService.pmsmpResult.next(pmsmpListFound);
          this.pmsmpService.errorResult.next('');
          this.loader.stop();
        },
        err => {
          this.pmsmpService.errorResult.next('Subscribe error GetPmsmpList');
          this.loader.stop();
        }
      );
  }
}
