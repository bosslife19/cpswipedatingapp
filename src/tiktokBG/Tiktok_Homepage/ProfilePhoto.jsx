import React, { useContext, useEffect, useRef, useState } from "react";
import profile from "../../assets/pack.jpg";
import sleeping from "../../assets/sleeping.mp4";
import { Nav } from "../tiktok_Navbar/Nav";
import { Leftside } from "../LeftSide_tiktok/Leftside";
import { AppContext } from "../../main";
import { useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axiosClient from "../../axiosClient";

export const Profilehome = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null)
  const videoRef = useRef(null);
  const { appState } = useContext(AppContext);

  const handleVideoEnded = () => {
    videoRef.current.play();
  };
  const handleDoubleClick = () => {
    handleLike();
  };

  const getUser = async () => {
    setLoading(true);
    try {
      const res = await axiosClient.get(`/user/${id}`);
      console.log(res.data);
      setUser(res.data)
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();

    
  }, []);
  const profileDetails = {
    name: user?.username,
    img: user?.profileImg,
    age: user?.age,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet risus sit amet nisl mattis, nec ultricies magna suscipit.",
    // Add more details as needed
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
      )}
    </>
  );
};
