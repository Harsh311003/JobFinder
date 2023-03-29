//jshint esversion:6
const dotenv = require("dotenv")
dotenv.config();

const jwt=require("jsonwebtoken");
const mongoose =require('mongoose');
const Recruiter = require("../models/Recruiter");

module.exports=(req,res,next)=>{
    const {authorization}=req.headers; //Bearer lkdfjkljffls  (authorization will look like)
    
    if(!authorization) 
    {
        return res.status(401).json({error :"You must be logged in "});
    }
    const token=authorization.replace("Bearer ","");
    jwt.verify(token,process.env.JWT_SEC,(err,payload)=>{
        if(err)
        {
            return res.status(401).json({error :"You must be logged in "});
        }
        const {_id}=payload;
        Recruiter.findById(_id).then(userdata=>{
            req.user=userdata;
            next();
        });
        
    });

}; 