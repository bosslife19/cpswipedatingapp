// SingleMenPage.js
import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import peopled from "../../../assets/pack.jpg"
import peoples from "../../../assets/depositPhotos.webp"
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Leftside } from '../Leftside';
import { Nav } from '../../tiktok_Navbar/Nav';
import { ThreeDots } from 'react-loader-spinner';
import axiosClient from '../../../axiosClient';
import { AppContext } from '../../../main';

const SingleMenPage = () => {
  const [ singleMenProfiles, setSingleMenProfiles] = useState([])
  const [loading, setLoading] = useState(false);
  const {appState} = useContext(AppContext)
  const user = JSON.parse(appState.user);
 
 
  const getMen = async()=>{
   setLoading(true)
   try {
     
     const res = await axiosClient.get(`/user/men/${user.id}`)
     console.log(res.data)
     setLoading(false);
     setSingleMenProfiles(res.data)
   } catch (error) {
     console.log(error)
   }
  
  }
 
  useEffect(()=>{
   getMen()
  }, [])
 

  return (
    <>
   
    <div className="display_sideways">
       <Leftside/>
    <div className="single-men-page">
    <Nav/>
      <h1>Single Men</h1>
      <div className="profilemen">
        {singleMenProfiles.map(profile => (
          <div key={profile.id} className="profile-card">
          <Link to={`/profile-page/${profile.id}`}>
              <img src={profile.profileImg} alt={profile.name} />
            </Link>
            <h3>{profile.username}</h3>
            <p>{profile.caption}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default SingleMenPage;
