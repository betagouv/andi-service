import { Injectable } from '@angular/core';
import { TrackingResponse } from 'src/models/tracking-response.model';
import { HttpClient } from '@angular/common/http';
import {
  TrackingRequest,
  StepContext
} from 'src/models/tracking-request.model';
import * as moment from 'moment';

import * as globals from '../../globals';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {
  order = 0;

  constructor(private http: HttpClient) {}

  track(page: string, action: StepContext, meta: object={}) {
    console.log(page, action, meta);
    const smeta = JSON.stringify(meta);
    return this.http.post(
      'https://andi.beta.gouv.fr/api/track',
      this.computeRequestBody(page, action, smeta)
    );
  }

  private computeRequestBody(page: string, action: StepContext, meta: string) {
    return new TrackingRequest(
      moment().toISOString(),
      (this.order += 1),
      globals.SessionId,
      page,
      action,
      meta
    );
  }
}
