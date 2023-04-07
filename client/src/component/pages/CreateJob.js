import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Select } from 'antd';
import M from "materialize-css"

const CreateJob = () => {

    const navigate = useNavigate();        /*instead of useHistory */
    const [title, setTitle] = useState("")
    const [skills, setSkills] = useState("")
    const [jobType, setJobType] = useState("")
    const [salary, setSalary] = useState("")
    const [deadline, setDeadline] = useState(new Date())
    const [maxApplicants, setMaxApplicants] = useState("")
    const [maxPositions, setMaxPositions] = useState("")

    const PostJob = () => {
        fetch("/newjob", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                title,
                skills,
                jobType,
                salary,
                deadline,
                maxApplicants,
                maxPositions
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    M.toast({ html: data.error, classes: "#c62828 red darken-3" })
                }
                else {
                    M.toast({ html: "job created successfully", classes: "#00e676 green accent-3" })
                    navigate('/')
                    console.log(data)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='content'>
            <div className='new-job'>
                <Form layout='vertical' onFinish={PostJob}>
                    <h1>NEW JOB</h1>
                    <Form.Item label='Title'>
                        <Input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Form.Item>
                    <Form.Item label='Skills'>
                        <Input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="Job Type">
                        <Select value={jobType} onChange={(type) => { setJobType(type) }} >
                            <Select.Option value="Full Time">Full Time</Select.Option>
                            <Select.Option value="Part Time">Part Time</Select.Option>
                            <Select.Option value="Work From Home">Work From Home</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Salary in ₹">
                        <Input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="Deadline">
                        <Input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
                    </Form.Item>
                    <Form.Item label='Maximum Number of Applicants'>
                        <Input type="number" value={maxApplicants} onChange={(e) => setMaxApplicants(e.target.value)} />
                    </Form.Item>
                    <Form.Item label='Positions Available'>
                        <Input type="number" value={maxPositions} onChange={(e) => setMaxPositions(e.target.value)} />
                    </Form.Item>
                    <Form.Item>
                        <div className="button">
                            <button className="btn-new-job btn btn-primary">Create Job</button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default CreateJob