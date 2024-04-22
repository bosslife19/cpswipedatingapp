import React, { useState } from 'react';
import { FaHome, FaBars, FaTimes } from 'react-icons/fa';
import { GrUserManager } from 'react-icons/gr';
import { IoPersonAddSharp } from 'react-icons/io5';
import { MdError, MdGirl, MdMarkEmailUnread, MdOutlineConnectWithoutContact } from 'react-icons/md';
import { SiAdguard, SiHomeassistantcommunitystore } from 'react-icons/si';
import { Link } from 'react-router-dom';
import './Leftside.css'; // Import your CSS file

export const Leftside = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar for desktop view */}
      <div className="sidebar__desktop">
        <div className="sidebar__content">
          {/* Content of the sidebar */}
          <div className="sidebar__item">
            <Link to="/" style={{ color: "red" }}>
              <FaHome />
              <h4>For You</h4>
            </Link>
          </div>
          <div className="sidebar__item">
            <Link to="/">
              <IoPersonAddSharp />
              <h4>Potential Matches</h4>
            </Link>
          </div>
          <div className="sidebar__item">
            <Link to="/">
              <GrUserManager />
              <h4>Search</h4>
            </Link>
          </div>
          <div className="sidebar__item">
            <Link to="/">
              <SiHomeassistantcommunitystore />
              <h4>People in Your Area</h4>
            </Link>
          </div>
          <div className="sidebar__item">
            <Link to="/">
              <MdOutlineConnectWithoutContact />
              <h4>Matched</h4>
            </Link>
          </div>
          <div className="sidebar__item">
            <Link to="/">
              <MdGirl />
              <h4>Single Women</h4>
            </Link>
          </div>
          <div className="sidebar__item">
            <Link to="/">
              <GrUserManager />
              <h4>Single Men</h4>
            </Link>
          </div>
          <div className="sidebar__item">
            <Link to="/">
              <SiAdguard />
              <h4>Guidelines</h4>
            </Link>
          </div>
          <div className="sidebar__item">
            <Link to="/">
              <MdError />
              <h4>Violation</h4>
            </Link>
          </div>
        </div>
      </div>

      {/* Retractable sidebar for mobile view */}
      <div className={`sidebar__mobile ${isOpen ? 'open' : ''}`}>
        <div className="sidebar__content">
          {/* Hamburger button */}
          <div className="sidebar__hamburger" onClick={handleToggleSidebar}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
          {/* Content of the sidebar */}
          <div className="sidebar__item">
            <Link to="/" style={{ color: "red" }}>
              <FaHome />
              <h4>For You</h4>
            </Link>
          </div>
          <div className="sidebar__item">
            <Link to="/">
              <IoPersonAddSharp />
              <h4>Potential Matches</h4>
            </Link>
          </div>
          <div className="sidebar__item">
            <Link to="/">
              <GrUserManager />
              <h4>Search</h4>
            </Link>
          </div>
          <div className="sidebar__item">
            <Link to="/">
              <SiHomeassistantcommunitystore />
              <h4>People in Your Area</h4>
            </Link>
          </div>
          <div className="sidebar__item">
            <Link to="/">
              <MdOutlineConnectWithoutContact />
              <h4>Matched</h4>
            </Link>
          </div>
          <div className="sidebar__item">
            <Link to="/">
              <MdGirl />
              <h4>Single Women</h4>
            </Link>
          </div>
          <div className="sidebar__item">
            <Link to="/">
              <GrUserManager />
              <h4>Single Men</h4>
            </Link>
          </div>
          <div className="sidebar__item">
            <Link to="/">
              <SiAdguard />
              <h4>Guidelines</h4>
            </Link>
          </div>
          <div className="sidebar__item">
            <Link to="/">
              <MdError />
              <h4>Violation</h4>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
