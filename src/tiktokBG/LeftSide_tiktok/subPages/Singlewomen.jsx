// SingleWomenPage.js
import  { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 
import { Nav } from '../../tiktok_Navbar/Nav';
import { Leftside } from '../Leftside';
import { ThreeDots } from 'react-loader-spinner';
import axiosClient from '../../../axiosClient';
import { AppContext } from '../../../main';

const SingleWomenPage = () => {
 const [ singleWomenProfiles, setSinglWomenProfiles] = useState([])
 const [loading, setLoading] = useState(false);
 const {appState} = useContext(AppContext)
 const user = JSON.parse(appState.user);


 const getWomen = async()=>{
  setLoading(true)
  try {
    
    const res = await axiosClient.get(`/user/women/${user.id}`)
    console.log(res.data)
    setLoading(false);
    setSinglWomenProfiles(res.data)
  } catch (error) {
    console.log(error)
  }
 
 }

 useEffect(()=>{
  getWomen()
 }, [])


  return (
    <>
   {
    loading? (<div style={{ width: 200, margin: "auto", marginTop: 300 }}>
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
  </div>): (
    <> 

 
    <div className="display_sideways">
       <Leftside/>
    <div className="single-women-page">
    <Nav/>
      <h1>Single Women</h1>
      <div className="profiles_ladies">
        {singleWomenProfiles.map(profile => (
          <div 
          key={profile.id}
           className="profile-card">
               <Link 
               to={`/profile-page/${profile.id}`}
               >
              <img 
              // src={peopled}
              src={profile.profileImg} alt={profile.username}
               />
            </Link>
            <h3>
            {/* dldldm */}
            {profile.username}
            </h3>
            <p>
            {/* dldlllflfk */}
            {profile.caption}
            </p>
          </div>
         
        ))}
      </div>
    </div>
    </div>
    </>
    )
   }
    </>
  );
};

export default SingleWomenPage;
