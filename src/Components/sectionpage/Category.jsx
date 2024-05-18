import { useState } from 'react';
import { Link } from 'react-router-dom';

const FlashCard = () => {
  const [gender, setGender] = useState('');
  const [interestedIn, setInterestedIn] = useState('');
  const [showFullForm, setShowFullForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ageRange, setAgeRange] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleInterestedInChange = (event) => {
    setInterestedIn(event.target.value);
  };

  const handleAgeRangeChange = (event) => {
    setAgeRange(event.target.value);
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
  };

  return (
    <section className="banner">
      <div className="banner_container">
        <form className="signup-form" onSubmit={handleSignUp}>
          <div className="formSpace">
            <div className="form-group">
              <label htmlFor="gender">I am a</label>
              <select id="gender" value={gender} onChange={handleGenderChange}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="interestedIn">Interested In:</label>
              <select id="interestedIn" value={interestedIn} onChange={handleInterestedInChange}>
                <option value="">Select Interest</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="ageRange">Age Min:</label>
              <select id="ageRange" value={ageRange} onChange={handleAgeRangeChange}>
                {/* <option value="">Select Age Range</option> */}
                {[...Array(33)].map((_, index) => (
                  <option key={index} value={index + 18}>{index + 18}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="ageRange">Age Max:</label>
              <select id="ageRange" value={ageRange} onChange={handleAgeRangeChange}>
                {/* <option value="">Select Age Range</option> */}
                {[...Array(30)].map((_, index) => (
                  <option key={index} value={index + 51}>{index + 51}</option>
                ))}
              </select>
            </div>
            </div>
            {showFullForm && (
              <div className="formSpace">
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
        
          {!showFullForm ? (
            <button onClick={handleGetStartedClick}>Let's Begin Finding Matches</button>
          ) : (
            <Link to="/admin">
              <button type="submit">Proceed</button>
            </Link>
          )}
        </form>
        <div className="dating_banner">
          <div className="date_Container">
            <h3>Best dating Website for any Age</h3>
            <p>Join Quickdate, where you could meet anyone, anywhere! It's a complete fun to find a perfect match for you and continue to hook up.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashCard;
