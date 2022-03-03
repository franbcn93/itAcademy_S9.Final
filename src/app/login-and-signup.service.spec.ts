import { TestBed } from '@angular/core/testing';

import { LoginAndSignupService } from './login-and-signup.service';

describe('LoginAndSignupService', () => {
  let service: LoginAndSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAndSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
