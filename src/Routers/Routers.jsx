import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Banner from '../Components/HomePage/Banner';
import { Login } from '../Components/Registeration/Login';
import { SignUp } from '../Components/Registeration/SignUp';
 

const Routers = () => {
  return ( 
    <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Banner />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </Router>
    
    )
}

export default Routers