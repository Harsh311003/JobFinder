import React from "react";

<<<<<<< HEAD
const Navbar = ()=>{
    return(
        <div className="nav">
            <div className="nav-left">
                <a href="/"><h1>Job Finder</h1></a>
            </div>
            <div className="nav-right">
                <div class="dropdown cls">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">SIGNUP AS
                    <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                    <li><a href="#">Recruiter</a></li>
                    <li><a href="#">Applicant</a></li>
                    </ul>
                </div>
                <div className="cls link"><a href="/login">LOGIN</a></div>
            </div>
        </div>
    )
=======
const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <a href="/"><h1>Job Finder</h1></a>
      </div>
      <div className="nav-right">
        <div class="dropdown cls">
          <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">SIGNUP AS
            <span class="caret"></span></button>
          <ul class="dropdown-menu">
            <li><a href="#">Recruiter</a></li>
            <li><a href="#">Applicant</a></li>
          </ul>
        </div>
        <div className="cls link"><a href="/login">LOGIN</a></div>
      </div>
    </div>
  )
>>>>>>> 46da72422d597638ab89894400e9542ac240f2fa
}

export default Navbar