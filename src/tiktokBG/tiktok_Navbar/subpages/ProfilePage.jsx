// ProfilePage.js
import React, { useState } from 'react';
import port from "../../../assets/pack.jpg"
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
const ProfilePage = () => {
  const [posts, setPosts] = useState([
    { id: 1, content: 'Post 1', date: '2024-04-01', likes: 10 },
    { id: 2, content: 'Post 2', date: '2024-04-02', likes: 15 },
    { id: 3, content: 'Post 3', date: '2024-04-03', likes: 20 },
    { id: 3, content: 'Post 4', date: '2024-04-05', likes: 50 },
    { id: 3, content: 'Post 5', date: '2024-04-06', likes: 60 },
    { id: 3, content: 'Post 6', date: '2024-04-07', likes: 70 },
    // Add more posts as needed
  ]);

  const [filter, setFilter] = useState('date');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const sortByDate = () => {
    setPosts([...posts.sort((a, b) => new Date(b.date) - new Date(a.date))]);
  };

  const sortByPopularity = () => {
    setPosts([...posts.sort((a, b) => b.likes - a.likes)]);
  };

  return (
    <div className="profile-page">
      <Link to="/admin">
        <FaArrowLeftLong/>
      </Link>
      <div className="profile_contains">
      <div className="profile-header">
        <img src={port} alt="Profile" />
        <h1>John Doe</h1>
        <p>Captions here...</p>
      </div>
      <div className="filters">
        <select value={filter} onChange={handleFilterChange}>
          <option value="date">Date</option>
          <option value="popularity">Popularity</option>
        </select>
        <button onClick={filter === 'date' ? sortByDate : sortByPopularity}>
          Sort by {filter === 'date' ? 'Date' : 'Popularity'}
        </button>
      </div>
      <div className="posts">
        {posts.map(post => (
          <div key={post.id} className="post">
            <p>{post.content}</p>
            <p>Date: {post.date}</p>
            <p>Likes: {post.likes}</p>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default ProfilePage;
