import React from 'react'
import { Button, Form, Input, Select, Typography} from 'antd';
const { TextArea } = Input;
const { Option } = Select;

function signupRecruiter() {
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
        <Input placeholder="Name" />
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
      <Input placeholder="Email" />
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
        <Input.Password placeholder='Password' />
      </Form.Item>
        <Form.Item >
          <TextArea placeholder="Bio (upto 250 words)" rows={4} />
        </Form.Item>
        <Form.Item
        name="phone"
        >
        <Input placeholder='Phone' addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="btn btnsignuprec login-form-button">
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

export default signupRecruiter