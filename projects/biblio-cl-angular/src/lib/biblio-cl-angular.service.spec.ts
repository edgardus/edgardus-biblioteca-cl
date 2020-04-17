import { TestBed } from '@angular/core/testing';

import { BiblioClAngularService } from './biblio-cl-angular.service';

describe('BiblioClAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BiblioClAngularService = TestBed.get(BiblioClAngularService);
    expect(service).toBeTruthy();
  });
});
