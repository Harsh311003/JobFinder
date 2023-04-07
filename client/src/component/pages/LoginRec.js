import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../../App'
import { Form, Input } from 'antd';
import M from "materialize-css"

const LoginRec = () => {

  const { state, dispatch } = useContext(UserContext)
  const navigate = useNavigate();        /*instead of useHistory */
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const PostRecruiter = () => {
    fetch("/loginrec", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" })
        }
        else {
          //saving state of login user in local storage
          localStorage.setItem("jwt", data.token)   //saving token
          localStorage.setItem("user", JSON.stringify(data.user))   //saving user details
          M.toast({ html: "success", classes: "#43a047 green darken-1" })
          navigate('/');
          window.location.reload();
        }
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='content'>
      <div className='login-page'>
        <Form layout='vertical' onFinish={PostRecruiter}>
          <h1>Login</h1>
          <Form.Item label="Email">
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item label="Password">
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>
          <div>
            <div>Don't have an account yet? <Link to="/signuprec">Click Here</Link> to SIGNUP</div>
            <div className="button">
              <button className="btn-login btn btn-primary">Login</button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default LoginRec