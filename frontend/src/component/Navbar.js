import React from "react";

const Navbar = ()=>{
    return(
        <div className="nav">
            <div className="nav-left">
                <a href="/"><h1>JobFinder</h1></a>
            </div>
            <div className="nav-right">
                <div class="dropdown cls">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">SIGNUP AS
                    <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                    <li><a href="/signuprecruiter">Recruiter</a></li>
                    <li><a href="/signupapplicant">Applicant</a></li>
                    </ul>
                </div>
                {/* <div className="cls link"><a href="/login">LOGIN</a></div> */}
                <div class="dropdown cls">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">LOGIN AS
                    <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                    <li><a href="/loginrecruiter">Recruiter</a></li>
                    <li><a href="/loginapplicant">Applicant</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar