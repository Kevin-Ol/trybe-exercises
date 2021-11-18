const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
const MoviesModel = require('../../models/movieModel');

describe('Busca filme por id', () => {
  describe('Quando o id é invalido', () => {
    it('Retorna objeto de erro', async() => {
      const expectedResult = {
        error: {
          code: 400,
          message: 'Id inválido'
        }
      }

      const movie = await MoviesService.getById('604cb554311d68f491ba5781a');
      
      expect(movie).to.be.deep.equal(expectedResult);
    });
  });

  describe('Quando o filme não existe', () =>{
    before(() => {
      sinon.stub(MoviesModel, 'getById').resolves(null);
    });

    after(() => {
      MoviesModel.getById.restore();
    });

    it('Retorna objeto de erro', async () => {
      const expectedResult = {
        error: {
          code: 404,
          message: 'Filme não encontrado'
        }
      }

      const movie = await MoviesService.getById('604cb554311d68f491ba5781');
      
      expect(movie).to.be.deep.equal(expectedResult);
    })
  })

  describe('Quando o filme existe', () =>{
    const expectedMovie = {
      id: '604cb554311d68f491ba5781',
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    }; 

    before(() => {
      sinon.stub(MoviesModel, 'getById').resolves(expectedMovie)
    });

    after(() => {
      MoviesModel.getById.restore();
    });

    it('Retorna filme com atributos "id", "title", "directedBy", "releaseYear"', async () => {
      const movie = await MoviesService.getById('604cb554311d68f491ba5781');
      
      expect(movie).to.be.deep.equal(expectedMovie);
    })
  })
});
