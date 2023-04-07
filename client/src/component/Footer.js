import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer-content">
                    <h3>JobFinder</h3>
                    <ul className="socials">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p>All Rights Reserved 2023 &copy;<a href="#">JobFinder</a></p>
                    <div className="footer-menu">
                        <ul className="f-menu">
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer