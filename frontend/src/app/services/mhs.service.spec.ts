import { TestBed } from '@angular/core/testing';

import { MhsService } from './mhs.service';

describe('MhsService', () => {
  let service: MhsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MhsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
