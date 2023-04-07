// const router = require("express").Router();
const express = require ("express")
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


router.post("/loginrecruiter",(req,res)=>{

    const {email,password}=req.body;
    if(!email || !password)
    {
       return  res.status(422).json({error : "please add email and password"});
    }

    Recruiter.findOne({email:email})
    .then(saveduser=>{
        if(!saveduser)
        {
             return res.status(401).json({error : "Invalid email or password"});
        }
        bcrypt.compare(password,saveduser.password)
        .then(doMatch=>{
            if(doMatch)
            {
                // res.json("Sucessfully logged in");
                const token=jwt.sign({_id:saveduser._id},process.env.JWT_SEC); //saving user id to _id 
                const {_id,name,email} = saveduser
                res.json({token,user:{_id,name,email}});
            }
            else
            {
                return res.status(422).json({error : "Invalid email or password"});
            }
        })
        .catch(err=>{
            console.log(err);
        });
    });

});

router.post("/loginapplicant",(req,res)=>{

    const {email,password}=req.body;
    if(!email || !password)
    {
       return  res.status(422).json({error : "please add email and password"});
    }

    Applicant.findOne({email:email})
    .then(saveduser=>{
        if(!saveduser)
        {
             return res.status(401).json({error : "Invalid email or password"});
        }
        bcrypt.compare(password,saveduser.password)
        .then(doMatch=>{
            if(doMatch)
            {
                // res.json("Sucessfully logged in");
                const token=jwt.sign({_id:saveduser._id},process.env.PASS_SEC); //saving user id to _id 
                const {_id,name,email} = saveduser
                res.json({token,user:{_id,name,email}});
            }
            else
            {
                return res.status(422).json({error : "Invalid email or password"});
            }
        })
        .catch(err=>{
            console.log(err);
        });
    });

});


module.exports = router