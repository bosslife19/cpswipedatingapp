// UploadDetailsPage.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../../../css_loaders/styles.css"
import { Nav } from './../../tiktok_Navbar/Nav';
import { Leftside } from './../../LeftSide_tiktok/Leftside';
const UploadDetailsPage = () => {
  const location = useLocation();
  const [name, setName] = useState('');
  const [caption, setCaption] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
 
    

  return (
    <>
    <Nav/>
    <div className="display_sideways">
       <Leftside/>
    <div className="upload-details-page">
      
      <div className="display_flex">
      
      <form >
      <h1>Upload Details</h1>
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
      <div className='files'>
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
