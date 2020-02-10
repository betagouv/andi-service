import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { QuestionStep } from 'src/models/question-step.model';
import { SurveyStepperApiService } from '../../../core/services/survey-stepper.api.service';
import { SurveyStepperSharedService } from '../../../core/services/survey-stepper.shared.service';
import { TrackingService } from 'src/app/core/services/tracking.service';
import { StepContext } from 'src/models/tracking-request.model';

@Component({
  selector: 'andi-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.scss']
})
export class SurveyPageComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  isIeOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
  questionSteps: QuestionStep[];
  currentQuestionStep: QuestionStep;
  currentQuestionStepId: string;

  constructor(
    private surveyStepperSharedService: SurveyStepperSharedService,
    private surveyStepperApiService: SurveyStepperApiService,
    private trackingService: TrackingService
  ) {}

  ngOnInit() {
    this.resetStates();
    this.loadStepsList();
    this.loadQuestionStep();
  }
  resetStates() {
    this.surveyStepperSharedService.stateForm = {};
    this.surveyStepperSharedService.pathHistory = [];
    this.surveyStepperSharedService.stateStepper = [];
  }

  loadStepsList(): void {
    this.subscriptions.push(
      this.surveyStepperApiService
        .getListSurvey()
        .subscribe((questionSteps: any) => {
          this.questionSteps = questionSteps;
          this.surveyStepperSharedService.goToNextStep('Q1');
        })
    );
  }
  loadQuestionStep(): void {
    this.subscriptions.push(
      this.surveyStepperSharedService.stepperCursor
        .pipe(startWith('Q1'))
        .subscribe(stepId => {
          const questionStep = this.questionSteps[stepId];
          // question events tracking
          if (this.currentQuestionStep) {
            this.trackingService.track(
                'pasapas',
                StepContext.QUESTION_DEPARTURE,
                {'question': this.currentQuestionStep.slug, 'id': this.currentQuestionStepId}
            );
          }
          this.trackingService.track('pasapas', StepContext.QUESTION_ARRIVAL, {'question': questionStep.slug, 'id': stepId});

          this.currentQuestionStep = questionStep;
          this.currentQuestionStepId = stepId;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(
      subscription => subscription && subscription.unsubscribe()
    );
  }
}
