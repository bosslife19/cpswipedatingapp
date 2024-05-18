import   { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../axiosClient";

import SubHeaders from "../Subheader/SubHeader";
  
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')

  const navigate = useNavigate()
 
  
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handlelastNameChange = (event) => {
    setLastName(event.target.value);
  };


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    setError('')
    setLoading(true)
    // Handle sign-up logic here
    try {
      const res = await axiosClient.post("/register", {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        username,
      });

      navigate('/login')
      
    } catch (error) {
      console.log(error)
      setError(error.response?.data);
      setLoading(false)

    }
  };

  return (
   <>
   <div className="heads">
    <SubHeaders/>
   </div>
    <section className="signup_Page">
      <div className="register_container">
        <form  >
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
                onChange={handleFirstNameChange}
              />
            </div>
            <div className="df">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handlelastNameChange}
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
                onChange={handleUsernameChange}
              />
            </div>
            <div className="df">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleEmailChange}
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
                  onChange={handlePasswordChange}
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
                  onChange={handleConfirmPasswordChange}
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
            <Link to="/admin">
            <button type="submit" disabled={loading} onClick={handleSignUp}>Sign up</button>
            </Link>
          </div>
        </form>
      </div>
    </section>
    </>
  );
};

export default SignUp;
