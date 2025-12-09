const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: String,
  author: String,
  year: Number,
  genre: String,
  summary: String,
  price: mongoose.Types.Decimal128, // REQUIRED
});

module.exports = mongoose.model("Book", bookSchema);
