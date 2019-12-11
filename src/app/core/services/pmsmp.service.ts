import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Address, PmsmpRequest } from 'src/models/pmsmp-request';
import { PmsmpResult } from 'src/models/pmsmp-result';
import { RomeSuggestionResponse } from 'src/models/rome-suggestion-response';
import { ADDRESS_TYPE, CriterionDistance } from '../../../models/pmsmp-request';
import { CriterionCodeRomes, RomeCode } from './../../../models/pmsmp-request';

@Injectable({
  providedIn: 'root'
})
export class PmsmpService {
  _session_id: string;
  pmsmpResult: Subject<PmsmpResult>;

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
          return this.http.post<PmsmpResult>(
            'https://andi.beta.gouv.fr/api/match',
            this.computeRequestBody(
              addressField,
              suggestions.data[0].id,
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
}
