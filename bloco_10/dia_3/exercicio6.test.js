const dog = require('./exercicio6')

test('Testa se requisição funciona', async () => {
    const apiURL = jest.spyOn( dog, "fetchDog")
        .mockResolvedValue('requisição realizada com sucesso');

    expect(apiURL()).resolves.toBe('requisição realizada com sucesso');
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    apiURL.mockRestore();
});

test('Testa se requisição falha', async () => {
    const apiURL = jest.spyOn( dog, "fetchDog")
        .mockRejectedValue('requisição falhou');

    expect(apiURL()).rejects.toBe('requisição falhou');
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    apiURL.mockRestore();
});

test('Testa formato da requisição', async () => {
    const expectedReturn = [
        {
            "message": "https://images.dog.ceo/breeds/terrier-australian/n02096294_4435.jpg",
            "status": "success"
        }
    ]
    const apiURL = jest.spyOn( dog, "fetchDog")
        .mockResolvedValue(expectedReturn);

    expect(apiURL()).resolves.toBe(expectedReturn);
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    apiURL.mockRestore();
});