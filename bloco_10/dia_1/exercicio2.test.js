const { encode, decode } = require('./exercicio2');
const { describe, test } = require('@jest/globals');

describe('Verifica funções encode e decode', () => {
    test('encode é uma função', () => {
        expect(typeof encode).toBe('function');
    });

    test('decode é uma função', () => {
        expect(typeof decode).toBe('function');
    });

    test('aeiou => 12345', () => {
        expect(encode('aeiou')).toBe('12345');
    });

    test('12345 => aeiou', () => {
        expect(decode('12345')).toBe('aeiou');
    });

    test('Retorna consoantes', () => {
        expect(encode('qwrty')).toBe('qwrty');
    });

    test('Retorna números caso sejam 6, 7, 8, 9 ou 0', () => {
        expect(decode('67890')).toBe('67890');
    });

    test('Função decode não altera tamanho da strings', () => {
        expect(decode('12345')).toHaveLength(5);
    });

    test('Função encode não altera tamanho da strings', () => {
        expect(encode('aeiou')).toHaveLength(5);
    });
});