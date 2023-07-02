import { TestBed } from '@angular/core/testing';

import { AdminbillingService } from './adminbilling.service';

describe('AdminbillingService', () => {
  let service: AdminbillingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminbillingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
