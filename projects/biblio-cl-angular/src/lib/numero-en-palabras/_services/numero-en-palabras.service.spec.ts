import { TestBed } from '@angular/core/testing';

import { NumeroEnPalabrasService } from './numero-en-palabras.service';

describe('NumeroEnPalabrasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('Test 101', () => {
    const service: NumeroEnPalabrasService = TestBed.get(NumeroEnPalabrasService);
    console.log(service.numeroEnPalabras(101));

    expect(service.numeroEnPalabras(101)).toEqual('ciento uno');
  });
  it('Test 102', () => {
    const service: NumeroEnPalabrasService = TestBed.get(NumeroEnPalabrasService);
    console.log(service.numeroEnPalabras(102));

    expect(service.numeroEnPalabras(102)).toEqual('ciento dos');
  });
});
