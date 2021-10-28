const { register } = require('./register');
const { login } = require('./login');
const { price } = require('./price');
const { singlePost } = require('./singlePost');
const { allPosts } = require('./allPosts');
const { notFound } = require('./notFound');
const { createTeam } = require('./createTeam');
const { allTeams } = require('./allTeams');

module.exports = {
  register,
  login,
  price,
  singlePost,
  allPosts,
  notFound,
  createTeam,
  allTeams,
}
