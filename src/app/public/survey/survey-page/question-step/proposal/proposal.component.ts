import { Component, Input, OnInit } from '@angular/core';
import { SurveyStepperSharedService } from 'src/app/core/services/survey-stepper.shared.service';
import { QuestionType } from '../../../../../../models/question-step.model';
import { ResponseProposal } from '../../../../../../models/response-proposal.model';

@Component({
  selector: 'andi-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {
  @Input() proposal: ResponseProposal;
  @Input() questionStepType: QuestionType;

  constructor(private surveyStepperSharedService: SurveyStepperSharedService) {}

  ngOnInit() {}

  nextQuestion() {
    this.surveyStepperSharedService.stateStepper.push(this.proposal.id);
    console.log('>>>>> ', this.surveyStepperSharedService.stateStepper);
    this.surveyStepperSharedService.goToNextStep(this.proposal.aim);
  }
}
