import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import logoImg from "../../assets/pack.jpg"
import { BiPlus } from 'react-icons/bi'
import { Link } from 'react-router-dom'
export const Nav = () => {
 
  
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
              <a href="/upload">
                <div className='upload_vid'>
                    <BiPlus style={{fontWeight:"bolder"}}/>
                    uploads
                 </div>
                 </a>
               <div className="tiktokProfile" >
             <Link to="/profile">
             <img src={logoImg} alt="" />
             </Link>
            </div>
             </div>
        </div>
        </div> 
    </>
  )
}
