import React, { useEffect, useState, useContext } from "react";
import { Card } from 'antd';
import moment from 'moment'
// import { UserContext } from "../../App";

const MyJobs = () => {

  const [myjobs, setJob] = useState([])
  // const { state, dispatch } = useContext(UserContext)

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
    <div className="content">
      <div className="jobs-rec">
        <h1>MY JOBS</h1>
        {
          myjobs.map(job => {
            console.log(job)
            return (
              <Card className="job-rec" title={job.title} bordered={false} >
                <p>Role: {job.jobType}</p>
                <p>Salary: ₹ {job.salary}</p>
                <p>Date of posting: {moment(job.dateOfPosting).format('YYYY-MM-DD')}</p>
                <p>Number of Applicants: {job.maxApplicants}</p>
                <p>Remaining Number of Positions: {job.maxPositions}</p>
                <p>Skills: {job.skills}</p>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}

export default MyJobs;