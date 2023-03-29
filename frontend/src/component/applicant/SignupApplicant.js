import React ,{useState,useEffect} from "react";
import {Link,useNavigate} from "react-router-dom"
import M from "materialize-css"
import { Button, Form, Input, Select, Typography, Upload} from 'antd';

const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

function SignupApplicant() {

  const navigate = useNavigate();
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [image,setImage] = useState("")
  const [resume,setResume] = useState("")
  const [urlImage,setUrlImage] = useState(undefined)
  const [urlResume,setUrlResume] = useState(undefined)
  useEffect(()=>{
    if(urlImage && urlResume){
      PostApplicant()
    }
},[urlImage, urlResume])

  const uploadImage=()=>{
    const data = new FormData()
    // console.log('upload img k andr');
    // console.log(data)
    data.append("file", image)   
    data.append("upload_preset", "JobFinder")
    data.append("cloud_name", "dwzwff7c7") 
    // console.log(data)
    fetch("https://api.cloudinary.com/v1_1/dwzwff7c7/image/upload",{
        method:"post",
        body:data
    })
    .then(res=>res.json())
    .then(data=>{
       setUrlImage(data.url)
      
    })
    .catch(err=>{
        console.log(err)
    })
  }

  const uploadResume=()=>{
    const data = new FormData()
    data.append("file", resume)   
    data.append("upload_preset", "JobFinder")
    data.append("cloud_name", "dwzwff7c7") 
    fetch("https://api.cloudinary.com/v1_1/dwzwff7c7/raw/upload",{
        method:"post",
        body:data
    })
    .then(res=>res.json())
    .then(data=>{
       setUrlResume(data.url)
      // console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })
  }
const postData=()=>{
  if(image && resume){
    uploadImage()
    uploadResume()
  }
  else {
    PostApplicant()
  }
}
  const PostApplicant = ()=>{

    fetch("/signupapplicant",{
      method:"post",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          name,
          email,
          password,
          resume: urlResume,
          image:urlImage
      })
      }).then(res=>res.json())
      .then(data=>{
        if(data.error){
            M.toast({html: data.error,classes:"#c62828 red darken-3"})
        }
        else{
            M.toast({html:data.message,classes:"#43a047 green darken-1"})
            navigate('/loginapplicant')
        }
      }).catch(err=>{
          console.log(err)
      })

  }



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
          <Input 
          placeholder="Name" 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
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
        <Input 
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
              message: 'Please enter your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password 
          placeholder='Password' 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
            <div className="btn #64b5f6 blue darken-1">
                <span>Upload pic</span>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            </div>
        </Form.Item>

        <Form.Item>
            <div className="btn #64b5f6 blue darken-1">
                <span>Upload resume</span>
                <input type="file" onChange={(e)=>setResume(e.target.files[0])} />
            </div>
        </Form.Item>

          <Form.Item>
            <Button  
            type="primary" 
            htmlType="submit" 
            className="btn btnsignuprec login-form-button"
            onClick={()=>postData()}
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

export default SignupApplicant