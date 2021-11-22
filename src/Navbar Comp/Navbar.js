import React from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.svg"

function Navbar() {
    return (
        <div className="navbar-comp">
            <div className="left">
                <i class="fa fa-bars"/>
                <img src={logo} className="logo" alt="log"/>
            </div>
            
            <div className="right">
                <button className="btn">Sign in</button>
            </div>

        </div>
    )
}

export default Navbar
