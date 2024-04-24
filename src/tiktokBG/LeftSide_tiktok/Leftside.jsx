import React, { useState } from 'react';
import { FaHome, FaBars, FaTimes } from 'react-icons/fa';
import { GrUserManager } from 'react-icons/gr';
import { IoPersonAddSharp } from 'react-icons/io5';
import { MdError, MdGirl, MdMarkEmailUnread, MdOutlineConnectWithoutContact } from 'react-icons/md';
import { SiAdguard, SiHomeassistantcommunitystore } from 'react-icons/si';
import { Link } from 'react-router-dom';
import LeftMain from './LeftMain';
 
export const Leftside = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar for desktop view */}
      <div className="sidebar">
        <div className="sidebar__content">
          {/* Content of the sidebar */}
          <div className="sidebar__item">
            <Link to="/" style={{ color: "red" }}>
              <FaHome />
              <h4>For You</h4>
            </Link>
          </div>
           
          <div className="sidebar__item">
            <Link to="/potential">
              <IoPersonAddSharp />
              <h4>Potential Matches</h4>
            </Link>
          </div>
          <div className="sidebar__item">
            <Link to="/searchingleft">
              <GrUserManager />
              <h4>Search</h4>
            </Link>
          </div>
          <div className="sidebar__item">
            <Link to="/peopleArea">
              <SiHomeassistantcommunitystore />
              <h4>People in Your Area</h4>
            </Link>
          </div>
          <div className="sidebar__item">
            <Link to="/matched">
              <MdOutlineConnectWithoutContact />
              <h4>Matched</h4>
            </Link>
          </div>
          <div className="sidebar__item">
            <Link to="/singleladies">
              <MdGirl />
              <h4>Single Women</h4>
            </Link>
          </div>
          <div className="sidebar__item">
            <Link to="/singleMen">
              <GrUserManager />
              <h4>Single Men</h4>
            </Link>
          </div>
           
           
        </div>
      </div>
       <LeftMain/>
    </>
  );
};
