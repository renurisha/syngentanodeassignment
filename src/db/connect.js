const mongoose = require("mongoose");

const DB = process.env.DATABASE;
console.log("db", DB);
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("connection successful..."))
  .catch((e) => {
    console.log(e);
  });
