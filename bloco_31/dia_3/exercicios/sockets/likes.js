module.exports = (io) => io.on('connection', (socket) => {
  socket.on('likePost', (likes) => {
    // socket.emit('updateLikes', likes + 1);
    io.emit('updateLikes', likes + 1);
  });

  socket.on('starPost', (stars) => {
    socket.broadcast.emit('updateStars', stars);
  });
});
