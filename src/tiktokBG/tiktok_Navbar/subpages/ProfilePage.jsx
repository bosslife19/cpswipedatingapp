// ProfilePage.js
import React, { useRef, useState } from 'react';
import logoImg from "../../../assets/pack.jpg"; // Import the default profile image
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import profile from "../../../assets/pack.jpg"
import sleeping from "../../../assets/sleeping.mp4";
import { Nav } from '../Nav';
import { Leftside } from '../../LeftSide_tiktok/Leftside';
 
const ProfilePage = () => {
  const videoRef = useRef(null);
  const profileDetails = {
    name: 'John Doe',
    img: profile,
    age: "",
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus sit amet nisl mattis, nec ultricies magna suscipit.',
    // Add more details as needed
  }
  const handleVideoEnded = () => {
    videoRef.current.play();
  };
  const handleDoubleClick = () => {
    handleLike();
  };

   const [profileImage, setProfileImage] = useState(logoImg); // Use logoImg as default

 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        onProfileImageChange(reader.result); // Pass the new image to the parent
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
     <Nav/>
    <div className="display_sideways">
       <Leftside/>
    <div className="profile-page">
      <div className="profile_contains">
        <div className="profile-header">
          <label >
            <img src={profileImage} alt="Profile" />
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
          <h1>John Doe</h1>
          <p>Captions here...</p>
        </div>
        <div className="profile_scrolls">
      <img src={profileDetails.img} alt="" />
      <img src={profileDetails.img} alt="" />
      <img src={profileDetails.img} alt="" />
      <img src={profileDetails.img} alt="" />
      <img src={profileDetails.img} alt="" />
      <img src={profileDetails.img} alt="" />
      <img src={profileDetails.img} alt="" />
      <img src={profileDetails.img} alt="" />
      <img src={profileDetails.img} alt="" />
      <img src={profileDetails.img} alt="" />
      <img src={profileDetails.img} alt="" />
      <img src={profileDetails.img} alt="" />
      <img src={profileDetails.img} alt="" />

    </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default ProfilePage;
