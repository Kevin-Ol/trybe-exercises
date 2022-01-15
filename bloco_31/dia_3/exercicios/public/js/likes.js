const socket = window.io();

const likeBtn = document.querySelector('#likeIcon');
const likesEl = document.querySelector('#currentLikes');

likeBtn.addEventListener('click', () => {
  socket.emit('likePost', Number(likesEl.innerHTML));
});

socket.on('updateLikes', (likes) => likesEl.innerHTML = likes)

const starBtn = document.querySelector('#starIcon');
const starsEl = document.querySelector('#currentStars');

starBtn.addEventListener('click', () => {
  starsEl.innerHTML = Number(starsEl.innerHTML) + 1
  socket.emit('starPost', Number(starsEl.innerHTML));
});

socket.on('updateStars', (stars) => starsEl.innerHTML = stars)
