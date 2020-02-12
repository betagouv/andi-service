import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyStepperSharedService {
  pathHistory: string[] = [];

  stateForm: IHash = {};
  stateStepper: string[] = [];

  constructor(private route: Router) {}

  public goToNextStep(aim: string) {
    this.route.navigate(['/survey', aim]);
    this.pathHistory.push(aim);
  }

  public goToPrevStep() {
    this.stateStepper.splice(-1, 1);
    this.pathHistory.splice(-1, 1);
    const lastStepId = this.pathHistory[this.pathHistory.length - 1];
    this.route.navigate(['/survey', lastStepId]);
  }
}

export interface IHash {
  [indexer: string]: string;
}
