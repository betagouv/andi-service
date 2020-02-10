import { Component, Input, OnInit } from '@angular/core';
import { SurveyStepperSharedService } from 'src/app/core/services/survey-stepper.shared.service';
import { QuestionType } from '../../../../../../models/question-step.model';
import { ResponseProposal } from '../../../../../../models/response-proposal.model';
import { TrackingService } from 'src/app/core/services/tracking.service';
import { StepContext } from 'src/models/tracking-request.model';
@Component({
  selector: 'andi-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {
  @Input() proposal: ResponseProposal;
  @Input() questionStepType: QuestionType;
  @Input() questionStepId: string;

  constructor(
    private surveyStepperSharedService: SurveyStepperSharedService,
    private trackingService: TrackingService,
    ) {}

  ngOnInit() {}

  nextQuestion() {
    this.trackingService.track('pasapas', StepContext.QUESTION_RESPONSE, {'question_id': this.questionStepId, 'response_id': this.proposal.id});
    this.surveyStepperSharedService.stateStepper.push(this.proposal.id);
    this.surveyStepperSharedService.goToNextStep(this.proposal.aim);
  }
}
