// SearchPage.js
import React, { useState } from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Nav } from '../../tiktok_Navbar/Nav';
import { Leftside } from '../Leftside';
import bennie from "../../../assets/pack.jpg"
import axiosClient from '../../../axiosClient';
const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async(e) => {
    e.preventDefault();

    try {
      const res = await axiosClient.post('/user/search', {username:searchTerm});

      setSearchResults(res.data)
    } catch (error) {
      
    }
    // Simulated search functionality
    // Replace this with actual search logic
    
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

 

  return (
    <>
     <Nav/>
     <div className="display_sideways">
        <Leftside/>
     <div className="search-page">
       
       <h1>Search</h1>
       <div className="searching_contains">
       <form onSubmit={handleSearch}>
         <input type="text" value={searchTerm} onChange={handleInputChange} placeholder="Search partners..." />
         <button type="submit">
           <FaSearch/>
         </button>
       </form>
       {searchResults? (
           searchResults.map(result => (
             <div key={result.id} className="search-result">
               <Link to={`/profile-page/${result.id}`}>
               <h3>{result.username}</h3>
               </Link>
              
              
             </div>
           ))
         ) : (
           <p>No results found</p>
         )}
        
       </div>
     </div>
     </div>
    </>
   
  );
};

export default SearchPage;
