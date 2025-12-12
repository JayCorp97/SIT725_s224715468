const bookService = require("../services/books.service");

async function getAllBooks(req, res) {
  const books = await bookService.getAllBooks();
  res.json(books);
}

async function getBookById(req, res) {
  const id = req.params.id;
  const book = await bookService.getBookById(id);

  if (!book) return res.status(404).json({ message: "Book not found" });

  res.json(book);
}

module.exports = { getAllBooks, getBookById };