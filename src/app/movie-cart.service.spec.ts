import { TestBed } from '@angular/core/testing';

import { MovieCartService } from './movie-cart.service';

describe('MovieCartService', () => {
  let service: MovieCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
