import { useState } from "react";
import { Link } from "react-router-dom";
import SubHeaders from "../Subheader/SubHeader";
import GoogleIcon from "../GoogleIcon";
import Facebookicon from "../Facebookicon";
import Twitter from "../Twiteer";

const SignUp = () => {
  const [userData, setUserData] = useState({ username: "", email: "", password: "" });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  
    (userData.email.trim() && validateEmail(userData.email)) &&
    userData.password.length >= 6;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <div className="heads">
        <SubHeaders />
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
                <label>Username or Email</label>
                <input
                  type="text"
                  name="username"
                  value={userData.username}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="register_btw">
              <div className="df">
                <label>Password</label>
                <div className="password-input">
                  <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleInputChange}
                    className={userData.password.length >= 6 ? "" : "invalid"}
                  />
                </div>
              </div>
            </div>

           <div className="spacesEverywhere">
           <div className="Register_btns">
              <Link to="/admin">
                <button
                  type="submit"
                  className="register_button "
                  // disabled={!isFormValid}
                >
                  Login
                </button>
              </Link>
            </div>
            <div className="forgot">
              <span>forgot password</span>
            </div>
           </div>
           <div className="others_links">
           <Link to="/"><Facebookicon/>
           <span>Login with Facebook</span>
           </Link>
           
        <Link to="/"><Twitter/> <span>Login with Twitter</span></Link>
        <Link ><GoogleIcon/> <span>Login with Google</span></Link>
            <Link to="/"> <span>Login with Discord</span></Link>
           </div>

          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
