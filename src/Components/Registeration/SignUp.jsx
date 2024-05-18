import   { useState } from "react";
import { Link } from "react-router-dom";
 import SubHeaders from "../Subheader/SubHeader";
  
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid =
    firstName.trim() &&
    lastName.trim() &&
    username.trim() &&
    (email.trim() && validateEmail(email)) &&
    password.length >= 6 &&
    password === confirmPassword;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

 

  return (
   <>
   <div className="heads">
    <SubHeaders/>
   </div>
    <section className="signup_Page">
      <div className="register_container">
        <form onSubmit={handleSubmit}>
          <div className="form_head">
            <h2>Get started,</h2>
            <p>Sign up to get started finding your partner!</p>
          </div>
          <div className="register_btw">
            <div className="df">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="df">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="register_btw">
            <div className="df">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleInputChange}
              />
            </div>
            <div className="df">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleInputChange}
                className={(email.trim() && !validateEmail(email)) ? "invalid" : ""}
              />
            </div>
          </div>
          <div className="register_btw">
            <div className="df">
              <label>Password</label>
              <div className="password-input">
                <input
                 type= "password"
                   name="password"
                  value={password}
                  onChange={handleInputChange}
                  className={password.length >= 6 ? "" : "invalid"}
                />
              </div>
            </div>
            <div className="df">
              <label>Confirm Password</label>
              <div className="password-input">
                <input
                  type= "password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleInputChange}
                  className={password === confirmPassword ? "" : "invalid"}
                />
              </div>
            </div>
          </div>
          <div className="terms_check">
            <input type="checkbox" />
            <span style={{ fontWeight: "bold" }}>By creating your account, you agree to our Terms  Already a member? <Link to="/admin">login</Link></span>
          </div>
          <div className="Register_btns">
            <Link to="/">
              <button
                type="submit"
                className={`register_button ${isFormValid ? "" : "disabled"}`}
                disabled={!isFormValid}
              >
                Register
              </button>
            </Link>
          </div>
        </form>
      </div>
    </section>
    </>
  );
};

export default SignUp;
