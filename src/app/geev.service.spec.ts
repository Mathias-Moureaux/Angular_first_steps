import { TestBed } from '@angular/core/testing';

import { GeevService } from './geev.service';

describe('GeevService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeevService = TestBed.get(GeevService);
    expect(service).toBeTruthy();
  });
});
