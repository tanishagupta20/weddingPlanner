import React from "react";
import './topnav.css';
import wedLogo from '../assets/logos/marky.jpg';
import { Link, BrowserRouter as Router } from "react-router-dom";

export default function Topnav() {
    return (
        <Router>
        <div className="top-nav-container">
            <div className="chitkara-logo-div">
                <img src={wedLogo} className="chitkara-logo" height="48rem" alt="chitkara logo" />
            </div>
            <div className="topnav-search-bar">
                <input type = "text" className="search-box" placeholder="Search"/>
            </div>
            <div className="register-hp">
                <Link className="register-link" to="/register">
                    <button className='registerButton'>Register</button>
                </Link>
            </div>
        </div>
        </Router>
    )
}