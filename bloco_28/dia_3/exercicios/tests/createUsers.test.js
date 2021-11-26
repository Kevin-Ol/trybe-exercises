const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../src/api/app');

const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /api/users', () => {
    describe('quando é criado com sucesso', () => {
        let response = {};
        const DBServer = new MongoMemoryServer();

        before(async () => {
            const URLMock = await DBServer.getUri();
            const connectionMock = await MongoClient.connect(URLMock,
                { useNewUrlParser: true, useUnifiedTopology: true }
            );

            sinon.stub(MongoClient, 'connect')
                .resolves(connectionMock);
            
            response = await chai.request(server)
                .post('/api/users')
                .send({
                    username: 'jane',
                    password: 'senha123'
                });
        });

        after(async () => {
            MongoClient.connect.restore();
            await DBServer.stop();
        })

        it('retorna o código de status 201', () => {
            expect(response).to.have.status(201);
        });

        it('retorna um objeto', () => {
            expect(response.body).to.be.a('object');
        });

        it('o objeto possui a propriedade "message"', () => {
            expect(response.body)
              .to.have.property('message');
        });

        it('a propriedade "message" possui o texto "Novo usuário criado com sucesso"', 
          () => {
            expect(response.body.message)
              .to.be.equal('Novo usuário criado com sucesso');
          }
        );
    });
});

describe('GET /api/users/:userId', () => {
  describe('Quando não é enviado token de autorização', () => {
		let response = {};

		before(async () => {
			response = await chai.request(server)
				.get('/api/users/1')
		})

		it('Retorna status 400', () => {
			expect(response).to.have.status(400);
		})

		it('Retorna mensagem de erro "Token não encontrado ou informado"', () => {
			const expectedMessage = 'Token não encontrado ou informado';
			expect(response.body).to.be.equal(expectedMessage);
		})
	})

	describe('Quando o id enviado no token é diferente da rota acessada', () => {
		let response = {};
		const DBServer = new MongoMemoryServer();

		before(async () => {
				const EXPECTED_ID = 'sdasd124147'
				const URLMock = await DBServer.getUri();
				const connectionMock = await MongoClient.connect(URLMock,
						{ useNewUrlParser: true, useUnifiedTopology: true }
				);

				sinon.stub(MongoClient, 'connect')
						.resolves(connectionMock);

				await connectionMock.db('jwt_exercise').collection('users').insertOne({
					_id: EXPECTED_ID,
					username: 'jane',
					password: 'senha123'
				})

				const token = await chai.request(server)
					.post('/api/login')
					.send({
						username: 'jane',
						password: 'senha123'
					})
					.then((res) => res.body.token)
				
				const WRONG_ID = '32151adasda'
				response = await chai.request(server)
						.get(`/api/users/${WRONG_ID}`)
						.set('authorization', token);
		});

		after(async () => {
				MongoClient.connect.restore();
				await DBServer.stop();
		})

			it('Retorna status 401', () => {
					expect(response).to.have.status(401);
			})

			it('Retorna mensagem de erro "Acesso negado"', () => {
					const expectedMessage = 'Acesso negado';
					expect(response.body).to.be.equal(expectedMessage);
			})
	})

	describe('Quando o id no token é o mesmo da rota acessada', () => {
		let response = {};
		const DBServer = new MongoMemoryServer();

		before(async () => {
				const EXPECTED_ID = 'sdasd124147'
				const URLMock = await DBServer.getUri();
				const connectionMock = await MongoClient.connect(URLMock,
						{ useNewUrlParser: true, useUnifiedTopology: true }
				);

				sinon.stub(MongoClient, 'connect')
						.resolves(connectionMock);

				await connectionMock.db('jwt_exercise').collection('users').insertOne({
					_id: EXPECTED_ID,
					username: 'jane',
					password: 'senha123'
				})

				const token = await chai.request(server)
					.post('/api/login')
					.send({
						username: 'jane',
						password: 'senha123'
					})
					.then((res) => res.body.token)
				
				response = await chai.request(server)
						.get(`/api/users/${EXPECTED_ID}`)
						.set('authorization', token);
		});

		after(async () => {
				MongoClient.connect.restore();
				await DBServer.stop();
		})

			it('Retorna status 200', () => {
					expect(response).to.have.status(200);
			})

			it('Retorna dados do usuário', () => {
					const expectedUser = {
						_id: 'sdasd124147',
						username: 'jane',
						password: 'senha123'
					}
					expect(response.body).to.be.deep.equal(expectedUser);
			})
	})
});
