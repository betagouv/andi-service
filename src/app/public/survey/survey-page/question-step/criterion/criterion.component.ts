import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PmsmpService } from 'src/app/core/services/pmsmp.service';
import { SurveyStepperSharedService } from 'src/app/core/services/survey-stepper.shared.service';
import { ResponseProposal } from 'src/models/response-proposal.model';
import { RomeSuggestionResponse } from 'src/models/rome-suggestion-response';
import { FeatureCollection } from '../../../../../../models/address-suggestion-response';

@Component({
  selector: 'andi-criterion',
  templateUrl: './criterion.component.html',
  styleUrls: ['./criterion.component.scss']
})
export class CriterionComponent implements OnInit, OnDestroy {
  @Input() proposal: ResponseProposal;

  subs: Subscription[] = [];
  formCtrl = new FormControl();
  suggestionsResult = [];
  errorMsg = '';

  inputState: string;

  constructor(
    private surveyStepperSharedService: SurveyStepperSharedService,
    private pmsmpService: PmsmpService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadInputState();
    this.enableAutocomplete();
  }

  private loadInputState() {
    if (this.proposal.id === 'address') {
      this.formCtrl.setValue(this.surveyStepperSharedService.stateForm.address);
    } else if (this.proposal.id === 'jobs') {
      this.formCtrl.setValue(this.surveyStepperSharedService.stateForm.jobs);
    } else if (this.proposal.id === 'range') {
      this.inputState = Object.values(
        this.surveyStepperSharedService.stateForm
      )[this.proposal.id];
    }
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
            } else {
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
            } else {
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
    if (this.proposal.id === 'range') {
      this.surveyStepperSharedService.stateForm[
        Object.keys(saisieInput)[0]
      ] = Object.values(saisieInput)[0] as string;
      this.nextQuestion();
    } else {
      this.surveyStepperSharedService.stateForm[
        this.proposal.id
      ] = this.formCtrl.value;
    }
    this.nextQuestion();
  }

  nextQuestion() {
    if (this.proposal.aim !== '') {
      this.surveyStepperSharedService.goToNextStep(this.proposal.aim);
    } else {
      this.router.navigateByUrl('/summary');
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
