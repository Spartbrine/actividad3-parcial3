import { TestBed } from '@angular/core/testing';

import { FetcpokedexService } from './fetcpokedex.service';

describe('FetcpokedexService', () => {
  let service: FetcpokedexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetcpokedexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
