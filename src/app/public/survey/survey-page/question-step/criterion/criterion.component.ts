import { Component, OnInit, Input } from '@angular/core';
import { ResponseProposal } from 'src/models/response-proposal.model';
import { FormControl } from '@angular/forms';
import { SurveyStepperSharedService } from 'src/app/core/services/survey-stepper.shared.service';
import { PmsmpService } from 'src/app/core/services/pmsmp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'andi-criterion',
  templateUrl: './criterion.component.html',
  styleUrls: ['./criterion.component.scss']
})
export class CriterionComponent implements OnInit {
  @Input() proposal: ResponseProposal;

  addressCtrl = new FormControl();
  adrSuggestions = [];
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

  updateCriteriasState(saisieInput) {
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
