import { TestBed } from '@angular/core/testing';

import { Planetas } from './planetas';

describe('Planetas', () => {
  let service: Planetas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Planetas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
