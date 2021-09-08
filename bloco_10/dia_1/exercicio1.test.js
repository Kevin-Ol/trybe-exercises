const { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz, obj1, obj2, obj3 } = require("./exercicio1");
const { describe, test, expect, toThrow, toThrowError } = require('@jest/globals')

describe('Testa função sum', () => {
    test('Testa 4 + 5 = 9', () => {
        expect(sum(4, 5)).toBe(9)
    });

    test('Testa 0 + 0 = 0', () => {
        expect(sum(0, 0)).toBe(0)
    });

    test('Lança erro com 4 e "5"', () => {
        expect(() => sum(4, '5')).toThrow()
    });

    test('Lança erro com 4 e "5"', () => {
        expect(() => sum(4, '5')).toThrowError(new Error("parameters must be numbers"))
    });
});

describe('Testa função myRemove', () => {
    test('Retorna [1, 2, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    });

    test('Não retorna [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    });

    test('Não altera array caso não seja passado parâmetro', () => {
        expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
    });

    test('Retorna [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    });
});

describe('Testa função myRemoveWithoutCopy', () => {
    test('Retorna [1, 2, 4]', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    });

    test('Não retorna [1, 2, 3, 4]', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    });

    test('Não altera array caso não seja passado parâmetro', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
    });

    test('Retorna [1, 2, 3, 4]', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    });
});

describe('Testa função myFizzBuzz', () => {
    test('Retorna fizzbuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    });

    test('Retorna fizz', () => {
        expect(myFizzBuzz(9)).toBe('fizz')
    });

    test('Retorna buzz', () => {
        expect(myFizzBuzz(10)).toBe('buzz')
    });

    test('Retorna o próprio número', () => {
        expect(myFizzBuzz(17)).toBe(17)
    });

    test('Retorna false', () => {
        expect(myFizzBuzz('20')).toBe(false)
    });
});

describe('Testa se objetos são iguais', () => {
    test('obj1 = obj2', () => {
        expect(obj1).toEqual(obj2)
    });

    test('obj1 != obj3', () => {
        expect(obj1).not.toEqual(obj3)
    });

    test('obj2 != obj3', () => {
        expect(obj2).not.toEqual(obj3)
    });
});