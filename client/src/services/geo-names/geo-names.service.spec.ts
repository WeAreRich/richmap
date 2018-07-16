import { TestBed, inject } from '@angular/core/testing';

import { GeoNamesService } from './geo-names.service';

describe('GeoNamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoNamesService]
    });
  });

  it('should be created', inject([GeoNamesService], (service: GeoNamesService) => {
    expect(service).toBeTruthy();
  }));
});
