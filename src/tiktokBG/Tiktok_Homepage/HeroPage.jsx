import React, { useState, useRef, useContext } from "react";
import others from "../../assets/react.svg";
// import sleeping from "../../assets/sleeping.mp4";
import port from "../../assets/pack.jpg";
import { Link } from "react-router-dom";
import { AppContext } from "../../main";

export const HeroPage = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [shares, setShares] = useState(0);
  const [liked, setLiked] = useState(false);
  const videoRef = useRef(null);

  const {appState} = useContext(AppContext)

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    setLiked(!liked);
  };

  const handleComment = () => {
    setComments(comments + 1);
  };

  const handleShare = () => {
    setShares(shares + 1);
  };

  const handleDoubleClick = () => {
    handleLike();
  };

  const handleVideoEnded = () => {
    videoRef.current.play();
  };

  return (
    <>
      <div className="Homepage_details" style={{overflowY:'auto'}}>
        <div className="Homepage_lines">
          <div className="">
            {appState.users.map((user) => (
              <div key={user.id}>
                <div className="HomePage_Upper">
                  <div className="tiktokProfile">
                    <Link to={`/profile-page/${user.id}`}>
                      <img src={user.profileImg} alt="" />
                    </Link>
                    <div className="">
                      <Link to={`/profile-page/${user.id}`}>
                        <h2>{user.username}</h2>
                      </Link>
                    </div>
                  </div>
                  <div className="tiktok_mingle">
                    <button>subscribe</button>
                  </div>
                </div>
                <div className="main_bg">
                  <div className="video-container">
                    {/* <video ref={videoRef} controls={false} autoPlay loop onDoubleClick={handleDoubleClick} onEnded={handleVideoEnded}>
                <source src={sleeping} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
                    <img src={user.profileImg} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
