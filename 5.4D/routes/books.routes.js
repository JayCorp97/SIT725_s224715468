const express = require("express");
const router = express.Router();
const controller = require("../controllers/books.controller");


router.get("/api/books", controller.getAllBooks);
router.get("/api/books/:id", controller.getBookById);
router.post("/api/books", controller.createBook);
router.put("/api/books/:id", controller.updateBook);


router.get("/api/integrity-check42", (req, res) => res.status(204).send());


module.exports = router;