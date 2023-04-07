import React, { useEffect, useState, useContext } from "react";
import { Card } from 'antd';
import moment from 'moment'
// import { UserContext } from "../../App";

const MyJobs = () => {

  const [myJobs, setMyJobs] = useState([])
  // const { state, dispatch } = useContext(UserContext)

  const user = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    fetch("/myjobs", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    }).then(res => res.json())
      .then(result => {
        console.log(result);
        setMyJobs(result.myjobs)
      })
  }, [])


  return (
    <div className="content">
      <div className="jobs-rec">
        <h1>MY JOBS</h1>
        {
          myJobs.map(job => {
            console.log(job)
            return (
              <Card className="job-rec" title={job.title} bordered={false} >
                <div className="job-content">
                  <div>
                    <p>Role: {job.jobType}</p>
                    <p>Salary: ₹ {job.salary} per month</p>
                    <p>Posted By: {user.name}</p>
                    <p>Date of posting: {moment(job.dateOfPosting).format('YYYY-MM-DD')}</p>
                    <p>Application Deadline: {moment(job.deadline).format('YYYY-MM-DD')}</p>
                    <p>Number of Applicants: {job.maxApplicants}</p>
                    <p>Remaining Number of Positions: {job.maxPositions}</p>
                    <p>Skills: {job.skills}</p>
                  </div>
                  <div className="job-content-btn">
                    <button className="btn-rec-jobs">View Applications</button>
                    <button className="btn-rec-jobs">Update Details</button>
                    <button className="btn-rec-jobs">Delete Job</button>
                  </div>
                </div>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}

export default MyJobs;