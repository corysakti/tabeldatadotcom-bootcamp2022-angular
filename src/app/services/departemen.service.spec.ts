import { TestBed } from '@angular/core/testing';

import { DepartemenService } from './departemen.service';

describe('DepartemenService', () => {
  let service: DepartemenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartemenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
