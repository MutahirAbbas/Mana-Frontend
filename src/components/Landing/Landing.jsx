import React from "react";
import Logo from "../../images/logo-mana.png";
import Back from "../../images/back.png";
import { Link } from "react-router-dom"
export default function Landing() {
  return (
    <div className="custom-main-continer">
      <img src={Back} alt="back" className="landing-back"/>
      <img src={Logo} alt="logo" />
    
        <Link className="landing-title my-5" to="/bio">
         TOUCH HERE FOR YOUR ENQUIRY
        </Link>
    </div>
  );
}
