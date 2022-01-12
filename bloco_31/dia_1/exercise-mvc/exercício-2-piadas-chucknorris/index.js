const express = require('express'); 
const categoriesController= require('./controllers/categories');
const jokesController= require('./controllers/jokes');

const app = express();

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/', categoriesController.redirectCategories);
app.get('/categories', categoriesController.getCategories);

app.get('/jokes', jokesController.getRandomJoke);
app.get('/jokes/:category', jokesController.getCategoryJoke);

app.listen(3000, () => console.log('listening on port 3000'));
