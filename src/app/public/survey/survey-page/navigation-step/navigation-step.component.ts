import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyStepperSharedService } from 'src/app/core/services/survey-stepper.shared.service';

@Component({
  selector: 'andi-navigation-step',
  templateUrl: './navigation-step.component.html',
  styleUrls: ['./navigation-step.component.scss']
})
export class NavigationStepComponent implements OnInit {
  enablePrev = false;

  constructor(
    private surveyStepperSharedService: SurveyStepperSharedService,
    private router: Router
  ) {}

  ngOnInit() {
    this.surveyStepperSharedService.stepperCursor.subscribe(stepId => {
      this.enablePrev = stepId === 'Q1' ? false : true;
    });
  }

  previousQuestion() {
    this.surveyStepperSharedService.goToPrevStep();
  }

  goToSearch() {
    this.router.navigateByUrl('/summary');
  }
}
