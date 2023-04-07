import React, { useEffect, createContext, useReducer, useContext } from 'react';
import { Route, Routes, BrowserRouter, useNavigate, useLocation } from "react-router-dom"
import Header from './component/Header'
import Footer from './component/Footer';
import Home from "./component/pages/Home";
import Signup from "./component/pages/Signup"
import SignupRec from "./component/pages/SignupRec"
import Login from "./component/pages/Login"
import LoginRec from "./component/pages/LoginRec"
import CreateJob from "./component/pages/CreateJob";
import MyJobs from './component/pages/MyJobs';
import { reducer, initialState } from './reducers/userReducer'

export const UserContext = createContext()


const Routing = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const { state, dispatch } = useContext(UserContext)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      console.log(state)
      console.log(user)
      console.log(user.usertype)
      dispatch({ type: "USER", payload: user })
    } else {
      if (!location.pathname.startsWith('/reset'))
        navigate("/")
    }
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signuprec' element={<SignupRec />} />
      <Route path='/login' element={<Login />} />
      <Route path='/loginrec' element={<LoginRec />} />
      <Route path='/newjob' element={<CreateJob />} />
      <Route path='/myjobs' element={<MyJobs />} />
    </Routes>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {/* <UserContext.Provider> */}
      <BrowserRouter>
        <Header />
        <Routing />
        <Footer />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;