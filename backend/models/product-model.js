const { Schema, model } = require("mongoose");

const productModel = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
});

const Product = model("Product", productModel);

module.exports = Product;