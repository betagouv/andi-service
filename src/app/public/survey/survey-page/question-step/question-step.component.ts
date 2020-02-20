import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyStepperApiService } from 'src/app/core/services/survey-stepper.api.service';
import { QuestionStep } from '../../../../../models/question-step.model';

@Component({
  selector: 'andi-question-step',
  templateUrl: './question-step.component.html',
  styleUrls: ['./question-step.component.scss']
})
export class QuestionStepComponent implements OnInit {
  @Input() questionStep: QuestionStep;
  @Input() questionStepId: string;
  indexStepper = 1;

  constructor(
    private router: Router,
    private surveyStepperApiService: SurveyStepperApiService
  ) {}

  ngOnInit() {
    this.surveyStepperApiService.stepperCursor.subscribe(index => {
      this.indexStepper = index;
    });
  }

  goToSearch() {
    this.router.navigateByUrl('/summary');
  }
}
