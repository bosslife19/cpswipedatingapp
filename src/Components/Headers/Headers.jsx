import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import { useHistory } from 'react-router-dom'; // Import useHistory hook from React Router
import "../../css_loaders/styles.css";
import { Link } from 'react-router-dom';

const Headers = () => {

  const navigationArray = [
    { title: "Login", link: "/login" },

  ]
  // const [isScrolled, setIsScrolled] = useState(false);
  // const history = useHistory(); // Access the history object

  // const handleScroll = () => {
  //   if (window.scrollY > 0) {
  //     setIsScrolled(true);
  //   } else {
  //     setIsScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const headerVariants = {
  //    visible: { opacity: 1, transition: { duration: 0.5 } },
  // };

  // const navigateToLoginPage = () => {
  //   history.push('/log'); // Navigate to the '/logins' route
  // };

  return (
    <>
     <motion.header 
      // className={isScrolled ? 'scrolled' : ''}
      // variants={headerVariants}
      // initial="hidden"
      // animate={isScrolled ? 'visible' : 'hidden'}
    >
      <motion.div className="header_container">
        <motion.div className="logo">
          <a href="/" 
          // className={isScrolled ? 'scrolled' : ''}
          >
            <p>Dating</p>
          </a>
        </motion.div>
        <motion.div className="">
          {navigationArray.map(({title,link})=>(
            <Link key={link} to={link} className='logins'>
              <p
              //  className={isScrolled ? 'scrolled' : ''}
              >
                {title}
              </p>
            
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </motion.header>
    </>
   
  );
};

export default Headers;
