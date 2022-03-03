import { TestBed } from '@angular/core/testing';

import { WeatherTaskService } from './weather-task.service';

describe('WeatherTaskService', () => {
  let service: WeatherTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
