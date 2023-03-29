const express = require("express");
const dotenv = require("dotenv")
const app = express();
const mongoose = require("mongoose");
// const authRoutes = require("./routes/authRoutes");


mongoose.set('strictQuery', true);
dotenv.config();
mongoose.connect(process.env.MONGO_URL,{
    dbName: "JobFinder",
}).then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log(err);
});

require('./models/Recruiter')
require('./models/Applicant')
require('./models/Job')

app.use(express.json());
app.use(require('./routes/authRoutes'))
app.use(require('./routes/job'))    
// app.use("/api/auth/", authRoutes);


app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening to port ${process.env.PORT}`);
});