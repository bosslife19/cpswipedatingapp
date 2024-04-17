// Headers.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import "../../css_loaders/styles.css";

const Headers = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scrolling
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);
    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  // Variants for header animation
  const headerVariants = {
     visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.header 
      className={isScrolled ? 'scrolled' : ''}
      variants={headerVariants}
      initial="hidden"
      animate={isScrolled ? 'visible' : 'hidden'} // Animate only when scrolled
    >
      <motion.div className="header_container">
        <motion.div className="logo">
          <a href="#" className={isScrolled ? 'scrolled' : ''}>Dating</a>
        </motion.div>
        <motion.div className="logins">
          <i className=''></i>
          <button className={isScrolled ? 'scrolled' : ''}>Login</button>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default Headers;
