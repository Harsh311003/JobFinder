import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom"
import Home from "./component/Home";
import SignupApplicant from "./component/SignupApplicant"
import SignupRecruiter from "./component/SignupRecruiter"
import LoginApllicant from "./component/LoginApplicant"
import LoginRecruiter from "./component/LoginRecruiter"
import ApplicantProfile from "./component/Profile"
import RecruiterProfile from "./component/recruiter/Profile"

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
            <Route path='/recruiterprofile' element={<RecruiterProfile />} />
            <Route path='/applicantprofile' element={<ApplicantProfile />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;