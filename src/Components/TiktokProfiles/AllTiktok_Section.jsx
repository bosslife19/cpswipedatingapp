import React, { useState } from 'react';
import { Nav } from '../../tiktokBG/tiktok_Navbar/Nav';
import { Tiktok_homerun } from '../../tiktokBG/Tiktok_homerun';
import Login from '../Registeration/Login';
 
export const AllTiktok_Section = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <div className="">
      
      {isLoggedIn ? (
        <div className="">
        <Nav />
        <Tiktok_homerun />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
      </div>
    </>
  );
};
