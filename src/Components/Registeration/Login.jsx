import React, { useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import axiosClient from '../../axiosClient';

const Login = () => {
  // State variables to store user inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
   try {
    const res = await axiosClient.post('/login', {email, password});
    localStorage.setItem("ACCESS_TOKEN", res.data.token)

    navigate('/admin')
    
   } catch (error) {
    console.log(error)
   }
    
  };

  return (
    <>
    <div className="login-form">
    <div className="arrowBack">
        <Link to="/">
        <FaArrowLeftLong />
        </Link>
      </div>
      <div className="login-container">
        
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-groups">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-groups">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* <Link to="/admin"> */}
        <button type="submit">Login</button>
        {/* </Link> */}
      </form>
      <div className="signupbar">
              <label style={{ fontWeight: "bold" }}>Already a member? <Link to="/signup">signup</Link></label>
     </div>
      </div>
      
    </div>
   
    </>
  );
};

export default Login;
