import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom"
import Home from "./component/Home";
import SignupApplicant from "./component/SignupApplicant"
import SignupRecruiter from "./component/SignupRecruiter"
import Login from "./component/Login"

function App() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
<<<<<<< HEAD
            <Route path='/signupapplicant' element={<SignupApplicant />} />
            <Route path='/signuprecruiter' element={<SignupRecruiter />} />
=======
            <Route path='/signupApplicant' element={<SignupApplicant />} />
            <Route path='/signupRecruiter' element={<SignupRecruiter />} />
>>>>>>> 32258eecdfe763ba18ac2d511dd6aaddf4a0f1ac
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;