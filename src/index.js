const express = require("express");
const app = express();

const postsRouter = require("./routes/posts.routes");

const PORT = 3000;

// mount router
app.use("/api/v1/posts", postsRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});