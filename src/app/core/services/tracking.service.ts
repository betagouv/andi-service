import { Injectable } from '@angular/core';
import { TrackingResponse } from 'src/models/tracking-response.model';
import { HttpClient } from '@angular/common/http';
import { MatomoTracker } from 'ngx-matomo';
import { TrackingRequest, StepContext } from 'src/models/tracking-request.model';
import { isDevMode } from '@angular/core';
import { NgxHotjarService } from 'ngx-hotjar';
import { StepContext } from 'src/models/tracking-request.model';
import * as moment from 'moment';

import * as globals from '../../globals';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {
  order = 0;

  constructor(
    private http: HttpClient,
    private matomoTracker: MatomoTracker,
    private hotjar: NgxHotjarService,
    ) {}

  track(page: string, action: StepContext, meta: any= {}) {
    // quick hardcode discriminating values in meta
    meta.descriptor = 'mvp';
    meta.dev = isDevMode();

    // matomo tracker event example
    // this.matomoTracker.trackEvent('category', 'action', 'name', someVal);

    const smeta = JSON.stringify(meta);
    if (isDevMode()) {
      console.log(page, action, smeta);
    }

    if (action == StepContext.arrival || action == StepContext.QUESTION_ARRIVAL)
        {
        this.hotjar.virtualPageView(page)
        }

    this.http.post(
      'https://andi.beta.gouv.fr/api/track',
      this.computeRequestBody(page, action, smeta)
    ).subscribe();
  }

  private computeRequestBody(page: string, action: StepContext, meta: any) {
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
