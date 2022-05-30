const express = require("express");
const User = require("../models/register");
const router = express.Router();
router.get("", async (req, res) => {
  const users = await User.find();
  res.status(201).send(users);
});
router.post("", async (req, res) => {
  try {
    const user = new User(req.body);
    const { name, email, password } = user;

    const createduser = await user.save();
    // jwt.sign({ createduser }, jwtkey, { expiresIn: "300" }, (err, token) => {
    //   res.status(201).json({ token });
    // });
    console.log("user", createduser);
    res.status(201).send(createduser);
  } catch (e) {
    res.status(401).send(e);
  }
});

module.exports = router;
