<<<<<<< HEAD
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom"
=======
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom"
>>>>>>> 46da72422d597638ab89894400e9542ac240f2fa
import Home from "./component/Home";
import SignupApplicant from "./component/SignupApplicant"
import SignupRecruiter from "./component/SignupRecruiter"
import Login from "./component/Login"

function App() {
    return (
<<<<<<< HEAD
      <div >
        <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/signupApplicant' element = {<SignupApplicant/>}/>
            <Route path='/signupRecruiter' element = {<SignupRecruiter/>}/>
            <Route path='/login' element = {<Login/>}/>
          </Routes> 
        </BrowserRouter>
      </div>
=======
        <div >
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/signupApplicant' element={<SignupApplicant />} />
                    <Route path='/signupRecruiter' element={<SignupRecruiter />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
>>>>>>> 46da72422d597638ab89894400e9542ac240f2fa
    );
}

export default App;