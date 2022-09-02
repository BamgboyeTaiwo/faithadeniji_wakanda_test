import React from "react";
import { ReactDOM } from "react";
import logo from "../images/logo.png";


function Navbar() {
    return (
        <div className="nav">
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">

                    <div className="logo">
                        <h1 className="text-light"><a href="index.html"><span><img src={logo} alt="" /></span></a></h1>

                    </div>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="/#">Features</a></li>
                            <li><a className="nav-link scrollto" href="/#">Pricing</a></li>
                            <li><a className="nav-link scrollto" href="/#">Faqs</a></li>
                            <li><a className="nav-link scrollto" href="/#">contact</a></li>
                            <li><a className="lobehold  scrollto" href="/#">Log in</a></li>
                            <li><a className="getstarted scrollto" href="/#">Get Started</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>
        </div>
    );
}

export default Navbar;