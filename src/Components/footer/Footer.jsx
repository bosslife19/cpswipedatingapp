import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
    <div className="Footer">
      <div className="Footer_container">
        <div className="Footer_Sign">
          <h2>
            Dating
          </h2>
          <a>Terms</a>
          <a>Cookie policy</a>
        </div>
        <div className="Footer_Sign">
          <h2>Company</h2>
          <a>About</a>
          <a>contacts</a>
        </div>
        <div className="footer_socialLinks">
        <Link><FaInstagram/></Link>
        <Link><FaFacebook/></Link>
        <Link><FaTwitter/></Link>  
        </div>
        <div className="Footer_Sign">
         <a href=""> Download app</a>
        </div>
      </div>
    </div>
    </>
  )
}
