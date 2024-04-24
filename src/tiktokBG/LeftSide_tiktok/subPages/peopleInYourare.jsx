// PeopleInYourAreaPage.js
import React from 'react';
import peopled from "../../../assets/pack.jpg"
import peoples from "../../../assets/depositPhotos.webp"
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';


const PeopleInYourAreaPage = () => {
  const people = [
    { id: 1, name: 'john-doe', imageUrl: peoples , caption: 'Loves hiking and photography' },
    { id: 2, name: 'jane-smith', imageUrl: peopled , caption: 'Enjoys cooking and traveling' },
    // Add more people as needed
  ];

  return (
    <div className="people-in-your-area-page">
      <Link to="/admin">
        <FaArrowLeftLong/>
      </Link>
      <h1>People in Your Area</h1>
      <div className="people-grid">
        {people.map(person => (
          <div key={person.id} className="person-card">
            <img src={person.imageUrl} alt={person.name} />
           <div className="captions">
           <h3>{person.name}</h3>
            <p>{person.caption}</p>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleInYourAreaPage;
