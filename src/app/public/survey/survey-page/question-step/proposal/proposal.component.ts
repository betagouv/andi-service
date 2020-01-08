import { Component, OnInit, Input } from '@angular/core';
import { ResponseProposal } from '../../../../../../models/response-proposal.model';
import { QuestionType } from '../../../../../../models/question-step.model';
import { SurveyStepperSharedService } from 'src/app/core/services/survey-stepper.shared.service';
import { Router } from '@angular/router';
import { PmsmpService } from '../../../../../core/services/pmsmp.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'andi-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {
  @Input() proposal: ResponseProposal;
  @Input() questionStepType: QuestionType;

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

  updateCriteriasState(addressInput) {
    this.surveyStepperSharedService.stateForm[
      Object.keys(addressInput)[0]
    ] = Object.values(addressInput)[0] as string;
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
