const mongoose = require("mongoose");
const Book = require("./models/book.model");

mongoose
  .connect("mongodb://localhost:27017/booksdb")
  .then(() => console.log("Connected for seeding"))
  .catch((err) => console.log("Error:", err));

async function seed() {
  await Book.deleteMany({}); // clear old data

  await Book.insertMany([
    {
      id: "b1",
      title: "The Three-Body Problem",
      author: "Liu Cixin",
      year: 2008,
      genre: "Science Fiction",
      summary:
        "First novel in Remembrance of Earth's Past trilogy exploring alien contact.",
      price: mongoose.Types.Decimal128.fromString("29.99"),
    },
    {
      id: "b2",
      title: "Jane Eyre",
      author: "Charlotte Bronte",
      year: 1847,
      genre: "Classic",
      summary:
        "An orphaned governess confronts morality, love, and independence.",
      price: mongoose.Types.Decimal128.fromString("19.99"),
    },
    {
      id: "b3",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      genre: "Classic",
      summary:
        "Elizabeth Bennet and Mr. Darcy navigate pride and social expectations.",
      price: mongoose.Types.Decimal128.fromString("14.99"),
    },
    {
      id: "b4",
      title: "The English Patient",
      author: "Michael Ondaatje",
      year: 1992,
      genre: "Historical Fiction",
      summary:
        "Four strangers confront memory and loss in a WWII villa.",
      price: mongoose.Types.Decimal128.fromString("22.50"),
    },
    {
      id: "b5",
      title: "Small Gods",
      author: "Terry Pratchett",
      year: 1992,
      genre: "Fantasy",
      summary:
        "God Om returns as a tortoise; Brutha confronts belief and empire.",
      price: mongoose.Types.Decimal128.fromString("17.80"),
    },
  ]);

  console.log("Seeding complete!");
  process.exit();
}

seed();
