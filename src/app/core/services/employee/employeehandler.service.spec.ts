import { TestBed } from '@angular/core/testing';

import { EmployeehandlerService } from './employeehandler.service';

describe('EmployeehandlerService', () => {
  let service: EmployeehandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeehandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
