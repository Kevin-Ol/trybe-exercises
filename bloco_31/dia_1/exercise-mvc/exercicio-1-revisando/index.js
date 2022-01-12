const express = require('express'); 
const jokesController= require('./controllers/jokes');

const app = express();

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/', jokesController.listJokes)

app.listen(3000, () => console.log('listening on port 3000'));
