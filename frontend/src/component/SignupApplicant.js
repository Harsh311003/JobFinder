import React from 'react'
import { Button, Form, Input, Select, Typography, Upload} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useState} from 'react';
import Uploadresume from './Uploadresume'
import Uploadphoto from './Uploadphoto'



const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

function SignupApplicant() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
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
      <div className='parentsignupapp'>
        <h1>Signup</h1>
        <Typography>
        <pre>Applicant</pre>
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
            message: 'This is not a valid E-mail!',
          },
          {
            required: true,
            message: 'Please enter your E-mail!',
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
              message: 'Please enter your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder='Password' />
        </Form.Item>
        <Form.Item>
          <div className='mid'>

              <div className='name'>
                <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your Institution name!',
                  },
                ]}
                >
                <Input placeholder='Institution name' />
                </Form.Item>
              </div>

              <div className='styear'>
                <Form.Item
                name="startyear"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your start year',
                  },
                ]}
                >
                <Input placeholder='Start year' />
                </Form.Item>
              </div>

              <div className='endyear'>
                <Form.Item
                name="endyear"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your end year',
                  },
                ]}
                >
                <Input placeholder='End year' />
                </Form.Item>
              </div>

          </div>
        </Form.Item>

        <Form.Item>
          <Select
            mode="multiple"
            style={{
              width: '100%',
            }}
            placeholder="select skills"
            defaultValue={[]}
            onChange={handleChange}
            optionLabelProp="label"
          >
            <Option value="Bootstrap" label="Bootstrap"></Option>
            <Option value="Vue.js" label="Vue.js"></Option>
            <Option value="Angular" label="Angular"></Option>
            <Option value="ReactJs" label="ReactJs"></Option>
            <Option value="HTML" label="Html"></Option>
            <Option value="Flutter" label="Flutter"></Option>
            <Option value="Node.Js" label="Node.Js"></Option>
            <Option value="CSS" label="CSS"></Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Uploadresume />
        </Form.Item>

        <Form.Item>
          <Uploadphoto />
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

export default SignupApplicant