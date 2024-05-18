// import React, { useEffect, useState } from 'react';
 // import { useHistory } from 'react-router-dom'; // Import useHistory hook from React Router
 import { Link } from "react-router-dom";
 import "../../css_loaders/styles.css";
  const Headers = () => {
   
   
   return (
     <>
      
  
       <div className="header_container">
         <div className="Header_logo">
           <a href="/">
             <img src="https://cpswipe.com/themes/love/assets/img/logo.png" alt="" />
           </a>
           
         </div>
         <div className="navigation_head">
           <div className="btn_flat">
             <Link to="/admin" ><button>Login</button></Link>
            <Link to="/signup"> <button>Register</button></Link>
           </div>
         </div>
       </div>
     {/* </header> */}
     </>
    
   );
 };
 
 export default Headers;
 