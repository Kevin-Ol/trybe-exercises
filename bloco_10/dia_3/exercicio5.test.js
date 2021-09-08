const exercicio4 = require('./exercicio4')

test('retorna string em caixa baixa e alta com Spy', () => {
    exercicio4.upperCase = jest.spyOn(exercicio4, 'upperCase')
        .mockImplementation((str) => str.toLowerCase());

    expect(exercicio4.upperCase('TESTE')).toBe('teste');
    expect(exercicio4.upperCase).toHaveBeenCalled();
    expect(exercicio4.upperCase).toHaveBeenCalledTimes(1);

    exercicio4.upperCase.mockRestore();
    exercicio4.upperCase = jest.spyOn(exercicio4, 'upperCase')
    expect(exercicio4.upperCase('teste')).toBe('TESTE');
    expect(exercicio4.upperCase).toHaveBeenCalled();
    expect(exercicio4.upperCase).toHaveBeenCalledTimes(1);
});