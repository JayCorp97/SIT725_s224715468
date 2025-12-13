const Book = require("../models/books.model");

async function getAllBooks() {
  return Book.find({});
}

async function getBookById(id) {
  return Book.findById(id);
}

module.exports = {
  getAllBooks,
  getBookById
};
