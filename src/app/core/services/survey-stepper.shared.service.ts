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
    this.stepperCursor.next(aim);
    this.pathHistory.push(aim);
  }
}

export interface IHash {
  [indexer: string]: string;
}
