import { TestBed } from '@angular/core/testing';

import { StationBicingService } from './station-bicing.service';

describe('StationBicingService', () => {
  let service: StationBicingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationBicingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
