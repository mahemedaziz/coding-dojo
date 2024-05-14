const mongoose = require("mongoose");

const ContrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "{PATH} is requiered"],
      minLength: [3, "{PATH} must have at least 3 chars"],
    },
    flag: {
      type: String,
      required: [true, "{PATH} is requiered"],
      minLength: [8, "{PATH} must have at least 8 chars"],
    },
    independent: {
      type: Boolean,
      required: [true, "{PATH} is requiered"],
    },
  },
  { timestamps: true }
);

const Country = mongoose.model("Country", ContrySchema);
module.exports = Country;
