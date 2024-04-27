// SingleMenPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import peopled from "../../../assets/pack.jpg"
import peoples from "../../../assets/depositPhotos.webp"
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Leftside } from '../Leftside';
import { Nav } from '../../tiktok_Navbar/Nav';

const SingleMenPage = () => {
  const singleMenProfiles = [
    { id: 1, name: 'John Smith', imageUrl: peopled, caption: 'Adventure seeker and music enthusiast' },
    { id: 2, name: 'Michael Brown', imageUrl: peoples, caption: 'Passionate about sports and technology' },
    { id: 3, name: 'Michael Brown', imageUrl: peoples, caption: 'Passionate about sports and technology' },
    
    // Add more single men profiles as needed
  ];

  return (
    <>
    <Nav/>
    <div className="display_sideways">
       <Leftside/>
    <div className="single-men-page">
      <h1>Single Men</h1>
      <div className="profilemen">
        {singleMenProfiles.map(profile => (
          <div key={profile.id} className="profile-card">
            <Link to={`/profile/${profile.id}`}>
              <img src={profile.imageUrl} alt={profile.name} />
            </Link>
            <h3>{profile.name}</h3>
            <p>{profile.caption}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default SingleMenPage;
