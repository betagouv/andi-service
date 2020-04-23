import { Injectable } from '@angular/core';
import { TrackingResponse } from 'src/models/tracking-response.model';
import { HttpClient } from '@angular/common/http';
import { MatomoTracker } from 'ngx-matomo';
import { TrackingRequest, StepContext } from 'src/models/tracking-request.model';
import { isDevMode } from '@angular/core';
import { NgxHotjarService } from 'ngx-hotjar';
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

    this.http.post(
      'https://andi.beta.gouv.fr/api/track',
      this.computeRequestBody(page, action, smeta)
    ).subscribe();

    // Test hotjar tracking, log potential errors to console
    // FIXME: Remove logging to console once functionality has been tested
    try { this.hotjar_actions(page, action); } catch (error) { console.log(error); }
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

  private hotjar_actions(page: string, action: StepContext) {
    switch (action) {
      case StepContext.ARRIVAL:
      case StepContext.QUESTION_ARRIVAL:
        this.hotjar.virtualPageView(page);
        break;
      case StepContext.MATCHING_RESULTS:
        this.hotjar.trigger('formSubmitSuccessful');
        break;
      case StepContext.MATCHING_ERROR:
        this.hotjar.trigger('formSubmitFailed');
        break;
    }
  }
}
