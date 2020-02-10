import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
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
  currentSection = 'pasapas';

  constructor(
    private surveyStepperSharedService: SurveyStepperSharedService,
    private surveyStepperApiService: SurveyStepperApiService,
    private trackingService: TrackingService
  ) {}

  ngOnInit() {
    this.trackingService.track(this.currentSection, StepContext.ARRIVAL);
    this.resetStates();
    this.loadStepsList();
    this.loadQuestionStep();
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.subscriptions.forEach(
      subscription => subscription && subscription.unsubscribe()
    );
    this.trackingService.track(this.currentSection, StepContext.DEPART, {reason: 'destroy'});
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
          // ensure correct questionaire section in user tracking
          const prevSection = this.currentSection;
          this.currentSection = stepId.substr(0, 1) === 'C' ? 'questionnaire-matching' : 'pasapas';
          const questionStep = this.questionSteps[stepId];
          // question events tracking
          if (this.currentQuestionStep && prevSection === this.currentSection) {
            this.trackingService.track(
                this.currentSection,
                StepContext.QUESTION_DEPARTURE,
                {question: this.currentQuestionStep.slug, id: this.currentQuestionStepId}
            );
          }
          this.trackingService.track(this.currentSection, StepContext.QUESTION_ARRIVAL, {question: questionStep.slug, id: stepId});

          this.currentQuestionStep = questionStep;
          this.currentQuestionStepId = stepId;
        })
    );
  }
}
