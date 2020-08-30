import React from 'react';
import './header.css';
import logo from './../../images/logo.png';

const Header = () => {
    return (
        <div className = "header">
            <img src={logo}></img>
            <div>
            <h1>Online Course</h1>
                <h5>Choose your course</h5>
            </div>
                
        </div>
    );
};

export default Header;