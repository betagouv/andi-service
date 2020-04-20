import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PmsmpService } from 'src/app/core/services/pmsmp.service';
import { SurveyStepperSharedService, IHash } from 'src/app/core/services/survey-stepper.shared.service';
import { ResponseProposal } from 'src/models/response-proposal.model';
import { RomeSuggestionResponse } from 'src/models/rome-suggestion-response';
import { FeatureCollection } from '../../../../../../models/address-suggestion-response';
import { TrackingService } from 'src/app/core/services/tracking.service';
import { StepContext } from 'src/models/tracking-request.model';

@Component({
  selector: 'andi-criterion',
  templateUrl: './criterion.component.html',
  styleUrls: ['./criterion.component.scss']
})
export class CriterionComponent implements OnInit, OnDestroy {
  @Input() proposal: ResponseProposal;

  currentStateForm: IHash = {};
  subs: Subscription[] = [];
  formCtrl = new FormControl();
  suggestionsResult = [];
  errorMsg = '';

  inputState: string;

  constructor(
    private surveyStepperSharedService: SurveyStepperSharedService,
    private pmsmpService: PmsmpService,
    private router: Router,
    private trackingService: TrackingService,
  ) {}

  ngOnInit() {
    this.loadInputState();
    this.enableAutocomplete();
  }

  private loadInputState() {
    console.log('STATE STEPPER >>>> ', this.surveyStepperSharedService.stateStepper)
    this.currentStateForm = this.surveyStepperSharedService.stateForm;
    this.formCtrl.setValue(this.surveyStepperSharedService.stateForm[this.proposal.id]);
  }

  enableAutocomplete() {
    if (this.proposal.id === 'address') {
      this.subs.push(
        this.pmsmpService
          .enableAutocompleteAddress(this.formCtrl)
          .subscribe((suggestions: FeatureCollection) => {
            if (
              suggestions !== undefined &&
              suggestions.features.length === 0
            ) {
              this.suggestionsResult = [];
              this.errorMsg = 'Aucune addresse trouvée';
              this.trackingService.track('questionnaire-matching', StepContext.MATCHING_ERROR, {msg: this.errorMsg});
            } else {
              this.suggestionsResult = [];
              suggestions.features.forEach(feature => {
                this.suggestionsResult.push(feature.properties.label);
              });
              this.errorMsg = '';
            }
          })
      );
    } else if (this.proposal.id === 'jobs') {
      this.subs.push(
        this.pmsmpService
          .enableAutocompleteJob(this.formCtrl)
          .subscribe((suggestions: RomeSuggestionResponse) => {
            if (suggestions !== undefined && suggestions.data.length === 0) {
              this.suggestionsResult = [];
              this.errorMsg = 'Aucun métier correspondant trouvé';
              this.trackingService.track('questionnaire-matching', StepContext.MATCHING_ERROR, {msg: this.errorMsg});
            } else {
              this.suggestionsResult = [];
              suggestions.data.forEach(data => {
                this.suggestionsResult.push(data.label);
              });
              this.errorMsg = '';
            }
          })
      );
    }
  }

  updateCriteriasState(saisieInput) {
    let resultValue;
    if (this.proposal.id === 'range') {
      resultValue = Object.values(saisieInput)[0] as string;
      this.surveyStepperSharedService.stateForm[
        Object.keys(saisieInput)[0]
      ] =  resultValue;
    } else {
      resultValue = this.formCtrl.value;
      this.surveyStepperSharedService.stateForm[
        this.proposal.id
      ] =  resultValue;
    }
    this.trackingService.track(
        'questionnaire-matching',
        StepContext.QUESTION_RESPONSE,
        {question_id: this.proposal.id, question_response: resultValue}
    );
    this.nextQuestion();
  }

  nextQuestion() {
    if (this.proposal.aim !== '') {
      this.surveyStepperSharedService.goToNextStep(this.proposal.aim);
    } else {
      this.trackingService.track('questionnaire-matching', StepContext.DEPART);
      this.router.navigateByUrl('/summary');
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
