import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom"
import Home from "./component/Home";
import SignupApplicant from "./component/SignupApplicant"
import SignupRecruiter from "./component/SignupRecruiter"
import Login from "./component/Login"

function App() {
    return (
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
    );
}

export default App;