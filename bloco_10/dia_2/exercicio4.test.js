const getRepos = require('./exercicio4')

describe('Função getRepos', () => {
    it('Verifica se existe repositório To do List', async () => {
        expect.assertions(1);
        const repos = await getRepos('https://api.github.com/orgs/tryber/repos');
        expect(repos).toContain('sd-01-week4-5-project-todo-list')
    });

    it('Verifica se existe repositório Meme Generator', async () => {
        expect.assertions(1);
        const repos = await getRepos('https://api.github.com/orgs/tryber/repos');
        expect(repos).toContain('sd-01-week4-5-project-meme-generator')
    });
});