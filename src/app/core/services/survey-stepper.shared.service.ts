import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyStepperSharedService {
  stepperCursor: Subject<string> = new Subject();
  pathHistory: string[] = [];

  stateForm: IHash = {};

  constructor() {}

  public goToNextStep(aim: string) {
    console.log('APRES >>> ', this.stateForm)
    this.stepperCursor.next(aim);
    this.pathHistory.push(aim);
  }
  
  public goToPrevStep() {
    console.log('AVANT >>> ', this.stateForm)
    this.pathHistory.splice(-1, 1);
    const lastStepId = this.pathHistory[this.pathHistory.length - 1];
    this.stepperCursor.next(lastStepId);
  }
}

export interface IHash {
  [indexer: string]: string;
}
