import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SurveyStepperSharedService } from 'src/app/core/services/survey-stepper.shared.service';
import { SurveyStepperApiService } from '../../../../core/services/survey-stepper.api.service';

@Component({
  selector: 'andi-navigation-step',
  templateUrl: './navigation-step.component.html',
  styleUrls: ['./navigation-step.component.scss']
})
export class NavigationStepComponent implements OnInit {
  enablePrev = false;
  indexCursor: number;

  constructor(
    private surveyStepperSharedService: SurveyStepperSharedService,
    private surveyStepperApiService: SurveyStepperApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.surveyStepperApiService.stepperCursor.subscribe((index) => {
      this.indexCursor = index;
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      const stepId = params.get('stepId');
      this.enablePrev = stepId !== 'Q1';
    });

  }

  previousQuestion() {
    this.surveyStepperApiService.stepperCursor.next(this.indexCursor -= 1);
    this.surveyStepperSharedService.goToPrevStep();
  }

  goToSearch() {
    this.router.navigateByUrl('/summary');
  }
}
