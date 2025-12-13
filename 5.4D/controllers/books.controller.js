const service = require("../services/books.service");


async function getAllBooks(req, res) {
const books = await service.getAllBooks();
res.json(books);
}


async function getBookById(req, res) {
const book = await service.getBookById(req.params.id);
if (!book) return res.status(404).json({ message: "Book not found" });
res.json(book);
}


async function createBook(req, res) {
try {
const created = await service.createBook(req.body);
res.status(201).json(created);
} catch (err) {
if (err.code === 11000) return res.status(409).json({ message: "Duplicate key" });
res.status(err.status || 400).json({ message: err.message || err });
}
}


async function updateBook(req, res) {
try {
const updated = await service.updateBook(req.params.id, req.body);
if (!updated) return res.status(404).json({ message: "Book not found" });
res.status(200).json(updated);
} catch (err) {
res.status(err.status || 400).json({ message: err.message || err });
}
}


module.exports = {
getAllBooks,
getBookById,
createBook,
updateBook
};