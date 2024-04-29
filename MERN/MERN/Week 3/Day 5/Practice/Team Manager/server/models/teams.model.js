const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "{PATH} is requiered"],
      minLength: [2, "{PATH} must have at least 3 chars"],
    },
    position: {
      type: String,
    },

    status1: {
      type: String,
      default: "Undecided",
    },
    status2: {
      type: String,
      default: "Undecided",
    },
    status3: {
      type: String,
      default: "Undecided",
    },
  },
  { timestamps: true }
);

const Team = mongoose.model("Team", TeamSchema);
module.exports = Team;
