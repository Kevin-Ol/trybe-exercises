const express = require('express');
const { cepRoutes } = require('./routes/cep')
const { error } = require('./middlewares/error');
const app = express();

app.get('/ping', (req, res) => res.status(200).json({ "message": "pong!" }));

app.use('/cep', cepRoutes);

app.use(error)

app.listen(3000, () => console.log('listening on port 3000'));
