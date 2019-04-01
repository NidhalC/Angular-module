import { TestBed } from '@angular/core/testing';

import { FormationsResolversService } from './formations-resolvers.service';

describe('FormationsResolversService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormationsResolversService = TestBed.get(FormationsResolversService);
    expect(service).toBeTruthy();
  });
});
