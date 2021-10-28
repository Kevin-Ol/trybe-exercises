const { posts } = require('../data/posts')

exports.singlePost = (req, res, next) => {
  const { id } = req.params;

  if(!id) {
    return res.status(404).json({ "message": "post not found" });
  }

  const post = posts.find((post) => post.id === parseInt(id));

  if(!post) {
    return res.status(404).json({ "message": "post not found" });
  }

  return res.status(200).json(post);
};
