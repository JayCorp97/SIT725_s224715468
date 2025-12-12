const express = require("express");
const router = express.Router();
const controller = require("../controllers/books.controller");

router.get("/api/books", controller.getAllBooks);
router.get("/api/books/:id", controller.getBookById);

// Required route — returns 204 No Content
router.get("/api/integrity-check42", (req, res) => res.status(204).send());

module.exports = router;