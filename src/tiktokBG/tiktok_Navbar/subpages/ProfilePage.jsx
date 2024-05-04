// ProfilePage.js
import React, { useContext, useRef, useState, useEffect } from "react";
import "./ProfilePage.css";
import logoImg from "../../../assets/pack.jpg"; // Import the default profile image
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import profile from "../../../assets/pack.jpg";
import sleeping from "../../../assets/sleeping.mp4";
import { Nav } from "../Nav";
import { Leftside } from "../../LeftSide_tiktok/Leftside";
import { AppContext } from "../../../main";
import { ThreeDots } from "react-loader-spinner";
import axiosClient from "../../../axiosClient";

const ProfilePage = () => {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const { appState, setAppState } = useContext(AppContext);
  const [profileImageModal, setProfileImageModal] = useState(false);
  const user = JSON.parse(appState.user);

  const [userDetails, setUserDetails] = useState(null);
  const getUser = async () => {
    setLoading(true);
    try {
      const res = await axiosClient.get(`/user/${user.id}`);
      console.log(res.data);
      setLoading(false);
      setUserDetails(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  const profileDetails = {
    name: userDetails?.username,
    img: userDetails?.profileImg,
    age: userDetails?.age,
    // bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus sit amet nisl mattis, nec ultricies magna suscipit.",
    // Add more details as needed
  };
  const handleVideoEnded = () => {
    videoRef.current.play();
  };
  const handleDoubleClick = () => {
    handleLike();
  };

  const [profileImage, setProfileImage] = useState(logoImg); // Use logoImg as default

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setProfileImage(reader.result);
  //       onProfileImageChange(reader.result); // Pass the new image to the parent
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    if (!selectedImage) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await axiosClient.post("/user/uploadprofile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data) {
        // alert("Image uploaded successfully!");
        const url = response.data.image_path;
        
        setUserDetails({...userDetails, profileImg:url })
       setProfileImageModal(false)
        // Additional logic if needed
      } else {
        alert("Error uploading image.");
      }
    } catch (error) {
      console.log("Error uploading image:", error);
      alert("Error uploading image.");
    }
  };

  return (
    <>
      {loading ? (
        <div style={{ width: 200, margin: "auto", marginTop: 300 }}>
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ margin: "auto" }}
            wrapperClass=""
          />
        </div>
      ) : (
        <>
          {" "}
          <Nav />
          <div className="display_sideways">
            <Leftside />
            <div className="profile-page">
              <div className="profile_contains">
                <div className="profile-header">
                  <label>
                    <img
                      src={userDetails?.profileImg}
                      alt="Profile"
                      style={{ cursor: "pointer" }}
                      onClick={() => setProfileImageModal(true)}
                    />
                  </label>
                  <input
                    type="file"
                    id="profile-upload"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                  <h1>{userDetails?.username}</h1>
                  {/* <p>Captions here...</p> */}
                </div>
                <div className="profile_scrolls">
                  {
                   userDetails?.images.map((item, index)=>(
                    <img src={item} alt="" key={index} />
                   ))
                  }
                  
                </div>
              </div>
              {profileImageModal && (
                <div className="profileImgForm">
                  <form onSubmit={handleImageUpload}>
                    <h2>Change Profile Picture</h2>
                    <input
                      type="file"
                      name=""
                      id=""
                      onChange={handleImageChange}
                    />

                    <button type="submit">Change</button>
                    <div
                      style={{
                        position: "absolute",
                        right: 15,
                        top: 5,
                        cursor: "pointer",
                      }}
                      onClick={() => setProfileImageModal(false)}
                    >
                      x
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProfilePage;
