// SearchPage.js
import React, { useState } from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Nav } from '../../tiktok_Navbar/Nav';
import { Leftside } from '../Leftside';
import bennie from "../../../assets/pack.jpg"
const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Simulated search functionality
    // Replace this with actual search logic
    const results = [
      { id: 1, name: 'John Doe', caption: "money on my mind" },
      { id: 2, name: 'Jane Smith', caption:"money on my mind"  },
      // Add more search results as needed
    ].filter(result => result.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSeeAll = () => {
    // Navigate to the page displaying all search results
    // You can implement this according to your routing logic
    console.log("See all search results");
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
       {searchResults.length > 0 ? (
           searchResults.map(result => (
             <div key={result.id} className="search-result">
               <Link to={`/profile-page/:id`}>
               <h3>{result.name}</h3>
               </Link>
               <span>{result.caption}</span>
               <button  onClick={handleSeeAll}>See All</button>
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
