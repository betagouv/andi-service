import { Component, OnInit, Input } from '@angular/core';
import { ResponseProposal } from 'src/models/response-proposal.model';
import { QuestionType } from 'src/models/question-step.model';
import { SurveyStepperSharedService } from 'src/app/core/services/survey-stepper.shared.service';

@Component({
  selector: 'andi-stepper-overview',
  templateUrl: './stepper-overview.component.html',
  styleUrls: ['./stepper-overview.component.scss']
})
export class StepperOverviewComponent implements OnInit {
  @Input() proposal: ResponseProposal;
  @Input() questionStepType: QuestionType;

  constructor(private surveyStepperSharedService: SurveyStepperSharedService) { }

  ngOnInit() {
    this.surveyStepperSharedService.goToNextStep(this.proposal.aim);
  }
}
