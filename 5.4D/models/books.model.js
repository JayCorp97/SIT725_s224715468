const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, "Id is required"],
      minlength: [2, "Id too short"],
      maxlength: [100, "Id too long"],
      trim: true,
      unique: true
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [2, "Title too short"],
      maxlength: [100, "Title too long"],
      trim: true
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      minlength: [2, "Author name too short"],
      maxlength: [60, "Author name too long"],
      trim: true
    },
    year: {
      type: Number,
      required: true,
      min: [1450, "Year too early"],
      max: [new Date().getFullYear(), "Year in future"]
    },
    genre: {
      type: String,
      required: true,
      enum: {
        values: [
          "Fiction",
          "Non-Fiction",
          "Science Fiction",
          "Classic",
          "Historical Fiction",
          "Fantasy",
          "Technology"
        ],
        message: "Invalid genre"
      }
    },
    summary: {
      type: String,
      required: true,
      maxlength: [500, "Summary too long"]
    },
    price: {
      type: mongoose.Types.Decimal128,
      required: [true, "Price is required"],
      validate: {
        validator: v => parseFloat(v.toString()) > 0,
        message: "Price must be greater than 0"
      }
    }
  },
  { strict: true }
);

module.exports = mongoose.model("Book", bookSchema);
