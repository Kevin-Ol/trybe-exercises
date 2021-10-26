const express = require('express');
const fs = require('fs/promises');
const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

const app = express();
app.use(express.json());

// Crie uma rota POST /signup
// A rota deve receber, no body da requisição, os campos email , password , firstName e phone .
// Caso algum dos campos não esteja preenchido, a response deve possuir status 401 - Unauthorized e o JSON { message: 'missing fields' } .
// Caso todos os parâmetros estejam presentes, a rota deve gerar um token aleatório válido, e a resposta deve conter o status 200 - OK , e o JSON { token: '<token-aleatorio>' } .

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if (!email || !password || !firstName || !phone) {
    return res.status(401).json({ message: 'missing fields' });
  }
  return res.status(200).json({ token: generateToken() });
});

// Adicione autenticação a todos os endpoints.
// O token deve ser enviado através do header Authorization .
// O token deve ter exatamente 16 caracteres.
// Caso o token seja inválido ou inexistente, a resposta deve possuir o status 401 - Unauthorized e o JSON { message: 'Token inválido!' } .

function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token || token.length !== 16) {
    return res.status(401).json({ message: 'Token inválido!' });
  }
  next();
}

app.use(auth);

// Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }
app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong' });
});


// Crie uma rota POST /hello
// Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .
app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(201).json({ message: `Hello, ${name}` });
});

// Crie uma rota POST /greetings
// Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
// Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
// Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .

app.post('/greeting', (req, res) => {
  const { name, age } = req.body;

  if (age > 17) {
    return res.status(200).json({ message: `Hello, ${name}`});
  }

  return res.status(401).json({ message: "Unauthorized" })
});

// Crie uma rota PUT /users/:name/:age .
// Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" } .

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade`});
});

// Crie um endpoint GET /simpsons
// O endpoint deve retornar um array com todos os simpsons.
app.get('/simpsons' , async (req, res) => {
  try {
    const file = await fs.readFile('simpsons.json', 'utf8');
    const characters = JSON.parse(file);
    return res.status(200).send(characters);
  }catch(err) {
    return res.status(500).send(err.message)
  }
});

// Crie um endpoint GET /simpsons/:id
// O endpoint deve retornar o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found .
app.get('/simpsons/:id' , async (req, res) => {
  try {
    const file = await fs.readFile('simpsons.json', 'utf8');
    const characters = JSON.parse(file);
    const { id } = req.params
    const character = characters.find((character) => parseInt(character.id) === parseInt(id));
    if (!character) {
      return res.status(404).json({ message: 'simpson not found' })
    }
    return res.status(200).send(character);
  }catch(err) {
    return res.status(500).send(err.message)
  }
});

// Crie um endpoint POST /simpsons .
// Este endpoint deve cadastrar novos personagens.
// O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } .
// Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict .
// Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content . Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end(); .
app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;

  try {
    const file = await fs.readFile('simpsons.json', 'utf8');
    const characters = JSON.parse(file);
    const alreadyCreated = characters.some((character) => parseInt(character.id) === parseInt(id));
    if (alreadyCreated) {
      return res.status(409).json({ message: 'id already exists' })
    }
    characters.push({id, name});
    console.log(characters)
    await fs.writeFile('simpsons.json', JSON.stringify(characters))
    return res.status(204).end();
  }catch(err) {
    return res.status(500).send(err.message)
  }
});

app.listen(3000, () => console.log('App listening on port 3000'));
