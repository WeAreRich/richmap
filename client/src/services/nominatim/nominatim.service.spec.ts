import { TestBed, inject } from '@angular/core/testing';

import { NominatimService } from './nominatim.service';

describe('NominatimService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NominatimService]
    });
  });

  it('should be created', inject([NominatimService], (service: NominatimService) => {
    expect(service).toBeTruthy();
  }));
});
