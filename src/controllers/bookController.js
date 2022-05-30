const express = require("express");
const Book = require("../models/book");
const router = express.Router();
router.get("", async (req, res) => {
  const books = await Book.find();
  res.status(201).send(books);
});
router.post("", async (req, res) => {
  try {
    const book = new Book(req.body);
    const { user_id } = book;

    const user = await User.findById(user_id);
    if (user) {
      const createdbook = await book.save();

      res.status(201).send(createdbook);
    } else {
      res.status(401).send("you are not authenticated user to cretae dices");
    }
  } catch (e) {
    res.status(401).send(e);
  }
});

router.get("/search", async (req, res) => {
  try {
    const search = req.query.search;
    const books = await Book.find({
      title: search,
    });
    if (books) {
      return res.status(201).send(books);
    } else {
      const books = await Book.find({
        author: search,
      });
      if (books) {
        return res.status(201).send(books);
      } else {
        res.status(401).send("not data fount");
      }
    }
  } catch (e) {
    res.status(401).send(e);
  }
});
router.post("/:id", async (req, res) => {
  try {
    const book = Book.findByIdndUpdate(req.params.id, req.body, { new: true });

    const createdbook = await book.save();

    res.status(201).send(createdbook);
  } catch (e) {
    res.status(401).send(e);
  }
});
router.post("/status/:id", async (req, res) => {
  try {
    const book = Book.findById(req.params.id);

    res.status(201).send(book.status);
  } catch (e) {
    res.status(401).send(e);
  }
});

router.get("/category/:category", async (req, res) => {
  try {
    const books = await Book.find({
      category: req.params.category,
    });
    if (books) {
      res.status(201).send(books);
    } else {
      res.status(401).send("not data fount");
    }
  } catch (e) {
    res.status(401).send(e);
  }
});

module.exports = router;
