import { TestBed } from '@angular/core/testing';

import { DsnService } from './dsn.service';

describe('DsnService', () => {
  let service: DsnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DsnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
