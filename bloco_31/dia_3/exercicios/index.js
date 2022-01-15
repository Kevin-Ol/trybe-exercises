const express = require('express');

const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

require('./sockets/likes')(io);

http.listen(3000, () => console.log('listening on port 3000'));
