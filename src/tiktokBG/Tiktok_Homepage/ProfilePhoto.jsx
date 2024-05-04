import React, { useRef } from 'react'
import profile from "../../assets/pack.jpg"
 import { Nav } from '../tiktok_Navbar/Nav';
import { Leftside } from '../LeftSide_tiktok/Leftside';

export const Profilehome = () => {
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    videoRef.current.play();
  };
  const handleDoubleClick = () => {
    handleLike();
  };
  const profileDetails = {
    name: 'John Doe',
    img: profile,
    age: "",
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus sit amet nisl mattis, nec ultricies magna suscipit.',
    // Add more details as needed
  };

  return (
   <>
     <Nav/>
    <div className="display_sideways">
       <Leftside/>
   <div className="profile_details_head">
   <div className="profile_details_container">
   <div className="profile_details">
      <div className="">
      <img src={profileDetails.img} alt="" />
      </div>
      <div className="profile_details_show">
      <h2>{profileDetails.name}</h2>
      <p>{profileDetails.bio}</p>
      <button>follow</button>
      </div>
      
      
      {/* Add more profile details here */}
    </div> 
    <div className="caption_details">
      <p>Girl Boss drip drop </p>
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

    </div>
   </div>
   </div>
   </div>
   </>
  );
};

