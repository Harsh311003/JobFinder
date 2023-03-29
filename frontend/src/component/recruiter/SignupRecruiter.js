import React,{useState,useEffect} from 'react'
import { Button, Form, Input, Select, Typography} from 'antd';
import { Link,  useNavigate } from 'react-router-dom'
import M from 'materialize-css'
const { TextArea } = Input;
const { Option } = Select;

const SignupRecruiter=()=> {

    const navigate = useNavigate()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPasword] = useState("")
    const [bio,setBio] = useState("")
    const [contactNumber, setContactNumber] = useState()

    const PostRecruiter = ()=>{
      console.log(name)
      console.log(email)
      console.log(bio)
      console.log(contactNumber)
      fetch("/signuprecruiter",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            email,
            password,
            bio,
            contactNumber
        })
        }).then(res=>res.json())
        .then(data=>{
          if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
          }
          else{
              M.toast({html:data.message,classes:"#43a047 green darken-1"})
              navigate('/loginrecruiter')
          }
        }).catch(err=>{
            console.log(err)
        })
    }

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

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
    <div className='parentsignuprec'>
      <h1>Signup</h1>
      <Typography>
        <pre>Recruiter</pre>
      </Typography>
      <Form 
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: '+91',
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
      >

      <Form.Item>
        <Input
         type="text"
         placeholder="name"
         value={name}
         onChange={(e)=>setName(e.target.value)}
         />
      </Form.Item>

      <Form.Item
      name="email"
      rules={[
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
        {
          required: true,
          message: 'Please input your E-mail!',
        },
      ]}
      >
      <Input 
      type="text"
      placeholder="Email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password
         type="password"
         placeholder="password"
         value={password}
         onChange={(e)=>setPasword(e.target.value)} 
         />
      </Form.Item>

        <Form.Item >
          <TextArea 
          placeholder="Bio (upto 250 words)" 
          rows={4} 
          value={bio}
          onChange={(e)=>setBio(e.target.value)}
          />
        </Form.Item>
        <Form.Item
        name="phone"
        >
        <Input 
        type="number"
        placeholder="Contact Number"
        value={contactNumber}
        onChange={(e)=>setContactNumber(e.target.value)}
        addonBefore={prefixSelector} 
        style={{ width: '100%' }} 
        />
        </Form.Item>

        <Form.Item>
          <Button 
          type="primary" 
          htmlType="submit" 
          className="btn btnsignuprec login-form-button"
          onClick={()=>PostRecruiter()}
          >
          Sign up
          </Button>
        </Form.Item>

        <div>
          Already have an account? <a href="/login">Login here!</a>
        </div>
      </Form>
    </div>
  )
}

export default SignupRecruiter