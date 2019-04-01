import { TestBed } from '@angular/core/testing';

import { HeaderInterceptorsService } from './header-interceptors.service';

describe('HeaderInterceptorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeaderInterceptorsService = TestBed.get(HeaderInterceptorsService);
    expect(service).toBeTruthy();
  });
});
