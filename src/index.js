const express = require("express");
const app = express();

const apiRoutes = require("./routes");

const PORT = 3000;

// global middleware
app.use(express.json());

// mount master router
app.use("/api/v1", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});