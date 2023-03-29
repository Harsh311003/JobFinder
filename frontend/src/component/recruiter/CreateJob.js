import React from 'react'
import {useState}  from "react";
import {Link,useNavigate} from "react-router-dom";
import { Button, Form, Input, DatePicker} from 'antd';
import M from "materialize-css"

function CreateJob() {

    const navigate = useNavigate();        /*instead of useHistory */
    const [title,setTitle]=useState("")
    const [skills,setSkills]=useState("")
    const [jobType,setJobType]=useState("")
    const [salary,setSalary]=useState("")
    const [deadline,setDeadline]=useState(new Date())
    const [maxapplicants,setApplicants]=useState("")
    const [maxpositions,setPositions]=useState("")

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };

      const PostJob=()=>{
        fetch("/createjob", {
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
            maxapplicants,
            maxpositions
          })
        }).then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.error) {
              M.toast({ html: data.error, classes: "#c62828 red darken-3" })
            }
            else {
              M.toast({ html: "job created successfully", classes: "#00e676 green accent-3" })
              navigate('/recruiterprofile')
              console.log(data)
            }
          })
          .catch(err => {
            console.log(err);
          })
      }

  return (
    <div className='parentlogin job'>
      <h1>Add Job</h1>
      <Form 
      name="normal_login" 
      className="login-form"
      initialValues={{remember: false,}} onFinish={onFinish}
      >
      <Form.Item 
        className='child'
        name="title"
        rules={[
          {
            required: true,
            message: 'Please enter the title of the job!',
          },
        ]}
      >
        <Input 
        // prefix={<UserOutlined className="site-form-item-icon" />} 
        placeholder="Title"  
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
      </Form.Item>

      <Form.Item className='child'
        name="skills"
        rules={[
          {
            required: true,
            message: 'Please enter the required skills!',
          },
        ]}
      >
        <Input
          type="text"
          placeholder="Skills"
          value={skills}
          onChange={(e)=>setSkills(e.target.value)}
        />
      </Form.Item>

      <Form.Item className='child'
        name="jobType"
        rules={[
          {
            required: true,
            message: 'Please enter the type of job!',
          },
        ]}
      >
        <Input
          type="text"
          placeholder="Job Type"
          value={jobType}
          onChange={(e)=>setJobType(e.target.value)}
        />
      </Form.Item>

      <Form.Item className='child'
        name="salary"
        rules={[
          {
            required: true,
            message: 'Please enter the salary!',
          },
        ]}
      >
        <Input
          type="number"
          placeholder="Salary in ₹"
          value={salary}
          onChange={(e)=>setSalary(e.target.value)}
        />
      </Form.Item>

      <Form.Item className='child'
        name="deadline"
        // rules={[
        //   {
        //     required: true,
        //     message: 'Please enter the deadline!',
        //   },
        // ]}
      >
        <DatePicker className='date'
        type="date"
        placeholder="Application Deadline"
        value={deadline.getFullYear().toString() +
          "-" +
          (deadline.getMonth() + 1).toString().padStart(2, 0) +
          "-" +
          deadline.getDate().toString().padStart(2, 0)}
        onChange={(e)=>setDeadline(new Date(e.target.value))}
        />
      </Form.Item>

      <Form.Item className='child'
        name="maxapplicants"
        rules={[
          {
            required: true,
            message: 'Please enter the max applicants',
          },
        ]}
      >
        <Input
          type="number"
          placeholder="Maximum Number of Applicants"
          value={maxapplicants}
          onChange={(e)=>setApplicants(e.target.value)}
        />
      </Form.Item>

      <Form.Item className='child'
        name="maxpositions"
        rules={[
          {
            required: true,
            message: 'Please enter available positions!',
          },
        ]}
      >
        <Input
          type="number"
          placeholder="Positions Available"
          value={maxpositions}
          onChange={(e)=>setPositions(e.target.value)}
        />
      </Form.Item>

        <Form.Item>
          <Button 
          type="primary"
          htmlType="submit" 
          className="btn btnlogin login-form-button"
          onClick={()=>PostJob()}
          >
            Create Job
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default CreateJob