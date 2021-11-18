const sinon = require('sinon');
const { expect } = require('chai');
const MoviesController = require('../../controllers/movieController');
const MoviesService = require('../../services/movieService');
const chai = require("chai");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);
describe('Ao chamar controller getById', () => {
  describe('Quando o id é invalido', () => {
    const request = {};
    const response = {};
    const messageError = {
      error: {
        code: 400,
        message: 'Id inválido'
      }
    }

    before(() => {
      request.params = {
        id: '604cb554311d68f491ba5781a',
      }

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(MoviesService, 'getById').resolves(messageError);
    });

    after(() => {
      MoviesService.getById.restore();
    });

    it('é chamado o método "status" passando o código 400', async() => {
      await MoviesController.getById(request, response);
      const {code} = messageError.error;

      expect(response.status).to.be.calledWith(code);
    });

    it('é chamado json com mensagem Id inválido', async() => {
      await MoviesController.getById(request, response);
      const {message} = messageError.error;

      expect(response.json).to.be.calledWith({ message });
    });
  });

  describe('Quando o filme não existe', () => {
    const request = {};
    const response = {};
    const messageError = {
      error: {
        code: 404,
        message: 'Filme não encontrado'
      }
    }

    before(() => {
      request.params = {
        id: '604cb554311d68f491ba5781',
      }

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(MoviesService, 'getById').resolves(messageError);
    });

    after(() => {
      MoviesService.getById.restore();
    });

    it('é chamado o método "status" passando o código 404', async() => {
      await MoviesController.getById(request, response);
      const {code} = messageError.error;

      expect(response.status).to.be.calledWith(code);
    });

    it('é chamado json com mensagem Filme não encontrado', async() => {
      await MoviesController.getById(request, response);
      const {message} = messageError.error;
      
      expect(response.json).to.be.calledWith({ message });
    });
  });

  describe('Quando não existe', () => {
    const request = {};
    const response = {};
    const movie = {
      id: '604cb554311d68f491ba5781',
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    }; 

    before(() => {
      request.params = {
        id: '604cb554311d68f491ba5781',
      }

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(MoviesService, 'getById').resolves(movie);
    });

    after(() => {
      MoviesService.getById.restore();
    });

    it('é chamado o método "status" passando o código 200', async() => {
      await MoviesController.getById(request, response);

      expect(response.status).to.be.calledWith(200);
    });

    it('é chamado json contendo o filme', async() => {
      await MoviesController.getById(request, response);
      
      expect(response.json).to.be.calledWith({movie});
    });
  });
});
