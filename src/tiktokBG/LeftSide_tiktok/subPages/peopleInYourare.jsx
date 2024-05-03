// PeopleInYourAreaPage.js
import React from 'react';
import peopled from "../../../assets/pack.jpg"
import peoples from "../../../assets/depositPhotos.webp"
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Leftside } from '../Leftside';
import { Nav } from '../../tiktok_Navbar/Nav';


const PeopleInYourAreaPage = () => {
  const people = [
    { id: 1, name: 'john-doe', imageUrl: peoples , caption: 'Loves hiking and photography' },
    { id: 2, name: 'jane-smith', imageUrl: peopled , caption: 'Enjoys cooking and traveling' },
    // Add more people as needed
  ];

  return (
    <>
    <Nav/>
    <div className="display_sideways">
       <Leftside/>
    <div className="people-in-your-area-page">
      
      <h1>connect now</h1>
      <div className="people-grid">
        {people.map(person => (
          <div key={person.id} className="person-card">
            <Link to={`/profile-page/:id`}>
            <img src={person.imageUrl} alt={person.name} />
            </Link>
           <div className="captions">
           <h3>{person.name}</h3>
            <p>{person.caption}</p>
           </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default PeopleInYourAreaPage;
