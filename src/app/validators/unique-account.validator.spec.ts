import { TestBed } from '@angular/core/testing';

import { UniqueAccountValidator } from './unique-account.validator';

describe('UniqueAccountValidator', () => {
  let service: UniqueAccountValidator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueAccountValidator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
