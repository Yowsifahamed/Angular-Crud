import { TestBed } from '@angular/core/testing';

import { FormDeatailService } from './form-deatail.service';

describe('FormDeatailService', () => {
  let service: FormDeatailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDeatailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
