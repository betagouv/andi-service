import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { switchMap, debounceTime, tap } from 'rxjs/operators';
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
  pmsmpResult: Subject<PmsmpResult>;
  errorResult: Subject<string> = new Subject();

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
          let sugg: string;
          if (suggestions && suggestions.data && suggestions.data[0]) {
            sugg = suggestions.data[0].id;
          } else {
            sugg = jobField;
          }

          return this.http.post<PmsmpResult>(
            'https://andi.beta.gouv.fr/api/match',
            this.computeRequestBody(
              addressField,
              sugg,
              rangeField
            )
          );
        })
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
    return frmCtrl.valueChanges
      .pipe(
        debounceTime(400),
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
}
