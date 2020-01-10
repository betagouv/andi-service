import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PmsmpService } from 'src/app/core/services/pmsmp.service';
import { SurveyStepperSharedService } from 'src/app/core/services/survey-stepper.shared.service';
import { ResponseProposal } from 'src/models/response-proposal.model';

@Component({
  selector: 'andi-criterion',
  templateUrl: './criterion.component.html',
  styleUrls: ['./criterion.component.scss']
})
export class CriterionComponent implements OnInit {
  @Input() proposal: ResponseProposal;

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
    this.inputState = Object.values(this.surveyStepperSharedService.stateForm)[
      this.proposal.id
    ];

    this.formCtrl.setValue(this.surveyStepperSharedService.stateForm.address);
    this.enableAutocomplete();
  }

  enableAutocomplete() {
    this.pmsmpService
      .enableAutocompleteAddress(this.formCtrl)
      .subscribe((suggestions: any) => {
        if (suggestions !== undefined && suggestions.features.length === 0) {
          this.errorMsg = 'Aucune addresse trouvée !';
          this.suggestionsResult = [];
        } else {
          this.errorMsg = '';
          this.suggestionsResult = suggestions.features;
        }
      });
  }

  updateCriteriasState(saisieInput) {
    this.surveyStepperSharedService.stateForm[
      this.proposal.id
    ] = this.formCtrl.value;
    this.nextQuestion();
  }

  updateCriteriasStateOLD(saisieInput) {
    this.surveyStepperSharedService.stateForm[
      Object.keys(saisieInput)[0]
    ] = Object.values(saisieInput)[0] as string;
    this.nextQuestion();
  }

  nextQuestion() {
    if (this.proposal.aim !== '') {
      this.surveyStepperSharedService.goToNextStep(this.proposal.aim);
    } else {
      this.router.navigateByUrl('/summary');
    }
  }
}
