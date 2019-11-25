import { TestBed } from '@angular/core/testing';

import { PmsmpService } from './pmsmp.service';

describe('PmsmpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PmsmpService = TestBed.get(PmsmpService);
    expect(service).toBeTruthy();
  });
});
