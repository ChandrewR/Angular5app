import { TestBed, inject } from '@angular/core/testing';

import { SecureduserService } from './secureduser.service';

describe('SecureduserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecureduserService]
    });
  });

  it('should be created', inject([SecureduserService], (service: SecureduserService) => {
    expect(service).toBeTruthy();
  }));
});
