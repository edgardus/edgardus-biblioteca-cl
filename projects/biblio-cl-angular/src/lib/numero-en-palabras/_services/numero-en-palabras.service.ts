import { VALORES_NUMEROS } from './../_domain/dominio-nnp';
import { Injectable } from '@angular/core';
import { noEsNulo } from '../../utilitario.service';

@Injectable({
  providedIn: 'root'
})
export class NumeroEnPalabrasService {

  constructor() { }

  /**
   *
   * @param x Numero a ser expresado en palabras.
   */
  numeroEnPalabras(x: number, prefix: string = ''): string {
    let textus = '';
    let numero = x;
    const valorExacto = VALORES_NUMEROS.find(vn => vn.valor === numero);
    if (noEsNulo(valorExacto)) {
      textus = prefix + valorExacto.texto;
      return textus;
    }
    const rango = VALORES_NUMEROS.filter(ra => (ra.valor < x) && ra.valor.toString().endsWith('0'))
      .reduce((a, b) => (a.valor > b.valor) ? a : b);
    if (noEsNulo(rango)) {
      const txt = (rango.prefijo.trim() === '' ? rango.texto : rango.prefijo) + ' ';
      numero = numero - rango.valor;
      textus = prefix + (numero > 0 ? txt : rango.texto);
      textus = rango.valor < 100 ? textus + 'y ' : textus;
      return numero > 0 ? this.numeroEnPalabras(numero, textus) : textus;
    }
    return null;
  }
}
