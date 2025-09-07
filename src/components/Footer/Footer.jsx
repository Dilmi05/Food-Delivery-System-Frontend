import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";


const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className='fonter-content-left'>
                    <img src={assets.logo} alt=""></img>
                    <p>Hello world</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt=""></img>
                        <img src={assets.twitter_icon} alt=""></img>
                        <img src={assets.linkedin_icon} alt=""></img>
                    </div>
                </div>

                <div className='fonter-content-center'>
                    <h2>COMPANY</h2>
                    <ul type="none">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>

                </div>
                <div className='fonter-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul type="none">
                        <li>+1-212-234-345</li>
                        <li>contact@tomato.com</li>

                    </ul>
                </div>
            </div>
            <hr></hr>
            <p className="footer-copyright">Copyright 2024@ Tomato.com-ALL Right Reversed.</p>

        </div>
    );
}

export default Footer;