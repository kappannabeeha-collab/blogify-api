const getAllPosts = (req, res) => {
  const posts = [
    { id: "1", title: "First Blog Post" },
    { id: "2", title: "Second Blog Post" }
  ];

  res.status(200).json({
    success: true,
    data: posts
  });
};

const getPostById = (req, res) => {
  const postId = req.params.postId;

  const post = {
    id: postId,
    title: "Sample Blog Post"
  };

  res.status(200).json({
    success: true,
    data: post
  });
};

module.exports = {
  getAllPosts,
  getPostById
};