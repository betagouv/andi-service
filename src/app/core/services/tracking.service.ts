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

  track(page: string, action: StepContext, meta: string) {
    // matomo tracker event example
    // this.matomoTracker.trackEvent('category', 'action', 'name', someVal);

    return this.http.post(
      'https://andi.beta.gouv.fr/api/track',
      this.computeRequestBody(page, action, meta)
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
