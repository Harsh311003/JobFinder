import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";

const MyJob = () => {
    const [myjobs, setJob] = useState([])
    const { state, dispatch } = useContext(UserContext)

    useEffect(() => {
        fetch("/myjobs", {
            headers: {
            "Authorization": "Bearer " + localStorage.getItem("jwt")
        }
        }).then(res => res.json())
        .then(result => {
            console.log(result);
            setJob(result.myjobs) 
        })
}, [])


return (
    <div className="job-out">
        <h1>MY JOBS</h1>
    {
        myjobs.map(job => {
            console.log(job)
                return (
                    <div className="job">
                        <div className="jobDetail">
                            <h2> {job.title}</h2>
                            <br/>
                            <h6>Role: {job.jobType}</h6>
                            <h6>Salary: ₹ {job.salary}</h6>
                            <h6>Date of posting: {job.dateOfPosting}</h6>
                            <h6>{job.maxApplicants}</h6>
                            <h6>{job.maxApplicants}</h6>
                            <h6>{job.skills}</h6>
                        </div>
                        <div className="btn">
                            <button>VIEW APPLICATIONS</button>
                        </div>
                    </div>
                )
        })
    }
    </div>
)
}

export default MyJob;