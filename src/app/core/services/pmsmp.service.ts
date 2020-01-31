import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import * as moment from 'moment';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, switchMap, timeout } from 'rxjs/operators';
import { Address, PmsmpRequest } from 'src/models/pmsmp-request';
import { PmsmpResult } from 'src/models/pmsmp-result';
import { RomeSuggestionResponse } from 'src/models/rome-suggestion-response';
import { FeatureCollection } from '../../../models/address-suggestion-response';
import { ADDRESS_TYPE, CriterionDistance } from '../../../models/pmsmp-request';
import { CriterionCodeRomes, RomeCode } from './../../../models/pmsmp-request';
import { SurveyStepperSharedService } from './survey-stepper.shared.service';
import * as globals from '../../globals';

@Injectable({
  providedIn: 'root'
})
export class PmsmpService {
  // tslint:disable-next-line
  //_session_id: string = UUID.UUID();
  _session_id: string = globals.SessionId;
  pmsmpResult: Subject<PmsmpResult>;
  errorResult: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(
    private http: HttpClient,
    private surveyStepperSharedService: SurveyStepperSharedService
  ) {
    this.pmsmpResult = new Subject<PmsmpResult>();
  }

  getPmsmpList(addressField: string, jobField: string, rangeField: string) {
    const parameters = new HttpParams()
      .set('q', jobField)
      .set('_sid', this._session_id)
      .set('_v', '1');
    return this.http
      .get<RomeSuggestionResponse>(
        'https://andi.beta.gouv.fr/api/rome_suggest',
        {
          params: parameters
        }
      )
      .pipe(
        switchMap(suggestions => {
          const romeSuggestion =
            suggestions && suggestions.data && suggestions.data[0]
              ? suggestions.data[0].id
              : jobField;

          return this.http.post<PmsmpResult>(
            'https://andi.beta.gouv.fr/api/match',
            this.computeRequestBody(addressField, romeSuggestion, rangeField)
          );
        }),
        timeout(10000)
      );
  }

  isStateFormComplete(): boolean {
    return (
      this.surveyStepperSharedService.stateForm.address !== undefined &&
      this.surveyStepperSharedService.stateForm.address.length > 0 &&
      this.surveyStepperSharedService.stateForm.jobs !== undefined &&
      this.surveyStepperSharedService.stateForm.jobs.length > 0 &&
      this.surveyStepperSharedService.stateForm.range !== undefined &&
      this.surveyStepperSharedService.stateForm.range.length > 0
    );
  }

  private computeRequestBody(
    addressField: string,
    jobField: string,
    rangeField: string
  ) {
    return new PmsmpRequest(
      moment().toISOString(),
      UUID.UUID(),
      this._session_id,
      new Address(ADDRESS_TYPE.string, addressField),
      [
        new CriterionDistance(2, rangeField),
        new CriterionCodeRomes(5, [new RomeCode(jobField, true, false)], [])
      ]
    );
  }

  enableAutocompleteAddress(frmCtrl: FormControl) {
    return frmCtrl.valueChanges.pipe(
      debounceTime(300),
      switchMap(saisie => {
        const getType = () => {
            // Différencier le type selon le nombre de mots saisis (très perfectible)
            const words = saisie.trim().split(' ').filter(String).length;
            const numbers = saisie.replace(/[^0-9 ]/g, '').replace(/\s+/g, ' ').trim().split(' ').filter(String).length;
            switch (true) {
                case words === 1 && numbers === 0:
                    return 'municipality';
                case words > 1 && numbers === 0:
                    return 'street';
                default:
                    return 'housenumber';

            }
        };
        const parameters = new HttpParams()
          .set('q', saisie !== '' ? saisie : ' ')
          .set('limit', '5')
          .set('type', getType())
          .set('autocomplete', '1');
        return this.http.get<FeatureCollection>(
          'https://api-adresse.data.gouv.fr/search',
          {
            params: parameters
          }
        );
      })
    );
  }

  enableAutocompleteJob(frmCtrl: FormControl) {
    return frmCtrl.valueChanges.pipe(
      debounceTime(300),
      switchMap(saisie => {
        const parameters = new HttpParams()
          .set('q', saisie.length > 2 ? saisie : 'aaa')
          .set('_sid', this._session_id)
          .set('_v', '1');
        return this.http.get<RomeSuggestionResponse>(
          'https://andi.beta.gouv.fr/api/rome_suggest',
          {
            params: parameters
          }
        );
      })
    );
  }
}
