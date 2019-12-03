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

  index = 0;
  lengthOfQuestionSteps = 0;
  inputState: string;

  constructor(
    private surveyStepperSharedService: SurveyStepperSharedService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getValuesOfCurrentIndexAndLengthQuestionSteps();
    this.inputState = Object.values(this.surveyStepperSharedService.stateForm)[
      this.proposal.id
    ];
  }

  getValuesOfCurrentIndexAndLengthQuestionSteps = () =>
    ({
      index: this.index,
      lengthOfQuestionSteps: this.lengthOfQuestionSteps
    } = this.surveyStepperSharedService)

  updateCriteriasState(addressInput) {
    this.surveyStepperSharedService.stateForm[
      Object.keys(addressInput)[0]
    ] = Object.values(addressInput)[0] as string;
    console.log('state', this.surveyStepperSharedService.stateForm);
    this.nextQuestion();
  }

  nextQuestion() {
    if (this.index < this.lengthOfQuestionSteps - 1) {
      this.surveyStepperSharedService.indexStepper.next(
        ++this.surveyStepperSharedService.index
      );
      this.getValuesOfCurrentIndexAndLengthQuestionSteps();
    } else {
      this.router.navigateByUrl('/summary');
    }
  }
}
