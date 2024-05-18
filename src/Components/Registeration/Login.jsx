 import SubHeaders from "../Subheader/SubHeader";
import React, { useContext, useState } from 'react';
// import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import axiosClient from '../../axiosClient';
import { AppContext } from '../../main';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')

  const {appState, setAppState} = useContext(AppContext)

  

  const navigate = useNavigate()

  // Event handler for input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Event handler for form submission
  const handleSubmit =async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);
   try {
    const res = await axiosClient.post('/login', {email, password});
   
    localStorage.setItem("ACCESS_TOKEN", res.data.token)
    localStorage.setItem('user', JSON.stringify(res.data.user));
    setAppState({...appState, user: res.data.user})

    setLoading(false)
    
    



    navigate('/admin')
    
   } catch (error) {
    console.log(error)
    setLoading(false)
    setError(error.response?.data)
   }
    
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
                  type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
                />
              </div>
            </div>

            <div className="register_btw">
              <div className="df">
                <label>Password</label>
                <div className="password-input">
                  <input
                    type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
                  />
                </div>
              </div>
            </div>

           <div className="spacesEverywhere">
           <div className="Register_btns">
              <Link to="/admin">
              <button type="submit" disabled={loading}>Login</button>
              </Link>
            </div>
            <div className="forgot">
              <span>forgot password</span>
            </div>
           </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
