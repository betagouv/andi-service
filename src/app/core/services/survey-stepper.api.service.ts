import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { stepItems } from '../../../assets/datas/survey-step-items';

@Injectable({
  providedIn: 'root'
})

export class SurveyStepperApiService {
  stepperCursor = new BehaviorSubject<number>(1);

  public getListSurvey(): Observable<any> {
    return of(stepItems);
  }
}
