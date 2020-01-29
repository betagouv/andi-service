import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyStepperSharedService } from 'src/app/core/services/survey-stepper.shared.service';

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
  isSick = false;
  isRqth = false;

  constructor(
    private surveyStepperSharedService: SurveyStepperSharedService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadDiagnosticDatas();
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
    this.isSick = this.surveyStepperSharedService.stateStepper.includes('sick');
    this.isRqth = this.surveyStepperSharedService.stateStepper.includes('rqth');
  }

  nextQuestion() {
    this.surveyStepperSharedService.goToNextStep('C1');
  }

  goToSearch() {
    this.router.navigateByUrl('/summary');
  }
}
