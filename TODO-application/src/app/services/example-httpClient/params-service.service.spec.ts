import { TestBed } from '@angular/core/testing';

import { ParamsServiceService } from './params-service.service';

describe('ParamsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParamsServiceService = TestBed.get(ParamsServiceService);
    expect(service).toBeTruthy();
  });
});
