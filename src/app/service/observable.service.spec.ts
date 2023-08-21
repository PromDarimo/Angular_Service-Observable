import { TestBed } from '@angular/core/testing';

import { ObservibleService } from './observable.service';

describe('ObservibleService', () => {
  let service: ObservibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
