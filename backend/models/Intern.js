const mongoose = require("mongoose");

const internSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  referralCode: String,
  donations: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("Intern", internSchema);
