import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyStepperSharedService } from 'src/app/core/services/survey-stepper.shared.service';
import { TrackingService } from 'src/app/core/services/tracking.service';
import { StepContext } from 'src/models/tracking-request.model';

@Component({
  selector: 'andi-stepper-overview',
  templateUrl: './stepper-overview.component.html',
  styleUrls: ['./stepper-overview.component.scss']
})
export class StepperOverviewComponent implements OnInit {
  isJobSearch = false;
  isJobPrivate = false;
  isJobPublic = false;
  isJobEsat = false;
  isJobIae = false;
  isFormation = false;
  isSick = false;
  isRqth = false;

  constructor(
    private surveyStepperSharedService: SurveyStepperSharedService,
    private router: Router,
    private trackingService: TrackingService
  ) {}

  ngOnInit() {
    this.loadDiagnosticDatas();
    this.trackingService.track('pasapas', StepContext.BILAN, {
      job_search: this.isJobSearch,
      prive: this.isJobPrivate,
      publique: this.isJobPublic,
      esat: this.isJobEsat,
      iae: this.isJobIae,
      formation: this.isFormation,
      maladie: this.isSick,
      rqth: this.isRqth
    });
  }

  private loadDiagnosticDatas() {
    this.isJobSearch = this.surveyStepperSharedService.stateStepper.includes(
      'job_search'
    );
    this.isJobPrivate = this.surveyStepperSharedService.stateStepper.includes(
      'prive'
    );
    this.isJobPublic = this.surveyStepperSharedService.stateStepper.includes(
      'publique'
    );
    this.isJobEsat = this.surveyStepperSharedService.stateStepper.includes(
      'esat'
    );
    this.isJobIae = this.surveyStepperSharedService.stateStepper.includes(
      'iae'
    );
    this.isFormation = this.surveyStepperSharedService.stateStepper.includes(
      'formation'
    );
    this.isSick = this.surveyStepperSharedService.stateStepper.includes('sick');
    this.isRqth =
      this.surveyStepperSharedService.stateStepper.includes('rqth') ||
      this.surveyStepperSharedService.stateStepper.includes('rqth_pending');
  }

  nextQuestion() {
    this.trackingService.track('pasapas', StepContext.TO_MATCHING);
    this.surveyStepperSharedService.goToNextStep('C1');
  }

  goToSearch() {
    this.router.navigateByUrl('/summary');
  }
}
