const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const middlewares = require('../middlewares')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiRoutes = express.Router();
apiRoutes.get('/api/posts', routes.getPosts);
apiRoutes.post('/api/users', routes.createUsers);
apiRoutes.post('/api/login', routes.login);
apiRoutes.get('/api/users/:id', middlewares.jwtAuth, routes.getUserById);

app.use(apiRoutes);

module.exports = app;
