import React, { useState } from 'react'
import { Form, Input, Select } from 'antd';
import { Link, useNavigate } from 'react-router-dom'
import M from 'materialize-css'
const { TextArea } = Input;
const { Option } = Select;

const SignupRecruiter = () => {

  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [bio, setBio] = useState("")
  const [contactNumber, setContactNumber] = useState()

  const PostRecruiter = () => {
    console.log(name)
    console.log(email)
    console.log(bio)
    console.log(contactNumber)
    fetch("/signuprec", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password,
        bio,
        contactNumber
      })
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" })
        }
        else {
          M.toast({ html: data.message, classes: "#43a047 green darken-1" })
          navigate('/loginrec')
        }
      }).catch(err => {
        console.log(err)
      })
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className='content'>
      <div className='signup-page-rec'>
        <Form layout="vertical" onFinish={PostRecruiter} initialValues={{ prefix: '+91' }}>
          <h1>SIGNUP</h1>
          <Form.Item label="Name">
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item label="Email">
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item label="Password">
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>
          <Form.Item label="Bio (upto 250 words)">
            <TextArea rows={4} value={bio} onChange={(e) => setBio(e.target.value)} />
          </Form.Item>
          <Form.Item label="Phone">
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
          </Form.Item>
          <div>
            <div>Already have an account? <Link to="/loginrec">Click Here</Link> to Login</div>
            <div className="button">
              <button className="btn-reg-rec btn btn-primary">Signup</button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default SignupRecruiter