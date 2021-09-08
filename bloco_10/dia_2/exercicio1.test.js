const uppercase = require('./exercicio1');

test('verifica a palavra testando em uppercase', () => {
    expect(uppercase('testando', (string) => {
        expect(string).toBe('TESTANDO');
    }));
});