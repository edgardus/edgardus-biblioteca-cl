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
   * @param textoAntes Texto previo
   * @param textoDespues Texto post
   * @returns :string
   *
   */
  numeroEnPalabras(x: number, textoAntes: string = '', textoDespues: string = ''): string {
    let textus = '';
    let numero = x;
    const valorExacto = VALORES_NUMEROS.find(vn => vn.valor === numero);
    if (noEsNulo(valorExacto)) {
      textus = textoAntes + valorExacto.texto;
      return textus;
    }
    let numeroStr = numero.toString();
    if (numeroStr.length >= 6) {
      const grupoValores = [];
      // modifica str.slice(3, -2); extrae str.substr(-2,2)
      while (numeroStr.length > 0) {
        grupoValores.push(numeroStr.substr(-3, 3));
        numeroStr = numeroStr.slice(0, -3);
      }

    }

    const rango = VALORES_NUMEROS.filter(ra => (ra.valor < x) && ra.valor.toString().endsWith('0'))
      .reduce((a, b) => (a.valor > b.valor) ? a : b);
    if (noEsNulo(rango)) {
      const txt = (rango.prefijo.trim() === '' ? rango.texto : rango.prefijo) + ' ';
      const numeroNuevo = numero - rango.valor;
      if (numeroNuevo > 1000) {
        const valorY = (rango.valor / 10);
        const resto = numero % valorY;
        console.log('valorY' + valorY);
        const valorX = (numero - resto) / valorY;
        console.log('valorX' + valorX);
        const nnvalorExacto = VALORES_NUMEROS.find(vn => vn.valor === valorX);
        const nnvalorExactoY = VALORES_NUMEROS.find(vn => vn.valor === valorY);
        if (noEsNulo(nnvalorExacto)) {
          textus = textoAntes + nnvalorExacto.texto + ' ' + nnvalorExactoY.texto + ' ';
          numero = resto;
        } else {

          return 'err';
        }
      } else {
        numero = numeroNuevo;
        textus = textoAntes + (numeroNuevo > 0 ? txt : rango.texto);
        textus = rango.valor < 100 ? textus + 'y ' : textus;
      }
      return numero > 0 ? this.numeroEnPalabras(numero, textus) : textus;
    }
    return null;
  }
}
