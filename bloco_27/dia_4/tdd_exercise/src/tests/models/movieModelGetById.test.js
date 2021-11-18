const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient, ObjectId } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Busca filme por id', () => {
  let connectionMock;
  const DBServer = new MongoMemoryServer();

  before(async () => {
    const URLMock = await DBServer.getUri();
    const client = await MongoClient.connect(URLMock, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connectionMock = client.db('movies');

    sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  });

  after(async () => {
    mongoConnection.getConnection.restore();
    await DBServer.stop();
  });

  describe('Quando o filme não existe', () => {
    it('Retorna null', async() => {
      const movie = await MoviesModel.getById('604cb554311d68f491ba5781');
      
      expect(movie).to.be.null;
    });
  });

  describe('Quando o filme existe', () =>{
    const expectedMovie = {
      _id: new ObjectId('604cb554311d68f491ba5781'),
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    }; 

    before(async () => {
      await connectionMock.collection('movies').insertOne({ ...expectedMovie });
    });

    after(async () => {
      await connectionMock.collection('movies').drop();
    })

    it('Retorna filme com atributos "id", "title", "directedBy", "releaseYear"', async () => {
      const { _id: id, ...rest } = expectedMovie;

      const expectedFormatedMovie = { id, ...rest };
      const movie = await MoviesModel.getById('604cb554311d68f491ba5781');

      expect(movie).to.be.deep.equal(expectedFormatedMovie);
    })
  })
});
