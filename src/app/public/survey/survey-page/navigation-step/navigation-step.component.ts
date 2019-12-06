import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyStepperSharedService } from 'src/app/core/services/survey-stepper.shared.service';

@Component({
  selector: 'andi-navigation-step',
  templateUrl: './navigation-step.component.html',
  styleUrls: ['./navigation-step.component.scss']
})
export class NavigationStepComponent implements OnInit {


  constructor(
    private surveyStepperSharedService: SurveyStepperSharedService,
    private router: Router
  ) {}

  ngOnInit() {}

  previousQuestion() {
    this.surveyStepperSharedService.goToPrevStep();
  }

  goToSearch() {
    this.router.navigateByUrl('/summary');
  }
}
