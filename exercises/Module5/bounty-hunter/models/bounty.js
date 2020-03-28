const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bountySchema = new Schema({
  firstName: String,
  lastName: String,
  bountyAmount: Number,
  isAlive: String,
  type: String
});

module.exports = mongoose.model("Bounty", bountySchema);
