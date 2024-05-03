import React, { useState } from 'react';
import { Nav } from '../../tiktokBG/tiktok_Navbar/Nav';
import { Tiktok_homerun } from '../../tiktokBG/Tiktok_homerun';
import Login from '../Registeration/Login';
 
export const AllTiktok_Section = () => {
  

  return (
    <>
      <div className="">
      
       
        <div className="">
        <Nav />
        <Tiktok_homerun />
        </div>
      
      </div>
    </>
  );
};
