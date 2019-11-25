import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { UUID } from 'angular2-uuid';
import { Subject } from 'rxjs';
import { PmsmpResult } from 'src/models/pmsmp-result';
import { PmsmpRequest, Criteria, Address } from 'src/models/pmsmp-request';

@Injectable({
  providedIn: 'root'
})
export class PmsmpService {

  _session_id: string;
  pmsmpResult: Subject<PmsmpResult>;

  constructor(private http: HttpClient) {
    this.pmsmpResult = new Subject<PmsmpResult>();
  }

  private computeRequestBody(
    address: Address,
    criteria: Criteria[]
  ) {
    return new PmsmpRequest(
      moment().toISOString(),
      UUID.UUID(),
      this._session_id,
      address,
      criteria
    );
  }

  getPmsmpList(address: Address, criteria: Criteria[]) {
    return this.http.post<PmsmpResult>(
      'https://andi.beta.gouv.fr/api/match',
      this.computeRequestBody( address, criteria)
    );
  }
}
