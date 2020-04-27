import { VALORES_NUMEROS } from './../_domain/dominio-nnp';
import { Injectable } from '@angular/core';
import { noEsNulo, noEsNuloNiVacio, esNulo } from '../../utilitario.service';

@Injectable({
  providedIn: 'root'
})
export class NumeroEnPalabrasService {

  constructor() { }

  /**
   *
   * @param x Numero a ser expresado en palabras.
   * @param plural  booleano si returna plural texto cuando es usado como prefijo.
   * @returns :string
   *
   */

  numeroEnPalabras(x: number, plural: boolean = false): string {
    let textus = '';

    if (esNulo(x) || isNaN(x)) {
      return textus;
    }
    if (Number.isInteger(x)) {

    }
    const valorExacto = VALORES_NUMEROS.find(vn => vn.valor === x);
    if (noEsNulo(valorExacto)) {
      textus = plural && noEsNuloNiVacio(valorExacto.prefijo) ? valorExacto.prefijo : valorExacto.texto;
      return textus;
    }
    let numeroStr = x.toString().trim();
    if (numeroStr.length >= 5 && x < 1000000000000) {
      numeroStr = ' '.repeat(numeroStr.length % 3) + numeroStr;
      let textoNumero = '';
      const grupoValores = [];
      while (numeroStr.length > 0) {
        const extraccion = numeroStr.substr(-3, 3).trim();
        if (noEsNuloNiVacio(extraccion)) {
          grupoValores.push(extraccion);
        }
        numeroStr = numeroStr.slice(0, -3);
      }
      grupoValores.forEach((value, index) => {
        const amplificador = Math.pow(1000, index);
        let recurResult = this.numeroEnPalabras(+value, amplificador > 1);
        if (amplificador > 1) {
          const elPOst = VALORES_NUMEROS.find(vn => vn.valor === amplificador);
          if (noEsNulo(elPOst)) {
            const validTxt = noEsNuloNiVacio(elPOst.prefijo) ? elPOst.
              prefijo : elPOst.texto;
            recurResult = recurResult + ' ' + validTxt + ' ';
          }
        }
        textoNumero = recurResult + textoNumero;
      });
      return textoNumero.trim();
    }
    const rango = VALORES_NUMEROS.filter(ra => (ra.valor < x) && ra.valor.toString().endsWith('0'))
      .reduce((a, b) => (a.valor > b.valor) ? a : b);
    if (noEsNulo(rango)) {
      console.log('entra a rango');
      const txt = (rango.prefijo.trim() === '' ? rango.texto : rango.prefijo) + ' ';
      const numeroNuevo = x - rango.valor;
      textus = (numeroNuevo > 0 ? txt : rango.texto);
      textus = rango.valor < 100 ? textus + 'y ' : textus;
      return numeroNuevo > 0 ? textus + this.numeroEnPalabras(numeroNuevo, plural) : textus;
    }
    return null;
  }

  decimalesEnPalabras(x: number): string {
    let texto = '';
    if (esNulo(x) || isNaN(x) || Number.isInteger(x)) {
      return texto;
    }
    console.log('x ' + x);
    let decimalString = x.toString().split('.')[1];
    console.log('decimalString ' + decimalString);
    return texto;
  }

}
