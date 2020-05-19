import { TestBed } from '@angular/core/testing';

import { FavouriteSerService } from './favourite-ser.service';

describe('FavouriteSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavouriteSerService = TestBed.get(FavouriteSerService);
    expect(service).toBeTruthy();
  });
});
