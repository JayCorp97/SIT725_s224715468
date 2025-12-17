const express = require("express");
const mongoose = require("mongoose");
const booksRoutes = require("./routes/books.routes");


const app = express();


mongoose.connect("mongodb://localhost:27017/booksdb")
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));


app.use(express.json());
app.use(express.static("public"));
app.use(booksRoutes);


app.listen(3000, () => console.log("Server running on port 3000.."));