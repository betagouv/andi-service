import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyStepperSharedService {

  stepperCursor: Subject<string> = new Subject();

  stateForm: IHash = {};

  constructor() {}
}

export interface IHash {
  [indexer: string]: string;
}
