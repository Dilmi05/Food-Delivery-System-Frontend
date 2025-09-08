import React from "react";
import "./LoginPopup.css";
import { useState } from "react";
import { assets } from "../../assets/assets";


const LoginPopup = ({ setShowLogin }) => {
    const [currrentState, setCurrentState] = useState("login")
    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currrentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt=''>
                    </img>
                </div>
                <div className="login-popup-inputs">
                    {currrentState === "Login" ? (
                        <input type="text" placeholder="Your name" required />
                    ) : null}
                    <input type="email" placeholder="Your email" required />
                    <input type="password" placeholder="Password" required />
                </div>
                <button>{currrentState === "sign up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required></input>
                    <p>By continuing,i agree to the terms of use & privacy policy.</p>
                </div>
                {currrentState === "Login"
                    ? <p>Create a new account?<span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
                    : <p>Already have an account?<span onClick={()=>setCurrentState("Login")}>Login here</span></p>

                }

            </form>
        </div>
    )
}
export default LoginPopup;