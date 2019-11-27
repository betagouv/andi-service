import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { stepItems } from '../../../assets/datas/survey-step-items';

@Injectable({
  providedIn: 'root'
})
export class SurveyStepperApiService {
  public getListSurvey(): Observable<any> {
    return of(stepItems);
  }
}
