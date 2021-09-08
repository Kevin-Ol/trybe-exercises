const exercicio4 = require('./exercicio4')
jest.mock('./exercicio4')

test('retorna string em caixa baixa', () => {
    exercicio4.upperCase.mockImplementation((str) => str.toLowerCase());

    expect(exercicio4.upperCase('TESTE')).toBe('teste');
    expect(exercicio4.upperCase).toHaveBeenCalled();
    expect(exercicio4.upperCase).toHaveBeenCalledTimes(1);
});

test('retorna última letra', () => {
    exercicio4.firstLetter.mockImplementation((str) => str[str.length - 1]);

    expect(exercicio4.firstLetter('TESTE')).toBe('E');
    expect(exercicio4.firstLetter).toHaveBeenCalled();
    expect(exercicio4.firstLetter).toHaveBeenCalledTimes(1);
});

test('concatena 3 strings', () => {
    exercicio4.joinStrings.mockImplementation((str1, str2, str3) => str1 + str2 + str3);

    expect(exercicio4.joinStrings('TE','S', 'TE')).toBe('TESTE');
    expect(exercicio4.joinStrings).toHaveBeenCalled();
    expect(exercicio4.joinStrings).toHaveBeenCalledTimes(1);
});