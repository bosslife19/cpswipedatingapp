// ParentComponent.js
import React, { useState } from 'react';
import { Nav } from '../Nav';
import ProfilePage from './ProfilePage';
 

const ParentComponent = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleProfileImageChange = (image) => {
    setProfileImage(image);
  };

  return (
    <>
      <Nav profileImage={profileImage} />
      <ProfilePage onProfileImageChange={handleProfileImageChange} />
    </>
  );
};

export default ParentComponent;