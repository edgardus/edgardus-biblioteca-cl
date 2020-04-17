import { TestBed } from '@angular/core/testing';

import { NumeroEnPalabrasService } from './numero-en-palabras.service';

describe('NumeroEnPalabrasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  const listaValores = [
    { valor: 101, texto: 'ciento uno' },
    { valor: 32, texto: 'treinta y dos' },
    { valor: 132, texto: 'ciento treinta y dos' },
    { valor: 1132, texto: 'mil ciento treinta y dos' },
    { valor: 2132, texto: 'dos mil ciento treinta y dos' },
    { valor: 102, texto: 'ciento dos' }
  ];

  listaValores.forEach(element => {
    it('Test ' + element.valor, () => {
      const service: NumeroEnPalabrasService = TestBed.get(NumeroEnPalabrasService);
      console.log('test ' + element.valor + ':' + service.numeroEnPalabras(element.valor));
      expect(service.numeroEnPalabras(element.valor)).toEqual(element.texto);
    });
  });

});
