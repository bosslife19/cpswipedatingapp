// PeopleInYourAreaPage.js
import React, { useState, useEffect, useContext } from "react";
import peopled from "../../../assets/pack.jpg";
import peoples from "../../../assets/depositPhotos.webp";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Leftside } from "../Leftside";
import { Nav } from "../../tiktok_Navbar/Nav";
import { AppContext } from "../../../main";
import axiosClient from "../../../axiosClient";
import { ThreeDots } from "react-loader-spinner";

const PeopleInYourAreaPage = () => {
  const people = [
    {
      id: 1,
      name: "john-doe",
      imageUrl: peoples,
      caption: "Loves hiking and photography",
    },
    {
      id: 2,
      name: "jane-smith",
      imageUrl: peopled,
      caption: "Enjoys cooking and traveling",
    },
    // Add more people as needed
  ];

  const [subscribed, setSubscribed] = useState([]);
  const [loading, setLoading] = useState(false);

  const { appState } = useContext(AppContext);

  const user = JSON.parse(appState.user);

  const getSubscribed = async () => {
    setLoading(true);
    try {
      const res = await axiosClient.get(`/user/subscribed/${user.id}`);
     
      setLoading(false);

      setSubscribed(res.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSubscribed();
  }, []);

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
          <Nav />
          <div className="display_sideways">
            <Leftside />
            <div className="people-in-your-area-page">
              <h1>connect now</h1>
              <div className="people-grid">

                {
                  subscribed.subscribed_users?.map((person,index)=>(
                    <div key={person.id} className="person-card">
                    <Link to={`/profile-page/${person.id}`}>
                      <img src={person.profileImg} alt={person.username} />
                    </Link>
                    <div className="captions">
                      <h3>{person.username}</h3>
                      {/* <p>{person.caption}</p> */}
                    </div>
                  </div>
                  ))
                }
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PeopleInYourAreaPage;
