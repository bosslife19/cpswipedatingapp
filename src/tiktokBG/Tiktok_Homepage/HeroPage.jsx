import  { useState, useRef, useContext } from "react";
// import others from "../../assets/react.svg";
// import sleeping from "../../assets/sleeping.mp4";
// import port from "../../assets/pack.jpg";
import { Link } from "react-router-dom";

import { AppContext } from "../../main";
import PaymentDetailsModal from "../../Components/PaymentDetailsModal";
import { Nav } from "../tiktok_Navbar/Nav";

export const HeroPage = () => {
  // const [likes, setLikes] = useState(0);
  // const [comments, setComments] = useState(0);
  // const [shares, setShares] = useState(0);
  // const [liked, setLiked] = useState(false);
  // const videoRef = useRef(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [requests, setRequests] = useState([]);

  const [showModal, setShowModal] = useState(false)
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const { appState } = useContext(AppContext);

  const handleSubscribeClick = (userId) => {
    setSelectedUserId(userId);
    console.log(selectedUserId);
   
   
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedUserId(null);
    // setShowModal(false);
  };

  // const handleLike = () => {
  //   if (!liked) {
  //     setLikes(likes + 1);
  //   } else {
  //     setLikes(likes - 1);
  //   }
  //   setLiked(!liked);
  // };

  // const handleComment = () => {
  //   setComments(comments + 1);
  // };

  // const handleShare = () => {
  //   setShares(shares + 1);
  // };

  // const handleDoubleClick = () => {
  //   handleLike();
  // };

  // const handleVideoEnded = () => {
    // videoRef.current.play();
  // };

  return (
    <>
      <div className="Homepage_details" 
      // style={{ overflowY: "auto" }}
      >
      <Nav/>
        <div className="Homepage_lines">
          <div className="">

            {appState.users.map((user, index) => (
              
              <div
               key={user.id}
                 >
                <div className="HomePage_Upper">
                  <div className="tiktokProfile">
                    {user.subscribed?.includes(currentUser.username) ? (
                      <Link
                       to={`/profile-page/${user.id}`
                       }   
                       >
                        <img 
                        // src={others}
                        src={user.profileImg}
                         alt="" />
                      </Link>
                    ) : (
                      <img 
                      src={user.profileImg} 
                      alt="" style={{cursor:'auto'}}/>
                    )}
                    <div className="">
                      {user.subscribed?.includes(currentUser.username) ? (
                        <Link 
                        to={`/profile-page/${user.id}`}
                        >
                          <h2>
                          
                          {user.username}
                          </h2>
                        </Link>
                      ) : (
                        <h2>
                        {user.username}
                        </h2>
                      )}
                    </div>
                  </div>
                  <div className="tiktok_mingle">
                    {user.subscribed?.includes(currentUser.username) ? (
                      <button disabled>Subscribed</button>
                    ) : (
                      <button
                        disabled={
                          user.subscription_requests?.includes(
                            currentUser.username
                          ) ||
                          (requests.includes(currentUser.username) &&
                            requests.includes(user.id))
                        }
                        onClick={() => handleSubscribeClick(user.id)}
                      >
                        {user.subscription_requests?.includes(
                          currentUser.username
                        ) ||
                        (requests.includes(currentUser.username) &&
                          requests.includes(user.id))
                          ? "requested"
                          : "subscribe"}
                      </button>
                    )}
                  </div>
                </div>
                <div className="main_bg">
                  <div className="video-container">
                    {/* <video ref={videoRef} controls={false} autoPlay loop onDoubleClick={handleDoubleClick} onEnded={handleVideoEnded}>
                <source src={sleeping} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
                    <img 
                    // src={port}
                    src={user.profileImg}
                     alt="" />
                  </div>
                </div>

                {selectedUserId === user.id && (
                  <PaymentDetailsModal
                    userId={selectedUserId}
                    closeModal={handleCloseModal}
                    setRequests={setRequests}
                  />
                )}
              </div>
            ))}
          </div>
          
        
        </div>
      </div>
    </>
  );
};

export default HeroPage;
