const express = require ("express")
const Applicant = require("../models/Applicant");
const Recruiter = require("../models/Recruiter");
const Job = require("../models/Job");

const requireRecruiterLogin=require("../middleware/requireRecruiterLogin");
const bodyParser = require("body-parser");
const router = express.Router()
router.use(bodyParser.json())


//Create new job 
router.post("/createjob",requireRecruiterLogin,(req,res)=>{
    const user = req.user;
    const data = req.body;
  
    let job = new Job({
      userId: user._id,
      title: data.title,
      maxApplicants: data.maxApplicants,
      maxPositions: data.maxPositions,
      dateOfPosting: data.dateOfPosting,
      deadline: data.deadline,
      skills: data.skills,
      jobType: data.jobType,
      duration: data.duration,
      salary: data.salary,
      
    });
    job.save().then(result=>{
        res.json({job:result})
    })
    .catch(err=>{
        console.log(err)
    });
   
});

module.exports = router