import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable()
export class UtilitarioService {

  constructor() { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.message}`);
    }
    return throwError(new Error(
      'Estamos experimentando dificultades técnicas; por favor intente mas tarde nuevamente.'));
  }

}
/**
 *
 * Metodo encargado de validar si un objeto es nulo.
 *
 * @export
 * @param  x Objeto a evaluar
 * @returns  true para null o undefined
 */
export function esNulo(x: any): boolean {
  return !(x !== null && x !== undefined);
}
/**
 * Metodo encargado de validar si un objeto no es nulo.
 *
 * @export
 * @param  x Objeto a evaluar
 * @returns  false para null o undefined
 */
export function noEsNulo(x: any): boolean {
  return x !== null && x !== undefined;
}
/**
 * Metodo encargado de validar si un objeto no es nulo
 * ni vacio.
 *
 * @export
 * @param  x Objeto a evaluar
 * @returns  false para null o undefined o vacio.
 */
export function noEsNuloNiVacio(x: any): boolean {
  return x !== null && x !== undefined && x !== '';
}
