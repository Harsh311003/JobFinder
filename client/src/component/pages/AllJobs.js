import React, { useEffect, useState, useContext } from "react";
import { Card } from 'antd';
import moment from 'moment'
// import { UserContext } from "../../App";

const AllJobs = () => {

  const [allJobs, setAllJobs] = useState([])
  // const { state, dispatch } = useContext(UserContext)

  useEffect(() => {
    fetch("/home", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      }
    }).then(res => res.json())
      .then(result => {
        console.log(result);
        setAllJobs(result.allJobs)
      })
  }, [])


  return (
    <div className="content">
      <div className="jobs-rec">
        <h1>JOBS</h1>
        {
          allJobs.map(job => {
            console.log(job)
            return (
              <Card className="job-rec" title={job.title} bordered={false} >
                <div className="job-content">
                  <div>
                    <p>Role: {job.jobType}</p>
                    <p>Salary: ₹ {job.salary} per month</p>
                    <p>Application Deadline: {moment(job.deadline).format('YYYY-MM-DD')}</p>
                    <p>Skills: {job.skills}</p>
                  </div>
                  <div className="job-content-btn">
                    <button className="btn-rec-jobs">Apply</button>
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

export default AllJobs;