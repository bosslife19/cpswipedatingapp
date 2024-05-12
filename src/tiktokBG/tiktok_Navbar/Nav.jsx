import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import logoImg from "../../assets/pack.jpg"
import { BiPlus } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import axiosClient from '../../axiosClient'
export const Nav = () => {
 const currentUser = JSON.parse(localStorage.getItem('user'));

 const navigation = useNavigate()
 const handleLogout = async()=>{
  const res = await axiosClient.post('/logout');
  localStorage.removeItem('user');
  localStorage.removeItem("ACCESS_TOKEN");

  navigation('/');

 }
 
  
  return (
    <>
       <div className="tiktokHeader">
        <div className="tiktok_container">
            <Link to="/" className="NavLink">
               <h2> Dating</h2>
            </Link>
            <div className="searchform">
                <div className="icons">
                <IoIosSearch />
                </div>
                <input type="search" placeholder='Search'/>
            </div>
            <div className="Uploads_logins">
              <button onClick={handleLogout} style={{padding:10, color:'white', borderRadius:2,backgroundColor:'rgba(255, 0, 0, 0.877)'}}>Log Out</button>
              <a href="/upload">
                <div className='upload_vid'>
                    <BiPlus style={{fontWeight:"bolder"}}/>
                    Create Post
                 </div>
                 </a>
               <div className="tiktokProfile" >
             <Link to="/profile">
             <img src={currentUser.profileImg} alt="" />
             </Link>
            </div>
             </div>
        </div>
        </div> 
    </>
  )
}
