const express = require("express");
const router = express.Router();
const bookController = require("../controllers/books.controller");

router.get("/api/books", bookController.getAllBooks);
router.get("/api/books/:id", bookController.getBookById);

module.exports = router;
