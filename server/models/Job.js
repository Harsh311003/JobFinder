const mongoose = require("mongoose")

let jobSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  skills: [String],
  jobType: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  dateOfPosting: {
    type: Date,
    default: Date.now,
  },
  deadline: {
    type: Date,
    required: true
  },
  maxApplicants: {
    type: Number,
    required: true
  },
  maxPositions: {
    type: Number,
    required: true
  },
})

module.exports = mongoose.model("jobs", jobSchema);