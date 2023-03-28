const mongoose = require ("mongoose")

let jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    skills: [String],
    jobType: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true,
        min: 0,
        validate: [
        {
            validator: Number.isInteger,
            msg: "Duration should be an integer",
        },
        ],
    },
    salary: {
        type: Number,
        validate: [
          {
            validator: Number.isInteger,
            msg: "Salary should be an integer",
          },
          {
            validator: function (value) {
              return value >= 0;
            },
            msg: "Salary should be positive",
          },
        ],
    },
    deadline: {
        type: Date,
        validate: [
            {
                validator: function (value) {
                return this.dateOfPosting < value;
                },
                msg: "Deadline should be greater than dateOfPosting",
            },
        ],
    },
    maxApplicants: {
        type: Number,
        validate: [
          {
            validator: Number.isInteger,
            msg: "Max applicants should be an integer",
          },
          {
            validator: function (value) {
              return value > 0;
            },
            msg: "Max applicants should greater than 0",
          },
        ],
      },
      maxPositions: {
        type: Number,
        validate: [
          {
            validator: Number.isInteger,
            msg: "Max postions should be an integer",
          },
          {
            validator: function (value) {
              return value > 0;
            },
            msg: "Max positions should greater than 0",
          },
        ],
      },
})

module.exports = mongoose.model("jobs", jobSchema);