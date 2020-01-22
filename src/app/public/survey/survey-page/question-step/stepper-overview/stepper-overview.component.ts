import { Component, Input, OnInit } from '@angular/core';
import { SurveyStepperSharedService } from 'src/app/core/services/survey-stepper.shared.service';
import { QuestionType } from 'src/models/question-step.model';
import { ResponseProposal } from 'src/models/response-proposal.model';

@Component({
  selector: 'andi-stepper-overview',
  templateUrl: './stepper-overview.component.html',
  styleUrls: ['./stepper-overview.component.scss']
})
export class StepperOverviewComponent implements OnInit {
  @Input() proposal: ResponseProposal;
  @Input() questionStepType: QuestionType;

  constructor(private surveyStepperSharedService: SurveyStepperSharedService) {}

  ngOnInit() {}

  nextQuestion() {
    this.surveyStepperSharedService.goToNextStep(this.proposal.aim);
  }
}
