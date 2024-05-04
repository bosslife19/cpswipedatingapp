// UploadDetailsPage.js
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../../../css_loaders/styles.css"
import { Nav } from './../../tiktok_Navbar/Nav';
import { Leftside } from './../../LeftSide_tiktok/Leftside';
import axiosClient from '../../../axiosClient';
import { AppContext } from '../../../main';
const UploadDetailsPage = () => {
  const location = useLocation();
  const [name, setName] = useState('');
  const [caption, setCaption] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const navigate = useNavigate();
  const {appState, setAppState} = useContext(AppContext);

  const currentUser = JSON.parse(appState.user);

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    // Save uploaded content to local storage
    const content = {
      file: location.state.file,
      name: name,
      caption: caption,
      scheduleDate: scheduleDate
    };

    try {
      const res = await axiosClient.post('/user/upload', {image: content.file},{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      console.log(res.data)
      localStorage.setItem('uploadedContent', JSON.stringify(content));

      // setAppState({...appState,});
      
      
    
     

      // Navigate back to profilepage
      navigate(`/profile`);
    } catch (error) {
      console.log(error)
    }

    
  }; 

  return (
    <>
    <Nav/>
    <div className="display_sideways">
       <Leftside/>
    <div className="upload-details-page">
      
      <div className="display_flex">
      
      <form onSubmit={handleSubmit}>
      <h1>Upload Details</h1>
        <div>
           {/* <input disabled
            // type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          /> */}
        </div>
        <div>
          <label >Caption</label>
           <input
            type="text"
            id="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>
        <div>
        
           <input
            type="date"
            id="scheduleDate"
            value={scheduleDate}
            onChange={(e) => setScheduleDate(e.target.value)}
          />
        </div>
        
        <button type="submit">Upload</button>
      </form>
      <div className='file'>
         {location.state.file.type.startsWith('image/') ? (
          <img src={URL.createObjectURL(location.state.file)} alt="Uploaded Content" />
        ) : (
          <video controls>
            <source src={URL.createObjectURL(location.state.file)} type={location.state.file.type} />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default UploadDetailsPage;
