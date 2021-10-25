const express = require('express');

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const app = express();

app.use(express.json());

app.get('/recipes', function (req, res) {
  recipes.sort((a, b) => (a.name).localeCompare(b.name));

  return res.json(recipes);
});

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price <= parseInt(maxPrice) && r.price >= parseInt(minPrice));

  return res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime});
  res.status(201).json({ message: 'Recipe created successfully!'});
});


app.get('/drinks', (req, res) => {
  drinks.sort((a, b) => (a.name).localeCompare(b.name));

  return res.json(drinks);
});

app.get('/drinks/search', (req, res) => {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((drink) => drink.name.toLowerCase().includes(name.toLowerCase()));

  return res.json(filteredDrinks);
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((drink) => drink.id === parseInt(id))

  if (!drink) return res.status(404).json({ message: 'Drink not found!'});

  return res.json(drink);
});

app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({id, name, price});

  return res.status(201).json({ message: 'Drink created successfully!'});
})

app.listen(3000, () => console.log(`App is runnning on port ${3000}`))
