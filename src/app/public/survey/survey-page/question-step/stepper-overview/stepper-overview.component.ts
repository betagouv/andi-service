import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyStepperSharedService } from 'src/app/core/services/survey-stepper.shared.service';
import { Diagnostic } from 'src/models/diagnostic.model';
import { jobSearch } from '../../../../../../assets/datas/job-search-diagnostic';

@Component({
  selector: 'andi-stepper-overview',
  templateUrl: './stepper-overview.component.html',
  styleUrls: ['./stepper-overview.component.scss']
})
export class StepperOverviewComponent implements OnInit {
  diagContent: Diagnostic;

  constructor(
    private surveyStepperSharedService: SurveyStepperSharedService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadDiagnosticDatas();
  }

  private loadDiagnosticDatas() {
    if (this.surveyStepperSharedService.stateStepper.includes('job_search')) {
      this.diagContent = jobSearch;
    }
  }

  nextQuestion() {
    this.surveyStepperSharedService.goToNextStep('C1');
  }

  goToSearch() {
    this.router.navigateByUrl('/summary');
  }
}
