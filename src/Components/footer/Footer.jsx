import { Link } from 'react-router-dom'
import GoogleIcon from '../GoogleIcon'
import Twitter from '../Twiteer'
import Emailicon from '../emailicon'
import Facebookicon from '../Facebookicon'

export const Footer = () => {
  return (
    <>
    <div className="Footer">
      <div className="Footer_container">
        <div className="Footer_Sign">
        <div className="footer_logo">
          <a href="/">
            <img src="https://cpswipe.com/themes/love/assets/img/logo.png" alt="" />
          </a>
          <p>Terms</p>
          <p>Cookie policy</p>
        </div>
          
        </div>
        <div className="Footer_Sign">
          <h2>Company</h2>
          <p>About</p>
          <p>contacts</p>
        </div>
        <div className="footer_socialLinks">
        <Link ><GoogleIcon/></Link>
        <Link to="/https://www.facebook.com/CPDelivers"><Facebookicon/></Link>
        <Link to="/https://x.com/CPSwipe?s=20"><Twitter/></Link>  
        </div>
         <div className="Footer_Signs">
         <form action="">
        <div className="inputeds">
        <div className="emailicon">
        <Emailicon/>
        </div>
          <input type="text" placeholder='Enter your Email' />
        </div>
          <button>signup</button>
         </form>
        </div>
      </div>
      <div className="copyright">
        <span>

Copyright © 2024 Cherry Palace Swipe LLC. All rights reserved.
</span>
      </div>
    </div>
    </>
  )
}
