const mongoose = require("mongoose");

let recruiterSchema = new mongoose.Schema({
  usertype: {
    type: Number,
    default: 1
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  contactNumber: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("recruiters", recruiterSchema);