import { TestBed } from '@angular/core/testing';

import { NumeroEnPalabrasService } from './numero-en-palabras.service';

describe('NumeroEnPalabrasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumeroEnPalabrasService = TestBed.get(NumeroEnPalabrasService);
    expect(service).toBeTruthy();
  });
});
