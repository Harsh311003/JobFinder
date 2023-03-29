import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom"
import Home from "./component/Home";
import SignupApplicant from "./component/applicant/SignupApplicant"
import SignupRecruiter from "./component/recruiter/SignupRecruiter"
import LoginApllicant from "./component/applicant/LoginApplicant"
import LoginRecruiter from "./component/recruiter/LoginRecruiter"
import HomeApplicant from "./component/applicant/HomeApplicant"
import HomeRecruiter from "./component/recruiter/HomeRecruiter"
import CreateJob from "./component/recruiter/CreateJob";

function App() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signupapplicant' element={<SignupApplicant />} />
            <Route path='/signuprecruiter' element={<SignupRecruiter />} />
            <Route path='/loginapplicant' element={<LoginApllicant />} />
            <Route path='/loginrecruiter' element={<LoginRecruiter />} />
            <Route path='/recruiterprofile' element={<HomeRecruiter />} />
            <Route path='/applicantprofile' element={<HomeApplicant />} />
            <Route path='/newjob' element={<CreateJob />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;