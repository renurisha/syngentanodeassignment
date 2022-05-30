const mongoose = require("mongoose");
const diceSchema = mongoose.Schema(
  {
    restaurant_name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    category: {
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

const Dice = new mongoose.model("restaurant", diceSchema);
module.exports = Dice;
