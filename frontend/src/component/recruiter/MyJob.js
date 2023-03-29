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
    <div style={{ maxWidth: "550px", margin: "0px auto" }}>
  {
    myjobs.map(job => {
                    return (
                        <div>
                        <h2> {job.title}</h2>
                        <br/>
                        <h6>{job.type}</h6>
                        <h6>{job.salary}</h6>
                        <h6>{job.maxApplicants}</h6>
                        <h6>{job.maxApplicants}</h6>
                        </div>
                    )
                })

  }
    </div>
)
}

export default MyJob;