const mongoose = require("mongoose");
const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    status: {
      type: String,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "register",
      required: true,
    },
  },
  {
    versionkey: false,
    timestamps: true,
  }
);

const Book = new mongoose.model("book", bookSchema);
module.exports = Book;
