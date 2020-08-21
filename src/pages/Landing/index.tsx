import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import heroImage from '../../assets/images/hero-image/hero-image.svg';

import './styles.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logo} alt="Logo that represents a clock" />
                    <h1>Make the most of your time.</h1>
                </div>
                <img src={heroImage} alt="Logo that represents a clock" className="hero-image" />
                <div className="buttons-container">
                    <Link to="/register" className="register">
                    Join Now
                </Link>

                    <Link to="/login" className="login">
                    Log in
                </Link>
                </div>
            </div>
        </div>
    )
}


export default Landing;