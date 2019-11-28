import { Component, OnInit, Input } from '@angular/core';
import { ResponseProposal } from '../../../../../../models/response-proposal.model';
import { QuestionType } from '../../../../../../models/question-step.model';
import { SurveyStepperSharedService } from 'src/app/core/services/survey-stepper.shared.service';

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

  constructor(private surveyStepperSharedService: SurveyStepperSharedService) {}

  ngOnInit() {
    this.getValuesOfCurrentIndexAndLengthQuestionSteps();
  }

  getValuesOfCurrentIndexAndLengthQuestionSteps = () =>
    ({
      index: this.index,
      lengthOfQuestionSteps: this.lengthOfQuestionSteps
    } = this.surveyStepperSharedService)

  updateCriteriasState(addressInput) {
    this.nextQuestion();
  }

  nextQuestion() {
    if (this.index < this.lengthOfQuestionSteps - 1) {
      this.surveyStepperSharedService.indexStepper.next(
        ++this.surveyStepperSharedService.index
      );
      this.getValuesOfCurrentIndexAndLengthQuestionSteps();
    }
  }

  finalQuestion() {
    console.log('redirect To Récapitulatif');
    // router
  }
}
