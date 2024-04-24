// SingleWomenPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import peopled from "../../../assets/pack.jpg"
import peoples from "../../../assets/depositPhotos.webp"
import { FaArrowLeftLong } from 'react-icons/fa6';

const SingleWomenPage = () => {
  const singleWomenProfiles = [
    { id: 1, name: 'Sarah Johnson', imageUrl: peopled, caption: 'Nature lover and fitness enthusiast' },
    { id: 2, name: 'Emily Davis', imageUrl: peoples, caption: 'Passionate about cooking and traveling' },
    { id: 3, name: 'Emily Davis', imageUrl: peoples, caption: 'Passionate about cooking and traveling' },
    { id: 4, name: 'Emily Davis', imageUrl: peoples, caption: 'Passionate about cooking and traveling' },
    { id: 5, name: 'Emily Davis', imageUrl: peoples, caption: 'Passionate about cooking and traveling' },
    { id: 6, name: 'Emily Davis', imageUrl: peoples, caption: 'Passionate about cooking and traveling' },

    // Add more single women profiles as needed
  ];

  return (
    <div className="single-women-page">
       <div className="linkarrow">
       <Link to="/admin">
        <FaArrowLeftLong/>
      </Link>
       </div>
      <h1>Single Women</h1>
      <div className="profiles_ladies">
        {singleWomenProfiles.map(profile => (
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
  );
};

export default SingleWomenPage;
