import { TestBed } from '@angular/core/testing';

import { ConnaissanceService } from './connaissance-service';

describe('ConnaissanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnaissanceService = TestBed.get(ConnaissanceService);
    expect(service).toBeTruthy();
  });
});
