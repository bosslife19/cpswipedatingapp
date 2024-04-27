import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ backgroundImage }) => {
  const [gender, setGender] = useState('');
  const [interestedIn, setInterestedIn] = useState('');
  const [age, setAge] = useState(18 );
  const [showFullForm, setShowFullForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleInterestedInChange = (event) => {
    setInterestedIn(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(parseInt(event.target.value));
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
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

  const handleGetStartedClick = () => {
    setShowFullForm(true);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    // Handle sign-up logic here
    console.log('Signing up...');
  };

  return (
    <section className="banner">
      <div className="banner_container">
        <div className="left">
          <form className="signup-form" onSubmit={handleSignUp}>
            <h1>Sign up now for free and share your passion</h1>
            <div className="formSpace">
              <div className="form-group">
                <label htmlFor="gender">I am a</label>
                <select id="gender" value={gender} onChange={handleGenderChange}>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="interestedIn">Interested In:</label>
                <select id="gender" value={interestedIn} onChange={handleInterestedInChange}>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="age">Age:</label>
                <div className="sectionOpting">
                  <input type="range" id="age" value={age} min="18" max="70" onChange={handleAgeChange} />
                  <output>{age} years</output>
                </div>
              </div>
              {showFullForm && (
                <div className="full-form">
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={username} onChange={handleUsernameChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                  </div>
                </div>
              )}
            </div>
            {!showFullForm ? (
              <Link to="/login">
                <button onClick={handleGetStartedClick}>Get started</button>
              </Link>
            ) : (
              <button type="submit">Sign up</button>
            )}
            <div className="already_login">
              <label style={{ fontWeight: "bold" }}>You can get started Here!</label>
              <Link to="/admin"> Signup</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Banner;
