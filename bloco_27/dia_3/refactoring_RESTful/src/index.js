const express = require('express');
const error = require('./middlewares/error')

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/products', require('./routes/product'));

app.use(error);

app.listen(3000, () => {
  console.log("App listening on port 3001!");
});
