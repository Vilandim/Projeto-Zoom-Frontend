import { TestBed } from '@angular/core/testing';

import { ApiServiceProfService } from './api-service-prof.service';

describe('ApiServiceProfService', () => {
  let service: ApiServiceProfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServiceProfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
