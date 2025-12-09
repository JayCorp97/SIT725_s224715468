const express = require("express");
const mongoose = require("mongoose");
const booksRoutes = require("./routes/books.routes");

const app = express();

// HARD-CODED MONGODB URI (as required)
mongoose
  .connect("mongodb://localhost:27017/booksdb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB Error:", err));

app.use(express.static("public"));
app.use(booksRoutes);

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
