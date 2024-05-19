// SingleMenPage.js
import {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
// import peopled from "../../../assets/pack.jpg"
// import peoples from "../../../assets/depositPhotos.webp"
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
       <h1>Single men</h1>
       <div className="profiles_ladies">
         {singleMenProfiles.map(profile => (
         <div className="" key={profile.id}>
           <div 
            className="profile-card">
            <div className="HomePage_Upper">
                   <div className="tiktokProfile">
                        <Link
                        to={`/profile-page/${user.id}`
                        }   
                        >
                         <img 
                          src={user.profileImg}
                          alt="" />
                       </Link>
                     <div className="heads">
                          <Link 
                         to={`/profile-page/${user.id}`}
                         >
                           <h2>
                          
                           {profile.username}
                           </h2>
                         </Link>
                       <p> {profile.caption}</p>
                     </div>
                   </div>
                   <div className="tiktok_mingle">
                        <button disabled>Subscribed</button>
                    
                   </div>
                 </div>
                <Link 
                to={`/profile-page/${profile.id}`}
                >
               <img src={profile.profileImg} alt={profile.name} />

             </Link>
             
           </div>
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

export default SingleMenPage;
