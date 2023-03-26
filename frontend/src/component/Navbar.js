import React from "react";

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
<<<<<<< HEAD
                    <li><a href="/signuprecruiter">Recruiter</a></li>
                    <li><a href="/signupapplicant">Applicant</a></li>
=======
                    <li><a href="/signupRecruiter">Recruiter</a></li>
                    <li><a href="/signupApplicant">Applicant</a></li>
>>>>>>> 32258eecdfe763ba18ac2d511dd6aaddf4a0f1ac
                    </ul>
                </div>
                <div className="cls link"><a href="/login">LOGIN</a></div>
            </div>
        </div>
    )
}

export default Navbar