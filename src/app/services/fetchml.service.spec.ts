import { TestBed } from '@angular/core/testing';

import { FetchmlService } from './fetchml.service';

describe('FetchmlService', () => {
  let service: FetchmlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchmlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
