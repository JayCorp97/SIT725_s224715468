const express = require("express");
const app = express();
const booksRoutes = require("./routes/books.routes");

app.use(express.static("public"));
app.use(booksRoutes);

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
