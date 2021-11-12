const express = require('express');
const bodyParser = require('body-parser');
const { createUser,  } = require('./middlewares/createUser');
const { getUsers } = require('./middlewares/getUsers');
const { getUserById } = require('./middlewares/getUserById');
const { editUser } = require('./middlewares/editUser');

const app = express();

app.use(bodyParser.json());

app.post('/users', createUser) 

app.get('/users', getUsers) 

app.get('/users/:id', getUserById) 

app.put('/users/:id', editUser) 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
 console.log(`Running on port ${PORT}`);
});
