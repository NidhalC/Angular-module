import { TestBed } from '@angular/core/testing';

import { ConnaissanceApiService } from './connaissance-api.service';

describe('ConnaissanceApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnaissanceApiService = TestBed.get(ConnaissanceApiService);
    expect(service).toBeTruthy();
  });
});
