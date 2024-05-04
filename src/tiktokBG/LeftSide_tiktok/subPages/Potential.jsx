// PotentialMatchesPage.js
import React, { useContext, useEffect, useState } from "react";
import make from "./../../../assets/depositPhotos.webp";
import life from "../../../assets/depositPhotos.webp";
import lifes from "../../../assets/depositPhotos.webp";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Nav } from "../../tiktok_Navbar/Nav";
import { ThreeDots } from "react-loader-spinner";
import { Leftside } from "../Leftside";
import axiosClient from "../../../axiosClient";
import { AppContext } from "../../../main";

const PotentialMatchesPage = () => {
  const [potentialMatches, setPotentialMatches] = useState([
    // Add more potential matches as needed
  ]);
  const [loading, setLoading] = useState(false);

  const { appState } = useContext(AppContext);

  const user = JSON.parse(appState.user);

  const getPotentials = async () => {
    setLoading(true);
    try {
      const res = await axiosClient.get(`/user/potentials/${user.id}`);
      setLoading(false);
      
      setPotentialMatches(res.data)
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPotentials();
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
            <div className="potential">
              <div className="potential_contains">
                {potentialMatches.map((match) => (
                  <div key={match.id} className="match">
                    <Link to={`/profile-page/${match.id}`}>
                      <img src={match.profileImg} alt={match.username} />
                    </Link>
                    <div className="other_potential">
                      <h3>{match.username}</h3>
                      
                    </div>
                    <button style={{backgroundColor:'teal', color:"white", padding:'5px 8px', borderRadius:3}}>Subscribe</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PotentialMatchesPage;
