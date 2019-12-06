import { Component, OnInit, Input } from '@angular/core';
import { ResponseProposal } from '../../../../../../models/response-proposal.model';
import { QuestionType } from '../../../../../../models/question-step.model';
import { SurveyStepperSharedService } from 'src/app/core/services/survey-stepper.shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'andi-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {
  @Input() proposal: ResponseProposal;
  @Input() questionStepType: QuestionType;

  inputState: string;

  constructor(
    private surveyStepperSharedService: SurveyStepperSharedService,
    private router: Router
  ) {}

  ngOnInit() {
    this.inputState = Object.values(this.surveyStepperSharedService.stateForm)[
      this.proposal.id
    ];
  }

  updateCriteriasState(addressInput) {
    this.surveyStepperSharedService.stateForm[
      Object.keys(addressInput)[0]
    ] = Object.values(addressInput)[0] as string;
    this.nextQuestion();
  }

  nextQuestion() {
    if (this.proposal.aim !== '') {
      this.surveyStepperSharedService.stepperCursor.next(
        this.proposal.aim
      );
    } else {
      this.router.navigateByUrl('/summary');
    }
  }
}
