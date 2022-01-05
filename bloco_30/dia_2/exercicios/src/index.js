const express = require('express');
const booksControllers = require('./controllers');

const app = express();

app.use(express.json());

app.get('/books', booksControllers.findAll);
app.post('/book', booksControllers.insertOne);
app.get('/book/:id', booksControllers.findById);
app.put('/book/:id', booksControllers.updateOne);
app.delete('/book/:id', booksControllers.deleteOne);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`running on port ${PORT}`));
