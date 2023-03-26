import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

function Login() {
<<<<<<< HEAD
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  
  return (
    <div className='parentlogin'>
      <h1>Login</h1>
      <Form 
      name="normal_login" 
      className="login-form"
      initialValues={{remember: false,}} onFinish={onFinish}
      >
      <Form.Item className='child'
        name="Email"
        rules={[
          {
            required: true,
            message: 'Please enter your Email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email"  />
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
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="btn btnlogin login-form-button">
            Log in
          </Button>
        </Form.Item>
        <div>
          Don't have an account yet? <a href="/">register now!</a>
        </div>
      </Form>
    </div>
  )
=======
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className='parentlogin'>
            <h1>Login</h1>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: false, }} onFinish={onFinish}
            >
                <Form.Item className='child'
                    name="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your Email!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="btn btnlogin login-form-button">
                        Log in
                    </Button>
                </Form.Item>
                <div>
                    Don't have an account yet? <a href="/">register now!</a>
                </div>
            </Form>
        </div>
    )
>>>>>>> 32258eecdfe763ba18ac2d511dd6aaddf4a0f1ac
}

export default Login