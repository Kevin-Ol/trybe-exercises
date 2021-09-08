const searchEmployee = require('./bonus');

describe('Testes função searchEmployee', () => {
    test('Verifica se searchEmployee é uma função', () => {
        expect(typeof searchEmployee).toBe('function');
    });

    test('Verifica se "Ana" é firstName do id 8579-6', () => {
        expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    });

    test('Verifica se "Jobs" é lastName do id 5569-4', () => {
        expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
    });

    test('Verifica se [Context API, RTL, Bootstrap] é specialities do id 4456-4', () => {
        expect(searchEmployee('4456-4', 'specialities')).toEqual(['Context API', 'RTL', 'Bootstrap']);
    });

    test('Verifica se id informado não consta no banco de dados', () => {
        expect(searchEmployee('4499-9', 'specialities')).toBe('ID não identificada');
    });

    test('Verifica se informação informada não consta no banco de dados', () => {
        expect(searchEmployee('4456-4', 'age')).toEqual('Informação indisponível');
    });
})