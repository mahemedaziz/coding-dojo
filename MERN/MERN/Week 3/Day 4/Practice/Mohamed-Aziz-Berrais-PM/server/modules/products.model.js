const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "{PATH} is requiered"],
      minLength: [3, "{PATH} must have at least 3 chars"],
    },
    price: {
      type: Number,
      required: [true, "{PATH} is requiered"],
      minLength: [1, "{PATH} must have at least 1 chars"],
    },
    description: {
      type: String,
      required: [true, "{PATH} is requiered"],
      minLength: [10, "{PATH} must have at least 10 chars"],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
