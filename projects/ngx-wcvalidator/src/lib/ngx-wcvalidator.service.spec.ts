import { TestBed } from '@angular/core/testing';

import { NgxWCValidatorService } from './ngx-wcvalidator.service';

describe('NgxWCValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxWCValidatorService = TestBed.get(NgxWCValidatorService);
    expect(service).toBeTruthy();
  });
});
