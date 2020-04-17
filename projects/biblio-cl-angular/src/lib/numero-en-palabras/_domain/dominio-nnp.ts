export interface EscalaNumero {
  min: number;
  max: number;
  nombreSingular: string;
  nombrePlural: string;
}

export interface ValorNumero {
  valor: number;
  texto: string;
}

export interface ArbolNumeros {
  valoresNumero: ValorNumero[];
  escalaNumerica: EscalaNumero[];
}

export const ESCALA_NUMERICA: EscalaNumero[] = [
  {}
];
export const VALORES_NUMEROS: ValorNumero[] = [
  {valor:1,texto:'uno'}

];

export const ARBOL_NUMEROS: ArbolNumeros = {
  valoresNumero: VALORES_NUMEROS,
  escalaNumerica: ESCALA_NUMERICA
};
