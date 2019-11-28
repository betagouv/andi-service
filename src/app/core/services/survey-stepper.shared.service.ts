import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyStepperSharedService {
  index = 0;
  indexStepper = new Subject<number>();
  lengthOfQuestionSteps = 0;

  // stateForm: StateForm = new StateForm('', '', '');

  stateForm: IHash = {};

  constructor() {}
}

export interface IHash {
  [indexer: string]: string;
}

/* class StateForm {
  constructor(address: string, jobs: string, range: string) {}
} */
