const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
//console.log("port", port);
require("./db/connect");
const userController = require("./controllers/userController.js");
const diceController = require("./controllers/diceController.js");
const bookController = require("./controllers/bookController");
const app = express();
app.use(express.json());
app.use("/register", userController);
app.use("/dice", diceController);
app.use("/book", bookController);
app.use(express.urlencoded({ extended: false }));
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
