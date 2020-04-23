import { TestBed } from '@angular/core/testing';

import { FavouriteCharService } from './favourite-char.service';

describe('FavouriteCharService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavouriteCharService = TestBed.get(FavouriteCharService);
    expect(service).toBeTruthy();
  });
});
