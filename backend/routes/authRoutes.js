const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const Applicant = require("../models/Applicant");
const Recruiter = require("../models/Recruiter");


router.post("/signuprecruiter", async(req, res)=>{
    const newRecruiter = new Recruiter({
        name: req.body.name,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(     // to make password encrypted
            req.body.password, 
            process.env.PASS_SEC					
        ).toString(),
        bio: req.body.bio,
        contactNumber: req.body.contactNumber,
    });

    try{
        const savedRecruiter = await newRecruiter.save();			// async finc
        res.status(201).json(savedRecruiter);
    } catch(err){
        res.status(500).json(err);
    } 
})

router.post("/signupapplicant", async(req, res)=>{
    const newApplicant = new Applicant({
        name: req.body.name,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(				// to make password encrypted
            req.body.password, 
            process.env.PASS_SEC					
        ).toString(),
        education: req.body.education,
        skills: req.body.skills,
        resume: req.body.resume,
        photo: req.body.photo,
    });

    try{
        const savedApplicant = await newApplicant.save();			// async finc
        res.status(201).json(savedApplicant);
    } catch(err){
        res.status(500).json(err);
    } 
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