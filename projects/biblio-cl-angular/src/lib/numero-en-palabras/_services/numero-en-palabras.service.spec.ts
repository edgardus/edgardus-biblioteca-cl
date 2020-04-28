import { TestBed } from '@angular/core/testing';

import { NumeroEnPalabrasService } from './numero-en-palabras.service';


describe('numeroEnPalabras', () => {
  beforeEach(() => TestBed.configureTestingModule({

  }));
  const listaValores = [
    { valor: 4, texto: 'cuatro' },
    { valor: 11, texto: 'once' },
    { valor: 101, texto: 'ciento uno' },
    { valor: 32, texto: 'treinta y dos' },
    { valor: 132, texto: 'ciento treinta y dos' },
    { valor: 1132, texto: 'mil ciento treinta y dos' },
    { valor: 2132, texto: 'dos mil ciento treinta y dos' },
    { valor: 102, texto: 'ciento dos' },
    { valor: 2002, texto: 'dos mil dos' },
    { valor: 2022, texto: 'dos mil veintidós' },
    { valor: 12022, texto: 'doce mil veintidós' },
    { valor: 12122, texto: 'doce mil ciento veintidós' },
    { valor: 1000000000000501, texto: 'mil billones quinientos uno' },
    { valor: 4421122, texto: 'cuatro millones cuatrocientos veintiún mil ciento veintidós' },
    { valor: 44421122, texto: 'cuarenta y cuatro millones cuatrocientos veintiún mil ciento veintidós' },
    { valor: 112122, texto: 'ciento doce mil ciento veintidós' }
  ];
  const listaValoresDecimales = [
    { valor: 0.1, texto: 'coma uno' },
    { valor: 0.116, texto: 'coma uno uno seis' }
  ];


  listaValores.forEach(element => {
    it('Test ' + element.valor, () => {
      const service: NumeroEnPalabrasService = TestBed.get(NumeroEnPalabrasService);
      console.log('*******  test ' + element.valor + ':' + service.numeroEnPalabras(element.valor));
      expect(service.numeroEnPalabras(element.valor)).toEqual(element.texto);
    });
  });

  listaValoresDecimales.forEach(elementus => {
    it('Test decimalesEnPalabras' + elementus.valor, () => {
      const serviceDos: NumeroEnPalabrasService = TestBed.get(NumeroEnPalabrasService);
      console.log('*******  test decimalesEnPalabras' + elementus.valor + ':' + serviceDos.decimalesEnPalabras(elementus.valor));
      expect(serviceDos.decimalesEnPalabras(elementus.valor)).toEqual(elementus.texto);
    });
  });

});

