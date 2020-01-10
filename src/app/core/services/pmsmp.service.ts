import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import * as moment from 'moment';
import { Subject, BehaviorSubject } from 'rxjs';
import { switchMap, debounceTime, tap, timeout } from 'rxjs/operators';
import { Address, PmsmpRequest } from 'src/models/pmsmp-request';
import { PmsmpResult } from 'src/models/pmsmp-result';
import { RomeSuggestionResponse } from 'src/models/rome-suggestion-response';
import { ADDRESS_TYPE, CriterionDistance } from '../../../models/pmsmp-request';
import { CriterionCodeRomes, RomeCode } from './../../../models/pmsmp-request';
import { FormControl } from '@angular/forms';
import { AddressSuggestionResponse } from 'src/models/address-suggestion-response';

@Injectable({
  providedIn: 'root'
})
export class PmsmpService {
  _session_id: string;
  jobSuggestion: string;
  pmsmpResult: Subject<PmsmpResult>;
  errorResult: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private http: HttpClient) {
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
          this.jobSuggestion = suggestions.data[0].value;

          return this.http.post<PmsmpResult>(
            'https://andi.beta.gouv.fr/api/match',
            this.computeRequestBody(addressField, romeSuggestion, rangeField)
          );
        }),
        timeout(10000)
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
        const parameters = new HttpParams()
          .set('q', saisie !== '' ? saisie : ' ')
          .set('limit', '5')
          .set('type', 'housenumber')
          .set('autocomplete', '1');
        return this.http.get<AddressSuggestionResponse>(
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
