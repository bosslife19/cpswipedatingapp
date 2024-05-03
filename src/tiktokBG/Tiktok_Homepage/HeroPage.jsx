import React, { useState, useRef } from 'react';
import others from "../../assets/react.svg";
// import sleeping from "../../assets/sleeping.mp4";
import port from "../../assets/pack.jpg"
 import { Link } from 'react-router-dom';

export const HeroPage = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [shares, setShares] = useState(0);
  const [liked, setLiked] = useState(false);
  const videoRef = useRef(null);

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
      <div className="Homepage_details">
        <div className="Homepage_lines">
          <div className="">
          <div className="HomePage_Upper">
            <div className='tiktokProfile'>
              <Link to={`/profile-page/:id`}>
              <img src={others} alt="" />
              </Link>
              <div className="">
              <Link to={`/profile-page/:id`}
              >
              <h2>your name</h2>
             </Link>
                <span>your caption</span>
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
              <img src={port} alt="" />
            </div>
              
          </div>
          <div className="HomePage_Upper">
            <div className='tiktokProfile'>
              <img src={others} alt="" />
              <div className="">
              <Link 
              
              >
              <h2>your name</h2>
             </Link>
                <span>your caption</span>
              </div>
            </div>
            <div className="tiktok_mingle">
              <button>mingle</button>
            </div>
          </div>
          <div className="main_bg">
            <div className="video-container">
              {/* <video ref={videoRef} controls={false} autoPlay loop onDoubleClick={handleDoubleClick} onEnded={handleVideoEnded}>
                <source src={sleeping} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <img src={port} alt="" />
            </div>
              
          </div>
          <div className="HomePage_Upper">
            <div className='tiktokProfile'>
              <img src={others} alt="" />
              <div className="">
              <Link 
              
              >
              <h2>your name</h2>
             </Link>
                <span>your caption</span>
              </div>
            </div>
            <div className="tiktok_mingle">
              <button>mingle</button>
            </div>
          </div>
          <div className="main_bg">
            <div className="video-container">
              {/* <video ref={videoRef} controls={false} autoPlay loop onDoubleClick={handleDoubleClick} onEnded={handleVideoEnded}>
                <source src={sleeping} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <img src={port} alt="" />
            </div>
              
          </div>
          <div className="HomePage_Upper">
            <div className='tiktokProfile'>
              <img src={others} alt="" />
              <div className="">
              <Link 
              
              >
              <h2>your name</h2>
             </Link>
                <span>your caption</span>
              </div>
            </div>
            <div className="tiktok_mingle">
              <button>mingle</button>
            </div>
          </div>
          <div className="main_bg">
            <div className="video-container">
              {/* <video ref={videoRef} controls={false} autoPlay loop onDoubleClick={handleDoubleClick} onEnded={handleVideoEnded}>
                <source src={sleeping} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <img src={port} alt="" />
            </div>
              
          </div>
          <div className="HomePage_Upper">
            <div className='tiktokProfile'>
              <img src={others} alt="" />
              <div className="">
              <Link 
              
              >
              <h2>your name</h2>
             </Link>
                <span>your caption</span>
              </div>
            </div>
            <div className="tiktok_mingle">
              <button>mingle</button>
            </div>
          </div>
          <div className="main_bg">
            <div className="video-container">
              {/* <video ref={videoRef} controls={false} autoPlay loop onDoubleClick={handleDoubleClick} onEnded={handleVideoEnded}>
                <source src={sleeping} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <img src={port} alt="" />
            </div>
              
          </div>
          <div className="HomePage_Upper">
            <div className='tiktokProfile'>
              <img src={others} alt="" />
              <div className="">
              <Link 
              
              >
              <h2>your name</h2>
             </Link>
                <span>your caption</span>
              </div>
            </div>
            <div className="tiktok_mingle">
              <button>mingle</button>
            </div>
          </div>
          <div className="main_bg">
            <div className="video-container">
              {/* <video ref={videoRef} controls={false} autoPlay loop onDoubleClick={handleDoubleClick} onEnded={handleVideoEnded}>
                <source src={sleeping} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <img src={port} alt="" />
            </div>
              
          </div>
          <div className="HomePage_Upper">
            <div className='tiktokProfile'>
              <img src={others} alt="" />
              <div className="">
              <Link 
              
              >
              <h2>your name</h2>
             </Link>
                <span>your caption</span>
              </div>
            </div>
            <div className="tiktok_mingle">
              <button>mingle</button>
            </div>
          </div>
          <div className="main_bg">
            <div className="video-container">
              {/* <video ref={videoRef} controls={false} autoPlay loop onDoubleClick={handleDoubleClick} onEnded={handleVideoEnded}>
                <source src={sleeping} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <img src={port} alt="" />
            </div>
              
          </div>
          <div className="HomePage_Upper">
            <div className='tiktokProfile'>
              <img src={others} alt="" />
              <div className="">
              <Link 
              
              >
              <h2>your name</h2>
             </Link>
                <span>your caption</span>
              </div>
            </div>
            <div className="tiktok_mingle">
              <button>mingle</button>
            </div>
          </div>
          <div className="main_bg">
            <div className="video-container">
              {/* <video ref={videoRef} controls={false} autoPlay loop onDoubleClick={handleDoubleClick} onEnded={handleVideoEnded}>
                <source src={sleeping} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <img src={port} alt="" />
            </div>
              
          </div>
          <div className="HomePage_Upper">
            <div className='tiktokProfile'>
              <img src={others} alt="" />
              <div className="">
              <Link 
              
              >
              <h2>your name</h2>
             </Link>
                <span>your caption</span>
              </div>
            </div>
            <div className="tiktok_mingle">
              <button>mingle</button>
            </div>
          </div>
          <div className="main_bg">
            <div className="video-container">
              {/* <video ref={videoRef} controls={false} autoPlay loop onDoubleClick={handleDoubleClick} onEnded={handleVideoEnded}>
                <source src={sleeping} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <img src={port} alt="" />
            </div>
              
          </div>
          <div className="HomePage_Upper">
            <div className='tiktokProfile'>
              <img src={others} alt="" />
              <div className="">
              <Link 
              
              >
              <h2>your name</h2>
             </Link>
                <span>your caption</span>
              </div>
            </div>
            <div className="tiktok_mingle">
              <button>mingle</button>
            </div>
          </div>
          <div className="main_bg">
            <div className="video-container">
              {/* <video ref={videoRef} controls={false} autoPlay loop onDoubleClick={handleDoubleClick} onEnded={handleVideoEnded}>
                <source src={sleeping} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <img src={port} alt="" />
            </div>
              
          </div>
          <div className="HomePage_Upper">
            <div className='tiktokProfile'>
              <img src={others} alt="" />
              <div className="">
              <Link 
              
              >
              <h2>your name</h2>
             </Link>
                <span>your caption</span>
              </div>
            </div>
            <div className="tiktok_mingle">
              <button>mingle</button>
            </div>
          </div>
          <div className="main_bg">
            <div className="video-container">
              {/* <video ref={videoRef} controls={false} autoPlay loop onDoubleClick={handleDoubleClick} onEnded={handleVideoEnded}>
                <source src={sleeping} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <img src={port} alt="" />
            </div>
              
          </div>
          <div className="HomePage_Upper">
            <div className='tiktokProfile'>
              <img src={others} alt="" />
              <div className="">
              <Link 
              
              >
              <h2>your name</h2>
             </Link>
                <span>your caption</span>
              </div>
            </div>
            <div className="tiktok_mingle">
              <button>mingle</button>
            </div>
          </div>
          <div className="main_bg">
            <div className="video-container">
              {/* <video ref={videoRef} controls={false} autoPlay loop onDoubleClick={handleDoubleClick} onEnded={handleVideoEnded}>
                <source src={sleeping} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <img src={port} alt="" />
            </div>
              
          </div>
          <div className="HomePage_Upper">
            <div className='tiktokProfile'>
              <img src={others} alt="" />
              <div className="">
              <Link 
              
              >
              <h2>your name</h2>
             </Link>
                <span>your caption</span>
              </div>
            </div>
            <div className="tiktok_mingle">
              <button>mingle</button>
            </div>
          </div>
          <div className="main_bg">
            <div className="video-container">
              {/* <video ref={videoRef} controls={false} autoPlay loop onDoubleClick={handleDoubleClick} onEnded={handleVideoEnded}>
                <source src={sleeping} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <img src={port} alt="" />
            </div>
              
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default HeroPage;
