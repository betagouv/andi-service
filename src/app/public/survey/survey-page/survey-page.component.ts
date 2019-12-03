import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionStep } from 'src/models/question-step.model';
import { SurveyStepperSharedService } from '../../../core/services/survey-stepper.shared.service';
import { SurveyStepperApiService } from '../../../core/services/survey-stepper.api.service';
import { Subscription } from 'rxjs';

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
    this.subscriptions.push(this.getSteps(), this.loadQuestionStep());
  }

  getSteps(): Subscription {
    return this.surveyStepperApiService
      .getListSurvey()
      .subscribe((questionSteps: any) => {
        this.questionSteps = questionSteps;
        this.currentQuestionStep = this.questionSteps[0];
        this.surveyStepperSharedService.lengthOfQuestionSteps =
          questionSteps.length;
      });
  }
  loadQuestionStep(): Subscription {
    return this.surveyStepperSharedService.indexStepper.subscribe(
      (index: number) => {
        this.currentQuestionStep = this.questionSteps[index];
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(
      subscription => subscription && subscription.unsubscribe()
    );
  }
}
