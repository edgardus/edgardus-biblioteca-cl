import { VALORES_NUMEROS } from './../_domain/dominio-nnp';
import { Injectable } from '@angular/core';
import { noEsNulo, noEsNuloNiVacio, esNulo } from '../../utilitario.service';
import { isNumber } from 'util';

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
    let textoEntero = '';
    let textoDecimal = '';

    if (esNulo(x) || isNaN(x)) {
      return textoEntero;
    }
    if (!Number.isInteger(x)) {
      textoDecimal = this.decimalesEnPalabras(x);
      x = +x.toString().split('.')[0];
    }
    const valorExacto = VALORES_NUMEROS.find(vn => vn.valor === x);
    if (noEsNulo(valorExacto)) {
      textoEntero = plural && noEsNuloNiVacio(valorExacto.prefijo) ? valorExacto.prefijo : valorExacto.texto;
      return textoEntero + textoDecimal;
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
      return textoNumero.trim() + textoDecimal;
    }
    const rango = VALORES_NUMEROS.filter(ra => (ra.valor < x) && ra.valor.toString().endsWith('0'))
      .reduce((a, b) => (a.valor > b.valor) ? a : b);
    if (noEsNulo(rango)) {
      console.log('entra a rango');
      const txt = (rango.prefijo.trim() === '' ? rango.texto : rango.prefijo) + ' ';
      const numeroNuevo = x - rango.valor;
      textoEntero = (numeroNuevo > 0 ? txt : rango.texto);
      textoEntero = rango.valor < 100 ? textoEntero + 'y ' : textoEntero;
      const resultado = numeroNuevo > 0 ? textoEntero + this.numeroEnPalabras(numeroNuevo, plural) : textoEntero;
      return resultado + textoDecimal;
    }
    return null;
  }

  /**
   * Metodo encargado, de leer los valores decimales del numero y traducirlo a palabras.
   *
   * @param x numero con valores decimales
   */
  decimalesEnPalabras(x: number): string {
    let texto = ' coma';
    if (esNulo(x) || isNaN(x) || Number.isInteger(x)) {
      return texto;
    }
    console.log('x ' + x);
    let decimalString = x.toString().split('.')[1];
    console.log('##### decimalString ' + decimalString);
    while (decimalString.length > 0) {
      const extraccion = +decimalString.substr(0, 1).trim();
      console.log('##### ******************decimalString ' + decimalString);
      decimalString = decimalString.slice(1);
      console.log('******extraccion ' + extraccion);
      if (noEsNulo(extraccion) &&
        isNumber(extraccion)) {
        const valorExacto = VALORES_NUMEROS.find(vn => vn.valor === extraccion);
        if (noEsNulo(valorExacto)) {
          texto = texto + ' ' + valorExacto.texto;
          console.log('******tex ' + texto);
        }
      }
    }
    return texto;
  }

}
