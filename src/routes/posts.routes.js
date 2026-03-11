const express = require("express");
const router = express.Router();

// GET /api/v1/posts
router.get("/", (req, res) => {
  res.send("List of blog posts");
});

module.exports = router;