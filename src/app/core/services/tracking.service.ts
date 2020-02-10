import { Injectable } from '@angular/core';
import { TrackingResponse } from 'src/models/tracking-response.model';
import { HttpClient } from '@angular/common/http';
import { MatomoTracker } from 'ngx-matomo';
import { TrackingRequest, StepContext } from 'src/models/tracking-request.model';
import * as moment from 'moment';

import * as globals from '../../globals';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {
  order = 0;

  constructor(
    private http: HttpClient,
    private matomoTracker: MatomoTracker
    ) {}

<<<<<<< HEAD
  track(page: string, action: StepContext, meta: object={}) {
    console.log(page, action, meta);

    // matomo tracker event example
    // this.matomoTracker.trackEvent('category', 'action', 'name', someVal);

    const smeta = JSON.stringify(meta);
    this.http.post(
      'https://andi.beta.gouv.fr/api/track',
      this.computeRequestBody(page, action, smeta)
    ).subscribe();
  }

  private computeRequestBody(page: string, action: StepContext, meta: string) {
    return new TrackingRequest(
      1,
      moment().toISOString(),
      (this.order += 1),
      globals.SessionId,
      page,
      action,
      meta
    );
  }
}
