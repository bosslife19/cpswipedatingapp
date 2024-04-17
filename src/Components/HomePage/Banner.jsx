// Banner.js
import React, { useState } from 'react';

const Banner = ({ backgroundImage }) => {
  const [gender, setGender] = useState('');
  const [interestedIn, setInterestedIn] = useState('');
  const [age, setAge] = useState(20);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleInterestedInChange = (event) => {
    setInterestedIn(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(parseInt(event.target.value));
  };

  return (
    <section className="banner">
      <div className="banner_container">
      <div className="left">
        
        <form className="signup-form">
        <h1>Sign up now for free and 
          share your passion</h1>
         <div className="formSpace">
         <div className="form-group">
            <label htmlFor="gender">I am a</label>
            <select  id="gender" value={gender} onChange={handleGenderChange}>
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
            </select>          </div>
          <div className="form-group">
            <label htmlFor="age">Aged:</label>
            <div className="sectionOpt">
            <input type="range" id="age" value={age} min="20" max="70" onChange={handleAgeChange} />
            <output>{age}</output>
            </div>
          </div>
         </div>
          <button type="submit">Sign Up</button>
          <div className="already_login">
            <label htmlFor="">Already a member?</label>
            <a href="#">Log in</a>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
};

export default Banner;
