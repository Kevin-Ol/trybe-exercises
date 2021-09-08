const math = require('./math')

// test('mock função subtrair', () => {
//     math.subtrair = jest.fn();

//     math.subtrair();
//     expect(math.subtrair).toHaveBeenCalled();
// });

test('mock função multiplicar', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);

    expect(math.multiplicar()).toBe(10);
    expect(math.multiplicar).toHaveBeenCalled();
});

test('mock função somar', () => {
    math.somar = jest.fn().mockImplementation((a, b) => a + b)

    expect(math.somar(5, 5)).toBe(10);
    expect(math.somar).toHaveBeenCalledWith(5, 5);
    expect(math.somar).toHaveBeenCalled();
});

test('mock função dividir', () => {
    math.dividir = jest.fn()
        .mockReturnValue(15)
        .mockReturnValueOnce(2)
        .mockReturnValueOnce(5)

    expect(math.dividir()).toBe(2);
    expect(math.dividir).toHaveBeenCalled();
    expect(math.dividir).toHaveBeenCalledTimes(1);

    expect(math.dividir()).toBe(5);
    expect(math.dividir).toHaveBeenCalledTimes(2);

    expect(math.dividir()).toBe(15);
    expect(math.dividir).toHaveBeenCalledTimes(3);
});

test('mock função subtrair voltando ao original', () => {
    math.subtrair = jest.spyOn(math, 'subtrair')
        .mockReturnValue(20);

    expect(math.subtrair()).toBe(20);
    expect(math.subtrair).toHaveBeenCalled();
    expect(math.subtrair).toHaveBeenCalledTimes(1);

    math.subtrair.mockRestore();

    expect(math.subtrair(4, 2)).toBe(2);
});