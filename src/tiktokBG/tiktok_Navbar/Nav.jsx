import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import logoImg from "../../assets/pack.jpg"
import { BiPlus } from 'react-icons/bi'
export const Nav = () => {
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
                <div className='upload_vid'>
                    <BiPlus style={{fontWeight:"bolder"}}/>
                    uploads
                </div>
                <div className="tiktokProfile">
                <img src={logoImg} alt="" />
                </div>
            </div>
        </div>
        </div> 
    </>
  )
}
