import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import M from "materialize-css"
import { Form, Input } from 'antd';

const Signup = () => {

  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [image, setImage] = useState("")
  const [resume, setResume] = useState("")
  const [urlImage, setUrlImage] = useState(undefined)
  const [urlResume, setUrlResume] = useState(undefined)

  useEffect(() => {
    if (urlImage && urlResume) {
      PostApplicant()
    }
  }, [urlImage, urlResume])

  const uploadImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "JobFinder")
    data.append("cloud_name", "dwzwff7c7")
    fetch("https://api.cloudinary.com/v1_1/dwzwff7c7/image/upload", {
      method: "post",
      body: data
    })
      .then(res => res.json())
      .then(data => {
        setUrlImage(data.url)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const uploadResume = () => {
    const data = new FormData()
    data.append("file", resume)
    data.append("upload_preset", "JobFinder")
    data.append("cloud_name", "dwzwff7c7")
    fetch("https://api.cloudinary.com/v1_1/dwzwff7c7/raw/upload", {
      method: "post",
      body: data
    })
      .then(res => res.json())
      .then(data => {
        setUrlResume(data.url)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const postData = () => {
    if (image && resume) {
      uploadImage()
      uploadResume()
    }
    else {
      PostApplicant()
    }
  }
  const PostApplicant = () => {

    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password,
        resume: urlResume,
        image: urlImage
      })
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" })
        }
        else {
          M.toast({ html: data.message, classes: "#43a047 green darken-1" })
          navigate('/login')
        }
      }).catch(err => {
        console.log(err)
      })

  }

  return (
    <div className="content">
      <div className='signup-page'>
        <Form layout="vertical" onFinish={postData}>
          <h1>Signup</h1>
          <Form.Item label="Name">
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item label="Email">
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item label="Password">
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>
          <Form.Item>
            <div className="btn #64b5f6 blue darken-1">
              <span>Upload pic</span>
              <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            </div>
          </Form.Item>
          <Form.Item>
            <div className="btn #64b5f6 blue darken-1">
              <span>Upload resume</span>
              <input type="file" onChange={(e) => setResume(e.target.files[0])} />
            </div>
          </Form.Item>
          <div>
            <div>Already have an account? <Link to="/login">Click Here</Link> to Login</div>
            <div className="button">
              <button className="btn-reg btn btn-primary">Signup</button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Signup