import { TestBed } from '@angular/core/testing';

import { FormationApiService } from './formation-api.service';

describe('FormationApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormationApiService = TestBed.get(FormationApiService);
    expect(service).toBeTruthy();
  });
});
