const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "{PATH} is requiered"],
      minLength: [3, "{PATH} must have at least 3 chars"],
    },
    number: {
      type: Number,
      // unique: true,
      required: [true, "{PATH} is requiered"],
      min: [1, "Must be a number greater than 0"],
    },
    open: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const Store = mongoose.model("Store", StoreSchema);
module.exports = Store;
