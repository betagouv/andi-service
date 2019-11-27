import { TestBed } from '@angular/core/testing';

import { SurveyStepperSharedService } from './survey-stepper.shared.service';

describe('SurveyStepperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SurveyStepperSharedService = TestBed.get(SurveyStepperSharedService);
    expect(service).toBeTruthy();
  });
});
