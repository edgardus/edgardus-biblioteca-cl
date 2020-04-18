export interface EscalaNumero {
  min: number;
  max: number;
  nombreSingular: string;
  nombrePlural: string;
}

export interface ValorNumero {
  valor: number;
  texto: string;
  prefijo: string;
  nota: string;
}

export interface ArbolNumeros {
  valoresNumero: ValorNumero[];
  escalaNumerica: EscalaNumero[];
}

export const ESCALA_NUMERICA: EscalaNumero[] = [
];
export const VALORES_NUMEROS: ValorNumero[] = [
  { valor: 0, texto: 'cero', prefijo: '', nota: '' },
  { valor: 1, texto: 'uno', prefijo: '', nota: '' },
  { valor: 2, texto: 'dos', prefijo: '', nota: '' },
  { valor: 3, texto: 'tres', prefijo: '', nota: '' },
  { valor: 4, texto: 'cuatro', prefijo: '', nota: '' },
  { valor: 5, texto: 'cinco', prefijo: '', nota: '' },
  { valor: 6, texto: 'seis', prefijo: '', nota: '' },
  { valor: 7, texto: 'siete', prefijo: '', nota: '' },
  { valor: 8, texto: 'ocho', prefijo: '', nota: '' },
  { valor: 9, texto: 'nueve', prefijo: '', nota: '' },
  { valor: 10, texto: 'diez', prefijo: '', nota: '' },
  { valor: 11, texto: 'once', prefijo: '', nota: '' },
  { valor: 12, texto: 'doce', prefijo: '', nota: '' },
  { valor: 13, texto: 'trece', prefijo: '', nota: '' },
  { valor: 14, texto: 'catorce', prefijo: '', nota: '' },
  { valor: 15, texto: 'quince', prefijo: '', nota: '' },
  { valor: 16, texto: 'dieciséis', prefijo: '', nota: 'Lleva tilde.' },
  { valor: 17, texto: 'diecisiete', prefijo: '', nota: '' },
  { valor: 18, texto: 'dieciocho', prefijo: '', nota: '' },
  { valor: 19, texto: 'diecinueve', prefijo: '', nota: '' },
  { valor: 20, texto: 'veinte', prefijo: '', nota: 'Nótese la i' },
  {
    valor: 21, texto: 'veintiuno', prefijo: 'veintiún',
    nota: 'veintiuna Delante de un sustantivo veintiún o veintiuna.'
  },
  { valor: 22, texto: 'veintidós', prefijo: '', nota: 'Lleva tilde.' },
  { valor: 23, texto: 'veintitrés', prefijo: '', nota: 'Lleva tilde.' },
  { valor: 24, texto: 'veinticuatro', prefijo: '', nota: '' },
  {
    valor: 25, texto: 'veinticinco', prefijo: '',
    nota: 'En textos especializados a 25 años se refieren con el término «generación».'
  },
  { valor: 26, texto: 'veintiséis', prefijo: '', nota: 'Lleva tilde.' },
  { valor: 27, texto: 'veintisiete', prefijo: '', nota: '' },
  { valor: 28, texto: 'veintiocho', prefijo: '', nota: '' },
  { valor: 29, texto: 'veintinueve', prefijo: '', nota: '' },
  { valor: 30, texto: 'treinta', prefijo: '', nota: 'Nótese la i' },
  {
    valor: 31, texto: 'treinta y uno',
    prefijo: 'treinta y un', nota: 'treinta y una Delante de un sustantivo treinta y un o treinta y una.'
  },
  { valor: 40, texto: 'cuarenta', prefijo: '', nota: '' },
  {
    valor: 41, texto: 'cuarenta y uno', prefijo: 'cuarenta y un',
    nota: 'cuarenta y una Delante de un sustantivo cuarenta y un o cuarenta y una.'
  },
  { valor: 50, texto: 'cincuenta', prefijo: '', nota: '' },
  {
    valor: 51, texto: 'cincuenta y uno', prefijo: 'cincuenta y un',
    nota: 'cincuenta y una Delante de un sustantivo cincuenta y un o cincuenta y una.'
  },
  { valor: 60, texto: 'sesenta', prefijo: '', nota: '' },
  {
    valor: 61, texto: 'sesenta y uno', prefijo: 'sesenta y un',
    nota: 'sesenta y una Delante de un sustantivo sesenta y un o sesenta y una.'
  },
  { valor: 70, texto: 'setenta', prefijo: '', nota: '' },
  {
    valor: 71, texto: 'setenta y uno', prefijo: 'setenta y un',
    nota: 'setenta y una Delante de un sustantivo setenta y un o setenta y una.'
  },
  { valor: 80, texto: 'ochenta', prefijo: '', nota: '' },
  {
    valor: 81, texto: 'ochenta y uno', prefijo: 'ochenta y un',
    nota: 'ochenta y una Delante de un sustantivo ochenta y un u ochenta y una.'
  },
  { valor: 90, texto: 'noventa', prefijo: '', nota: '' },
  {
    valor: 91, texto: 'noventa y uno', prefijo: 'noventa y un',
    nota: 'noventa y una Delante de un sustantivo noventa y un o noventa y una.'
  },
  { valor: 100, texto: 'cien', prefijo: 'ciento', nota: '' },
  { valor: 101, texto: 'ciento uno', prefijo: 'ciento un', nota: 'ciento una' },
  { valor: 111, texto: 'ciento once', prefijo: '', nota: '' },
  { valor: 123, texto: 'ciento veintitrés', prefijo: '', nota: '' },
  { valor: 153, texto: 'ciento cincuenta y tres', prefijo: '', nota: '' },
  { valor: 200, texto: 'doscientos', prefijo: '', nota: 'doscientas Nótense las consonantes «sc»' },
  { valor: 210, texto: 'doscientos diez', prefijo: '', nota: 'doscientas diez' },
  { valor: 300, texto: 'trescientos', prefijo: '', nota: 'trescientas Nótense las consonantes sc' },
  { valor: 400, texto: 'cuatrocientos', prefijo: '', nota: 'cuatrocientas' },
  { valor: 500, texto: 'quinientos', prefijo: '', nota: 'quinientas Irregular' },
  { valor: 600, texto: 'seiscientos', prefijo: '', nota: 'seiscientas Nótense las consonantes sc' },
  { valor: 700, texto: 'setecientos', prefijo: '', nota: 'setecientas Irregular Se pierde la i de siete' },
  { valor: 800, texto: 'ochocientos', prefijo: '', nota: 'ochocientas' },
  { valor: 900, texto: 'novecientos', prefijo: '', nota: 'novecientas Irregular' },
  { valor: 999, texto: 'novecientos noventa y nueve', prefijo: '', nota: 'novecientas noventa y nueve' },
  { valor: 1000, texto: 'mil', prefijo: '', nota: '' },
  { valor: 2000, texto: 'dos mil', prefijo: '', nota: '' },
  { valor: 3000, texto: 'tres mil', prefijo: '', nota: '' },
  { valor: 4000, texto: 'cuatro mil', prefijo: '', nota: '' },
  { valor: 5000, texto: 'cinco mil', prefijo: '', nota: '' },
  { valor: 6000, texto: 'seis mil', prefijo: '', nota: '' },
  { valor: 7000, texto: 'siete mil', prefijo: '', nota: '' },
  { valor: 8000, texto: 'ocho mil', prefijo: '', nota: '' },
  { valor: 9000, texto: 'nueve mil', prefijo: '', nota: '' },
  { valor: 10000, texto: 'diez mil', prefijo: '', nota: '' },
  { valor: 15000, texto: 'quince mil', prefijo: '', nota: '' },
  { valor: 20000, texto: 'veinte mil', prefijo: '', nota: '' },
  { valor: 21000, texto: 'veintiún mil', prefijo: '', nota: '' },
  { valor: 30000, texto: 'treinta mil', prefijo: '', nota: '' },
  { valor: 40000, texto: 'cuarenta mil', prefijo: '', nota: '' },
  { valor: 50000, texto: 'cincuenta mil', prefijo: '', nota: '' },
  { valor: 60000, texto: 'sesenta mil', prefijo: '', nota: '' },
  { valor: 70000, texto: 'setenta mil', prefijo: '', nota: '' },
  { valor: 80000, texto: 'ochenta mil', prefijo: '', nota: '' },
  { valor: 90000, texto: 'noventa mil', prefijo: '', nota: '' },
  { valor: 100000, texto: 'cien mil', prefijo: '', nota: '' },
  { valor: 1000000, texto: 'un millón', prefijo: '', nota: '' },
  { valor: 2000000, texto: 'dos millones', prefijo: '', nota: '' },
  { valor: 500000000, texto: 'quinientos millones', prefijo: '', nota: '' },
  { valor: 1000000000, texto: 'mil millones (a veces «un millardo»)', prefijo: '', nota: '' },
  { valor: 1200000000, texto: 'mil doscientos millones', prefijo: '', nota: '' },
  { valor: 5000000000, texto: 'cinco mil millones', prefijo: '', nota: '' },
  { valor: 1000000000000, texto: 'un billón', prefijo: '', nota: '' },
  { valor: 1000000000000000, texto: 'mil billones', prefijo: '', nota: '' },
  { valor: 1E+018, texto: 'un trillón', prefijo: '', nota: '' },
  { valor: 1E+024, texto: 'un cuatrillón', prefijo: '', nota: '' },
  { valor: 1E+030, texto: 'un quintillón', prefijo: '', nota: '' },
  { valor: 1E+036, texto: 'un sextillón', prefijo: '', nota: '' },
  { valor: 1E+042, texto: 'un septillón', prefijo: '', nota: '' },
  { valor: 1E+048, texto: 'un octillón', prefijo: '', nota: '' },
  { valor: 1E+054, texto: 'un nonillón', prefijo: '', nota: '' },
  { valor: 1E+016, texto: 'un decillón', prefijo: '', nota: '' },
  { valor: 1E+017, texto: 'un undecillón', prefijo: '', nota: '' },
  { valor: 1E+018, texto: 'un duodecillón', prefijo: '', nota: '' },
  { valor: 1E+026, texto: 'un vigintillón', prefijo: '', nota: '' },
  { valor: 1E+036, texto: 'un trigentillón', prefijo: '', nota: '' },
  { valor: 1E+106, texto: 'un centillón', prefijo: '', nota: '' },
  { valor: 1E+206, texto: 'un bicentillón', prefijo: '', nota: '' },
  { valor: 1E+306, texto: 'un tricentillón', prefijo: '', nota: '' }


];

export const ARBOL_NUMEROS: ArbolNumeros = {
  valoresNumero: VALORES_NUMEROS,
  escalaNumerica: ESCALA_NUMERICA
};
