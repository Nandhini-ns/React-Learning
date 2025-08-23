import React, { useMemo, useState, useCallback } from "react";
import './Login.css';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [action, setAction] = useState("Login");
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = useCallback(() => {
    let tempErrors = {};
    if (action === "Sign Up" && !name.trim()) {
      tempErrors.name = "Name is required";
    }
    if (!email.trim()) {
      tempErrors.email = "Email is required";
    }
    if (!password.trim()) {
      tempErrors.password = "Password is required";
    }
    return tempErrors;
  }, [action, name, email, password]);

  const validationErrors = useMemo(() => validate(), [validate]);

  const handleSubmit = (e) => {
  e.preventDefault();
   setSubmitted(true);
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length === 0) {
    if (action === "Sign Up") {
      alert("Sign Up successful");
    } else {
      alert("Login successful!");
    }
    setName("");
    setEmail("");
    setPassword("");
     setSubmitted(false);
  }
};
 
const handleInputChange = (field, value) => {
    if (field === "name") setName(value);
    if (field === "email") setEmail(value);
    if (field === "password") setPassword(value);
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  

  return (
    <div className="login-page">
    <div className="container">
      <div className="header">
        {/* <div className="text">{action}</div>
        <div className="underline"></div> */}
          <div className="switch-btns">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
            setErrors({});
            setSubmitted(false);
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
            setErrors({});
            setSubmitted(false);
          }}
        >
          Login
        </div>
      </div>
      </div>

       {action === "Sign Up" && (
    <div className="input-group">
      <FaUser className="icon-left" />
      <input
        type="text"
        placeholder="User Name"
        value={name}
        onChange={(e) => handleInputChange("name", e.target.value)}
      />
      {submitted && errors.name && <small className="error">{errors.name}</small>}
    </div>
  )}

      <div className="input-group">
  <FaEnvelope className="icon-left" />
  <input
    type="email"
    placeholder="Email Id"
    value={email}
    onChange={(e) => handleInputChange ("email",e.target.value)}
  />
  {submitted && errors.email && <small className="error">{errors.email}</small>}
</div>

<div className="input-group">
  <FaLock className="icon-left" />
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    value={password}
    onChange={(e) => handleInputChange("password",e.target.value)}
  />
  <span
    className="toggle-icon"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <FaEye /> : <FaEyeSlash />}
  </span>
  {submitted && errors.password && <small className="error">{errors.password}</small>}
</div>
      {action === "Sign Up" ? null : (
        <div className="forgot-password">
          Forgot Password? <span>Click Here!</span>
        </div>
      )}
      <button className="submit-btn" onClick={handleSubmit}>
        {action}
      </button>
    </div>
    </div>
  );
}

export default Login;
