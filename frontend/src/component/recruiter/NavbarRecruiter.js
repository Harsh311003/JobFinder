import React from 'react'

function NavbarRecruiter() {
  return (
    <div className="navrec">
        <div className="navrec-left">
            <a href="/"><h1>JobFinder</h1></a>
        </div>
        <div className="navrec-right">
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/newjob">ADD JOBS</a></li>
                <li><a href="/myjobs">MY JOBS</a></li>
                <li><a href="#">EMPLOYEES</a></li>
                <li><a href="/recruiterprofile">PROFILE</a></li>
                <li><a href="#">LOGOUT</a></li>
            </ul>
        </div>
    </div>
  )
}

export default NavbarRecruiter