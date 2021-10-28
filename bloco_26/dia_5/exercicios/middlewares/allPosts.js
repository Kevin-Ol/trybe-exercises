// const { posts } = require('../data/posts')
const posts = []

exports.allPosts = (req, res, next) => {
  if (!posts) {
    return res.status(200).json({ "posts": [] });
  }

  return res.status(200).json(posts);
};
