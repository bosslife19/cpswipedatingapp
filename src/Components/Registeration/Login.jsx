import React, { useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  // State variables to store user inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform validation or send the login request
    console.log('Email:', email);
    console.log('Password:', password);
    // Simulate successful login
    onLogin();
    // Reset the form fields after submission
    setEmail('');
    setPassword('');
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
