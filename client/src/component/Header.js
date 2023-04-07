import React, { useContext, useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; //from going from one page to another page, page will not refresh now ,it goes directly on that page without refreshing (😇)
import { UserContext } from '../App'


const Header = () => {

    // const { state, dispatch } = useContext(UserContext)

    const renderList = () => {
        if (true) {
            if (false) { // Applicant's navbar
                return (
                    <div className="nav">
                        <div className="nav-left">
                            <a href="/"><h1>JobFinder</h1></a>
                        </div>
                        <div className="nav-right">
                            <ul>
                                <li><a href="/home">HOME</a></li>
                                <li><a href="/applications">APPLICATIONS</a></li>
                                <li><a href="/profile">Profile</a></li>
                                <li><a href="/#">LOGOUT</a></li>
                            </ul>
                        </div>
                    </div>
                )
            }
            else {   // Recruiter's navbar
                return (
                    <div className="nav">
                        <div className="nav-left">
                            <a href="/"><h1>JobFinder</h1></a>
                        </div>
                        <div className="nav-right">
                            <ul>
                                <li><a href="/newjob">CREATE JOB</a></li>
                                <li><a href="/myjobs">MY JOBS</a></li>
                                <li><a href="/#">EMPLOYEES</a></li>
                                <li><a href="/profile">PROFILE</a></li>
                                <li><a href="/#">LOGOUT</a></li>
                            </ul>
                        </div>
                    </div>
                )
            }
        }
        else { // home navbar
            return (
                <div className="nav">
                    <div className="nav-left">
                        <a href="/"><h1>JobFinder</h1></a>
                    </div>
                    <div className="nav-right">
                        <ul>
                            <li><a href="/login">APPLICANT</a></li>
                            <li><a href="/loginrec">RECRUITER</a></li>
                        </ul>
                    </div>
                </div>
            )
        }
    }
    return (
        <>
            {renderList()}
        </>
    );
}

export default Header;