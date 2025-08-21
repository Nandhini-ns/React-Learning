
import React from "react";
import './Login.css';
import { FaUser,FaEnvelope,FaLock } from "react-icons/fa";
// import user_icon from '../Assets/user icons.png';
// import email_icon from '../Assets/email.jpeg';
// import password_icon from '../Assets/imges6.png';




function Login() {
  return (
    // <div className="login-container">
    //   <h2>Login</h2>
    //   <div className="input-box">
    //     <FaUser className="icon" />   {/* Icon */}
    //     <input type="text" placeholder="Username" />
    //   </div>
    // </div>
    <div className="container">
      <div className="header">
         <div className="text">Sign Up</div>
         <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <FaUser className="icon"/>
          <input type="text" placeholder="Username"/>
        </div>
        <div className="input">
          <FaEnvelope className="icon"/>
          <input type="email" placeholder="Email"/>
        </div>
        <div className="input">
          <FaLock className="icon"/>
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password">Last Password? <span>Click Here!</span></div>
     <div className="submit-container">
      <div className="sumbit">Sign Up</div>
      <div className="sumbit">Login</div>
     </div>
    </div>
  );
}

export default Login;
