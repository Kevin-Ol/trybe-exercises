require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'uploads')));
app.use(express.static(path.resolve(__dirname, 'profilePics')));

app.get('/ping', controllers.ping);

app.post('/upload', middlewares.upload.single('file'), controllers.uploads);

app.post('/multiple', middlewares.uploadMultiple.array('files'), controllers.multiple);

app.post('/profile', middlewares.uploadProfile.single('profilePic'), controllers.profile);

app.get('/profile/:id', controllers.getProfile);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
