// PotentialMatchesPage.js
import React, { useState } from 'react';
import make from "./../../../assets/depositPhotos.webp";
import life from "../../../assets/depositPhotos.webp"
import lifes from "../../../assets/depositPhotos.webp"
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Nav } from '../../tiktok_Navbar/Nav';
import { Leftside } from '../Leftside';

const PotentialMatchesPage = () => {
  const [potentialMatches, setPotentialMatches] = useState([
    { id: 1, name: 'John Doe', imageUrl: make, isFriend: false },
    { id: 2, name: 'Jane Smith', imageUrl: life, isFriend: false },
    { id: 3, name: 'mako lee', imageUrl: lifes, isFriend: false },
    { id: 4, name: 'mako lee', imageUrl: lifes, isFriend: false },
    { id: 5, name: 'mako lee', imageUrl: lifes, isFriend: false },
    { id: 6, name: 'mako lee', imageUrl: lifes, isFriend: false },
    { id: 7, name: 'mako lee', imageUrl: lifes, isFriend: false },
    { id: 8, name: 'mako lee', imageUrl: lifes, isFriend: false },
    { id: 9, name: 'mako lee', imageUrl: lifes, isFriend: false },
    { id: 10, name: 'mako lee', imageUrl: lifes, isFriend: false },
    { id: 11, name: 'mako lee', imageUrl: lifes, isFriend: false },
    { id: 12, name: 'mako lee', imageUrl: lifes, isFriend: false },
    { id: 13, name: 'mako lee', imageUrl: lifes, isFriend: false },
    { id: 14, name: 'mako lee', imageUrl: lifes, isFriend: false },

    // Add more potential matches as needed
  ]);

  const handleFriendAction = (id) => {
    setPotentialMatches(
      potentialMatches.map(match => match.id === id ? { ...match, isFriend: !match.isFriend } : match)
    );
  };

  return (
    <>
      <Nav/>
      <div className="display_sideways">
        <Leftside/>
       <div className='potential'>
      <div className="potential_contains">
       {potentialMatches.map(match => (
        <div key={match.id} className="match">
         <Link to={`/profile-page/:id`}>
          <img src={match.imageUrl} alt={match.name} />
          </Link>
          <div className="other_potential">
          <h3>{match.name}</h3>
          <button onClick={() => handleFriendAction(match.id)}>
            {match.isFriend ? 'Remove Friend' : 'Add Friend'}
          </button>
          </div>
        </div>
      ))}
      </div>
      </div>
      </div>
    
   </>
  );
};

export default PotentialMatchesPage;
