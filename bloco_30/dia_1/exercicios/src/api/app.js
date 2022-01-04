const express = require('express');
const plantsControllers = require('../controllers')

const app = express();

app.use(express.json());

app.get('/plants/:id', plantsControllers.getById);
app.get('/plants', plantsControllers.getAll);
app.delete('/plants/:id', plantsControllers.removeById);
app.post('/plants/:id', plantsControllers.overwritePlant);
app.post('/plants', plantsControllers.createOne);
app.get('/sunny/:id', plantsControllers.getSunnyById);

module.exports = app;
