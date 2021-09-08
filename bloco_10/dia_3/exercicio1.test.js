const exercicio1 = require('./exercicio1')

test('Testa função upTo100 com valor 10', () => {
    exercicio1.upTo100 = jest.fn()
        .mockReturnValue(10);

    expect(exercicio1.upTo100()).toBe(10);
    expect(exercicio1.upTo100).toHaveBeenCalled();
    expect(exercicio1.upTo100).toHaveBeenCalledTimes(1);
});

test('Testa função upTo100 com divisão', () => {
    exercicio1.upTo100 = jest.fn()
        .mockImplementation((num1, num2) => num1 / num2);

    expect(exercicio1.upTo100(10, 2)).toBe(5);
    expect(exercicio1.upTo100).toHaveBeenCalled();
    expect(exercicio1.upTo100).toHaveBeenCalledTimes(1);
});

test('Testa função upTo100 com multiplicação e com o dobro', () => {
    exercicio1.upTo100 = jest.fn()
        .mockImplementation((num1, num2, num3) => num1 * num2 * num3);

    expect(exercicio1.upTo100(10, 2, 2)).toBe(40);
    expect(exercicio1.upTo100).toHaveBeenCalled();
    expect(exercicio1.upTo100).toHaveBeenCalledTimes(1);

    exercicio1.upTo100.mockClear();
    exercicio1.upTo100 = jest.fn()
        .mockImplementation((num1) => num1 * 2);
    
    expect(exercicio1.upTo100(10)).toBe(20);
    expect(exercicio1.upTo100).toHaveBeenCalled();
    expect(exercicio1.upTo100).toHaveBeenCalledTimes(1);
});