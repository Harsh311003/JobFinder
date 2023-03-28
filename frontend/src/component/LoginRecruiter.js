import React from 'react'
import {useState}  from "react";
import {Link,useNavigate} from "react-router-dom";
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import M from "materialize-css"

function Login() {

  const navigate = useNavigate();        /*instead of useHistory */
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const PostRecruiter=()=>{

    fetch("/loginrecruiter",{
      method:"post",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          email,
          password
      })
  }).then(res=>res.json())
  .then(data=>{
     if(data.error){
      M.toast({html:data.error,classes:"#c62828 red darken-3"})
     }
     else {
      localStorage.setItem("jwt",data.token)
      localStorage.setItem("user",JSON.stringify(data.user))
      M.toast({html:"success",classes:"#43a047 green darken-1"})
      navigate('/recruiterprofile');
      window.location.reload();
     }
  }).catch(err=>{
      console.log(err)
  })
  
    
}
  
  return (
    <div className='parentlogin'>
      <h1>Login</h1>
      <Typography>
        <pre>Recruiter</pre>
      </Typography>
      <Form 
      name="normal_login" 
      className="login-form"
      initialValues={{remember: false,}} onFinish={onFinish}
      >
      <Form.Item className='child'
        name="email"
        rules={[
          {
            required: true,
            message: 'Please enter your Email!',
          },
        ]}
      >
        <Input 
        // prefix={<UserOutlined className="site-form-item-icon" />} 
        placeholder="Email"  
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
      </Form.Item>

      <Form.Item className='child'
        name="password"
        rules={[
          {
            required: true,
            message: 'Please enter your Password!',
          },
        ]}
      >
        <Input
          // prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        {/* <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

        <Form.Item>
          <Button 
          type="primary"
          htmlType="submit" 
          className="btn btnlogin login-form-button"
          onClick={()=>PostRecruiter()}
          >
            Log in
          </Button>
        </Form.Item>
        <div>
          Don't have an account yet? <a href="/">register now!</a>
        </div>
      </Form>
    </div>
  )
}

export default Login