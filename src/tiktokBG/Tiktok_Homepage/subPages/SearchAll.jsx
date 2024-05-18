import React, { useState } from 'react';
import './SearchPage.css';

const SearchPages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    /* Simulated search functionality
    Replace this with actual search logic */
    const results = [
      { id: 1, username: 'john_doe', gender: 'male', videoCount: 5 },
      { id: 2, username: 'jane_smith', gender: 'female', videoCount: 3 },
      // Add more search results as needed
    ].filter(result => 
      result.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.videoCount.toString().includes(searchTerm)
    );
    setSearchResults(results);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-page">
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={handleInputChange} placeholder="Search users, gender, or videos..." />
        <button type="submit">Search</button>
      </form>
      <div className="search-results">
        {searchResults.length > 0 ? (
          searchResults.map(result => (
            <div key={result.id} className="search-result">
              <p>Username: {result.username}</p>
              <p>Gender: {result.gender}</p>
              <p>Videos: {result.videoCount}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchPages;
