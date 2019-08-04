import { TestBed } from '@angular/core/testing';

import { EpsilonProductsService } from './epsilon-products.service';

describe('EpsilonProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EpsilonProductsService = TestBed.get(EpsilonProductsService);
    expect(service).toBeTruthy();
  });
});
