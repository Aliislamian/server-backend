const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  product: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
});

const ProductModel = mongoose.model("products", ProductSchema);
module.exports = ProductModel;
