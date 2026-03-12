const postsService = require("../services/posts.service");

const getAllPosts = async (req, res) => {
  const posts = await postsService.getAllPosts();

  res.status(200).json({
    success: true,
    data: posts
  });
};

const getPostById = async (req, res) => {
  const post = await postsService.getPostById(req.params.id);

  res.status(200).json({
    success: true,
    data: post
  });
};

const createPost = async (req, res) => {
  const post = await postsService.createPost(req.body);

  res.status(201).json({
    success: true,
    data: post
  });
};

const updatePost = async (req, res) => {
  const post = await postsService.updatePost(req.params.id, req.body);

  res.status(200).json({
    success: true,
    data: post
  });
};

const deletePost = async (req, res) => {
  await postsService.deletePost(req.params.id);

  res.status(200).json({
    success: true,
    data: null
  });
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};