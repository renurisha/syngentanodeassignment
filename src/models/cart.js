const mongoose = require("mongoose");
const cartSchema = mongoose.Schema(
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

    order_status: {
      type: String,
    },
    dice_id: {
      type: String,
      required: true,
    },
  },
  {
    versionkey: false,
    timestamps: true,
  }
);

const Cart = new mongoose.model("cart", cartSchema);
module.exports = Cart;
