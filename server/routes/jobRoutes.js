const express = require("express")
const Applicant = require("../models/Applicant");
const Recruiter = require("../models/Recruiter");
const Job = require("../models/Job");

const requireRecruiterLogin = require("../middleware/requireRecruiterLogin");
const requireLogin = require('../middleware/requireLogin');

const bodyParser = require("body-parser");
const router = express.Router()
router.use(bodyParser.json())


//Create new job 
router.post("/newjob", requireRecruiterLogin, (req, res) => {
    const user = req.user;
    const data = req.body;
    console.log(req)
    let job = new Job({
        userId: user._id,
        title: data.title,
        maxApplicants: data.maxApplicants,
        maxPositions: data.maxPositions,
        deadline: data.deadline,
        skills: data.skills,
        jobType: data.jobType,
        salary: data.salary,

    });
    job.save().then(result => {
        res.json({ job: result })
        // console.log(result)
    })
        .catch(err => {
            console.log(err)
        });

});

//  my uploaded jobs (recruiter)
router.get("/myjobs", requireRecruiterLogin, (req, res) => {
    Job.find({ userId: req.user._id })
        .then(myjobs => {
            // console.log(myjobs)
            res.json({ myjobs })
        })
        .catch(err => {
            console.log(err)
        })
})

//  all uploaded jobs (applicant)
router.get("/home", (req, res) => {
    Job.find()
        .then(allJobs => {
            // console.log(allJobs)
            res.json({ allJobs })
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router