import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionStep } from 'src/models/question-step.model';
import { SurveyStepperSharedService } from '../../../core/services/survey-stepper.shared.service';
import { SurveyStepperApiService } from '../../../core/services/survey-stepper.api.service';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'andi-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.scss']
})
export class SurveyPageComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  questionSteps: QuestionStep[];
  currentQuestionStep: QuestionStep;

  constructor(
    private surveyStepperSharedService: SurveyStepperSharedService,
    private surveyStepperApiService: SurveyStepperApiService
  ) {}

  ngOnInit() {
    this.loadStepsList();
    this.loadQuestionStep();
  }

  loadStepsList(): void {
    this.subscriptions.push(
      this.surveyStepperApiService
        .getListSurvey()
        .subscribe((questionSteps: any) => {
          this.questionSteps = questionSteps;
          this.surveyStepperSharedService.stepperCursor.next('Q1');
        })
    );
  }
  loadQuestionStep(): void {
    this.subscriptions.push(
      this.surveyStepperSharedService.stepperCursor.pipe(startWith('Q1')).subscribe(stepId => {
        this.currentQuestionStep = this.questionSteps[stepId];
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(
      subscription => subscription && subscription.unsubscribe()
    );
  }
}
