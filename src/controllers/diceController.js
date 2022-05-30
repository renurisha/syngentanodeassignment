const express = require("express");
const Dice = require("../models/productModel");
const User = require("../models/register");
const Cart = require("../models/cart");
const router = express.Router();
router.get("", async (req, res) => {
  const dices = await Dice.find();
  res.status(201).send(dices);
});
router.post("", async (req, res) => {
  try {
    const dice = new Dice(req.body);
    const { restaurant_name, location, category, user_id } = dice;

    const user = await User.findById(user_id);
    console.log("user...", user);
    if (user) {
      /* const newdice = {
        restaurant_name: dice.restaurant_name,
        location: dice.location,
        category: dice.location,
      };*/
      const createddice = await dice.save();

      console.log("dice", createddice);
      res.status(201).send(createddice);
    } else {
      res.status(401).send("you are not authenticated user to cretae dices");
    }
  } catch (e) {
    res.status(401).send(e);
  }
});
router.get("/locationcategory", async (req, res) => {
  try {
    const dices = await Dice.find({
      location: req.body.location,
      restaurant_name: req.body.restaurant_name,
    });
    if (dices) {
      res.status(201).send(dices);
    } else {
      res.status(401).send("not data fount");
    }
  } catch (e) {
    res.status(401).send(e);
  }
});
//cart......
router.post("/cart", async (req, res) => {
  try {
    const dice = new Cart(req.body);
    const { restaurant_name, location, category } = dice;

    /* const newdice = {
      restaurant_name: restaurant_name,
      location: location,
      category: category,
      order_status: "",
    };*/
    const createdorder = await dice.save();

    console.log("dice", createdorder);
    res.status(201).send(createdorder);
  } catch (e) {
    res.status(401).send(e);
  }
});

router.get("/cart/:status", async (req, res) => {
  const findstatus = await Cart.find({ order_status: req.params.status });

  console.log(findstatus);

  res.send(findstatus);
});
router.patch("/cart/status/:id", async (req, res) => {
  const data = await Cart.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  console.log("patch", data);
  res.send(data);
});

module.exports = router;
