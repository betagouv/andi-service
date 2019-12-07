import { CriterionCodeRomes, RomeCode } from './../../../models/pmsmp-request';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { UUID } from 'angular2-uuid';
import { Subject } from 'rxjs';
import { PmsmpResult } from 'src/models/pmsmp-result';
import { PmsmpRequest, Criterion, Address } from 'src/models/pmsmp-request';
import { ADDRESS_TYPE, CriterionDistance } from '../../../models/pmsmp-request';

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
    return this.http.post<PmsmpResult>(
      'https://andi.beta.gouv.fr/api/match',
      this.computeRequestBody(addressField, jobField, rangeField)
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
