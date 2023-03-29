import React,{useEffect,createContext,useReducer,useContext} from 'react';
import {Route, Routes, BrowserRouter, useNavigate,useLocation} from "react-router-dom"
import Home from "./component/Home";
import SignupApplicant from "./component/applicant/SignupApplicant"
import SignupRecruiter from "./component/recruiter/SignupRecruiter"
import LoginApllicant from "./component/applicant/LoginApplicant"
import LoginRecruiter from "./component/recruiter/LoginRecruiter"
import HomeApplicant from "./component/applicant/HomeApplicant"
import HomeRecruiter from "./component/recruiter/HomeRecruiter"
import CreateJob from "./component/recruiter/CreateJob";
import MyJob from "./component/recruiter/MyJob";
import {reducer,initialState} from './reducers/userReducer'
export const UserContext = createContext()


const Routing = ()=>{
  const navigate = useNavigate()
  const location = useLocation()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
    }else{
      if(!location.pathname.startsWith('/reset'))
      navigate("/")
    }
  },[])
  return(
    <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signupapplicant' element={<SignupApplicant />} />
            <Route path='/signuprecruiter' element={<SignupRecruiter />} />
            <Route path='/loginapplicant' element={<LoginApllicant />} />
            <Route path='/loginrecruiter' element={<LoginRecruiter />} />
            <Route path='/recruiterprofile' element={<HomeRecruiter />} />
            <Route path='/applicantprofile' element={<HomeApplicant />} />
            <Route path='/newjob' element={<CreateJob />} />
            <Route path='/myjob' element={<MyJob />} />
    </Routes>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
    return (
      <UserContext.Provider value={{state,dispatch}}>
        <BrowserRouter>
          <Routing/>
        </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;