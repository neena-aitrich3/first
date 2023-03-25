import { TestBed } from '@angular/core/testing';

import { DashboardCompanyService } from './dashboard-company.service';

describe('DashboardCompanyService', () => {
  let service: DashboardCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
