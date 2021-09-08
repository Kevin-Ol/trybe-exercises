const bonus = require('./bonus');
const fetch = require('node-fetch');

jest.mock('node-fetch')

test('testa requisição à API async', async () => {
    const testJoke = {
        'id': '7h3oGtrOfxc',
        'joke': 'Whiteboards ... are remarkable.',
        'status': 200
    }

    fetch.mockImplementation( async () => {
        return {
            json: () => {
                return testJoke;
            },
        };
    });
    
    const joke = await bonus.fetchJoke()
    expect(joke).toBe('Whiteboards ... are remarkable.')
});

test('testa requisição à API', () => {
    const testJoke = {
        'id': '7h3oGtrOfxc',
        'joke': 'Whiteboards ... are remarkable.',
        'status': 200
    };

    fetch.mockImplementation(() => {
        return Promise.resolve({
            json: () => Promise.resolve(testJoke)
        });
    });

   return expect(bonus.fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
});
