// const router = require("express").Router();
const express = require ("express")
const CryptoJS = require("crypto-js");
const crypto = require("crypto")
const jwt = require("jsonwebtoken");
const Applicant = require("../models/Applicant");
const Recruiter = require("../models/Recruiter");
const bodyParser = require("body-parser");
const router = express.Router()
const bcrypt = require('bcryptjs')
router.use(bodyParser.json())

router.post('/signuprecruiter',(req,res)=>{
    const {name,email,password,bio,contactNumber} = req.body 
    if(!email || !password || !name || !contactNumber){
       return res.status(422).json({error:"please add all the fields"})
    }
    Recruiter.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
          return res.status(422).json({error:"user already exists with that email"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
              const user = new Recruiter({
                  name,
                  email,
                  password:hashedpassword,
                  bio,
                  contactNumber
              })
      
              user.save()
              .then(user=>{
                  res.json({message:"saved successfully"})
              })
              .catch(err=>{
                  console.log(err)
              })
        })
       
    })
    .catch(err=>{
      console.log(err)
    })
})

router.post('/signupapplicant',(req,res)=>{
    const {name,email,password, image, resume} = req.body 
    if(!name || !email || !password){
       return res.status(422).json({error:"please add all the fields"})
    }
    // console.log(image)
    Applicant.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
          return res.status(422).json({error:"user already exists with that email"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
              const user = new Applicant({
                  name,
                  email,
                  password:hashedpassword,
                  image,
                  resume
              })
      
              user.save()
              .then(user=>{
                  res.json({message:"saved successfully"})
              })
              .catch(err=>{
                  console.log(err)
              })
        })
       
    })
    .catch(err=>{
      console.log(err)
    })
})


router.post("/login", async(req, res)=>{
    try{
        // console.log("try k andr  " + req.body.email);
        const userApplicant = await Applicant.findOne({email: req.body.email});		//find whether user exist
        const userRecruiter = await Recruiter.findOne({email: req.body.email});		//find whether user exist
        // console.log(userApplicant)
        // console.log(userRecruiter)
        if(!userApplicant && !userRecruiter){
            return res.status(400).json("Wrong Credentials!");
        }
        else if(userApplicant){
            const hashedPwd = CryptoJS.AES.decrypt(						// decode the the original password
            userApplicant.password, 
            process.env.PASS_SEC
            );	
            const originalPwd = hashedPwd.toString(CryptoJS.enc.Utf8);	
            if(originalPwd !== req.body.password){       		//matching with org pwd
                return res.status(400).json("Wrong Password");
            }
            const accessToken = jwt.sign(						// using jwt for more security
            {
                id: userApplicant._id
            }, 
            process.env.JWT_SEC,
            {expiresIn: "3d"}
          );
          const {password, ...others} = userApplicant._doc;
          return res.status(200).json({...others, accessToken});
        }
        else{
            // console.log("recruiter k andar")
            const hashedPwd = CryptoJS.AES.decrypt(						// decode the the original password
            userRecruiter.password, 
            process.env.PASS_SEC
            );		
            const originalPwd = hashedPwd.toString(CryptoJS.enc.Utf8);	
            if(originalPwd !== req.body.password){       		//matching with org pwd
                // console.log("Wrong pwd")
                return res.status(400).json("Wrong Password");
            }
            // console.log("password verified")
            const accessToken = jwt.sign(						// using jwt for more security
              {
                  id: userRecruiter._id,
              }, 
              process.env.JWT_SEC,
              {expiresIn: "3d"}
            );
            const {password, ...others} = userRecruiter._doc;
            return res.status(200).json({...others, accessToken});
        }
    } catch(err){
        console.log("fail");
        return res.status(400).json(err);
    }
})

module.exports = router