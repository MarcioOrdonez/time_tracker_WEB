import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/clock.png';

import './styles.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-conttent" className="container">
                <div className="logo-container">
                    <img src={logo} alt="Logo that represents a clock" />
                    <h1>Your favourit time tracker to keep your time tracked</h1>
                </div>
                <img src={logo} alt="Logo that represents a clock" className="hero-image" />
                <div className="buttons-container">
                    <Link to="/login" className="login">
                    Log in
                </Link>

                    <Link to="/register" className="register">
                    Register
                </Link>
                </div>
            </div>
        </div>
    )
}


export default Landing;