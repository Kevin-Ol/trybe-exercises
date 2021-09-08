const { users, findUserById, getUserName} = require('./exercicio2');

describe('Testando com then e catch', () => {
    it('Retorna Mark', () => {
        expect.assertions(1);
        return getUserName(4)
        .then((result) => {
            expect(result).toBe('Mark');
        });
    });

    it('Retorna Paul', () => {
        expect.assertions(1);
        return getUserName(5)
        .then((result) => {
            expect(result).toBe('Paul');
        });
    });

    it('Retorna objeto com erro', () => {
        expect.assertions(1);
        return getUserName(6)
        .catch((result) => {
            expect(result).toEqual({ error: 'User with 6 not found.' });
        });
    });
});

describe('Testando com async/await', () => {
    it('Retorna Mark', async () => {
        expect.assertions(1);
        const name = await getUserName(4);
        expect(name).toBe('Mark');
    });

    it('Retorna Paul', async () => {
        expect.assertions(1);
        const name = await getUserName(5);
        expect(name).toBe('Paul');
    });

    it('Retorna objeto com erro', async () => {
        expect.assertions(1);
        try {
            await getUserName(6);
        } catch (error) {
            expect(error).toEqual({ error: 'User with 6 not found.' });
        };
    });
});