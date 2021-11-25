const express = require('express');
const loginController = require('./controllers/login')
const userController = require('./controllers/user')
const secretController = require('./controllers/top-secret')
const authMiddleware = require('./controllers/auth')
const signUpMiddleware = require('./controllers/signUp')

const app = express();

app.use(express.json());

app.post('/login', loginController);
app.post('/signup', signUpMiddleware);
app.get('/users/me', authMiddleware, userController);
app.get('/top-secret', authMiddleware, secretController);

app.listen(3000, () => console.log('listening on port 3000'));
