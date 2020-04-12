import { TestBed } from '@angular/core/testing';

import { NewApiService } from './new-api.service';

describe('NewApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewApiService = TestBed.get(NewApiService);
    expect(service).toBeTruthy();
  });
});
