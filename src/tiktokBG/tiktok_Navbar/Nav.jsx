import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import logoImg from "../../assets/pack.jpg"
import { BiPlus } from 'react-icons/bi'
import { Link } from 'react-router-dom'
export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
       <div className="tiktokHeader">
        <div className="tiktok_container">
            <div className="">
               <h2> Dating</h2>
            </div>
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
                <div className="dropdown">
              <div className="tiktokProfile" onClick={handleToggle}>
             <img src={logoImg} alt="" />
            </div>
              {isOpen && (
               <div className="dropdown-content">
                <Link to="/profile">
                Profile
                </Link>
                <Link to="">
                Login
                </Link>
                <Link to="">
                Logout
                </Link>
 

 
               
            </div>
           )}
        </div>
            </div>
        </div>
        </div> 
    </>
  )
}
