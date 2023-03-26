const mongoose = require("mongoose");

let recruiterSchema = new mongoose.Schema({
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
      // validate: {
      //   validator: function (v) {
      //     return v !== "" ? /\+\d{1,3}\d{10}/.test(v) : true;
      //   },
      //   msg: "Phone number is invalid!",
      // },
      required: true,
    },
  },
  { collation: { locale: "en" } 
});

module.exports = mongoose.model("recruiters", recruiterSchema);