const Book = require("../models/books.model");
const mongoose = require("mongoose");

const ALLOWED_FIELDS = ["id", "title", "author", "year", "genre", "summary", "price"];

function filterFields(payload) {
  const clean = {};
  for (const key of ALLOWED_FIELDS) {
    if (payload[key] !== undefined) clean[key] = payload[key];
  }
  return clean;
}

async function getAllBooks() {
  return await Book.find({}).lean();
}

async function getBookById(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) return null;
  return await Book.findById(id).lean();
}

async function createBook(payload) {
  if (Object.keys(payload).some(k => !ALLOWED_FIELDS.includes(k))) {
    throw { status: 400, message: "Unexpected field detected" };
  }

  const book = new Book(filterFields(payload));
  return await book.save();
}

async function updateBook(id, payload) {
  if (!mongoose.Types.ObjectId.isValid(id)) return null;

  if ("id" in payload) {
    throw { status: 400, message: "id is immutable" };
  }

  if (Object.keys(payload).some(k => !ALLOWED_FIELDS.includes(k))) {
    throw { status: 400, message: "Unexpected field detected" };
  }

  return await Book.findByIdAndUpdate(
    id,
    filterFields(payload),
    { new: true, runValidators: true }
  );
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook
};
