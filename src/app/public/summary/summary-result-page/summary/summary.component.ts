import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { PmsmpService } from 'src/app/core/services/pmsmp.service';
import {
  IHash,
  SurveyStepperSharedService
} from 'src/app/core/services/survey-stepper.shared.service';
import { FeatureCollection } from '../../../../../models/address-suggestion-response';
import { TrackingService } from 'src/app/core/services/tracking.service';
import { StepContext } from 'src/models/tracking-request.model';

@Component({
  selector: 'andi-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnDestroy {
  currentStateForm: IHash = {};

  addressCtrl = new FormControl();
  jobCtrl = new FormControl();
  adrSuggestions = [];
  jobSuggestions = [];
  errorMsg = '';

  constructor(
    private loader: NgxUiLoaderService,
    private pmsmpService: PmsmpService,
    private surveyStepperSharedService: SurveyStepperSharedService,
    private trackingService: TrackingService,
  ) {}

  ngOnInit() {
    this.currentStateForm = this.surveyStepperSharedService.stateForm;
    this.searchOnInit();
    this.addressCtrl.setValue(this.currentStateForm.address);
    this.jobCtrl.setValue(this.currentStateForm.jobs);
    this.enableAutocompleteAddress();
    this.enableAutocompleteJob();
    this.trackingService.track('questionnaire-matching', StepContext.ARRIVAL);
  }

  ngOnDestroy() {
    this.trackingService.track('questionnaire-matching', StepContext.DEPART, {reason: 'unload'});
  }

  private searchOnInit() {
    if (this.pmsmpService.isStateFormComplete()) {
      this.trackingService.track(
          'matching',
          StepContext.MATCHING_SEARCH,
          {
              addresse: this.currentStateForm.address,
              metier: this.currentStateForm.jobs,
              distance: this.currentStateForm.range
          }
      );
      this.loader.start();
      this.pmsmpService
        .getPmsmpList(
          this.currentStateForm.address,
          this.currentStateForm.jobs,
          this.currentStateForm.range
        )
        .subscribe(
          pmsmpListFound => {
            this.pmsmpService.pmsmpResult.next(pmsmpListFound);
            this.pmsmpService.errorResult.next('');
            this.loader.stop();
          },
          err => {
            const errorMsg = 'Subscribe error GetPmsmpList';
            this.pmsmpService.errorResult.next(errorMsg);
            this.trackingService.track('matching', StepContext.MATCHING_ERROR, {msg: errorMsg});
            this.loader.stop();
          }
        );
    }
  }

  enableAutocompleteAddress() {
    this.pmsmpService
      .enableAutocompleteAddress(this.addressCtrl)
      .subscribe((suggestions: FeatureCollection) => {
        if (
          suggestions !== undefined &&
          suggestions.features &&
          suggestions.features.length === 0
        ) {
          this.errorMsg = 'Aucun résultat ne correspond à votre saisie !';
          this.trackingService.track('matching', StepContext.MATCHING_ERROR, {msg: this.errorMsg});
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
        if (
          suggestions !== undefined &&
          suggestions.data &&
          suggestions.data.length === 0
        ) {
          this.errorMsg = 'Aucun résultat ne correspond à votre saisie !';
          this.trackingService.track('matching', StepContext.MATCHING_ERROR, {msg: this.errorMsg});
          this.jobSuggestions = [];
        } else {
          this.errorMsg = '';
          this.jobSuggestions = suggestions.data;
        }
      });
  }

  loadPmsmpList(userRequest) {
    this.trackingService.track(
        'matching',
        StepContext.MATCHING_SEARCH,
        {
            addresse: this.addressCtrl.value,
            metier: this.jobCtrl.value,
            distance: userRequest.range
        }
    );
    this.loader.start();
    this.pmsmpService
      .getPmsmpList(
        this.addressCtrl.value,
        this.jobCtrl.value,
        userRequest.range
      )
      .subscribe(
        pmsmpListFound => {
          this.loader.stop();
          this.pmsmpService.pmsmpResult.next(pmsmpListFound);
          this.pmsmpService.errorResult.next('');
          if (document.activeElement instanceof HTMLElement) {
              document.activeElement.blur();
          }
        },
        err => {
          this.loader.stop();
          const errorMsg = 'Subscribe error GetPmsmpList';
          this.pmsmpService.errorResult.next(errorMsg);
          this.trackingService.track('matching', StepContext.MATCHING_ERROR, {msg: errorMsg});
        }
      );
  }
}
