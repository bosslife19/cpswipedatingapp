import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Spin } from 'antd';
import { AllTiktok_Section } from './Components/TiktokProfiles/AllTiktok_Section';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ translateY: 0 }}
      animate={{ translateY: [-20, 20, -20] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999, // Ensure it's above other elements
      }}
    >
      <Spin size="large" />
    </motion.div>
  );
};

const MainTiktokPages = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <AllTiktok_Section />
      )}
    </>
  );
};

export default MainTiktokPages;
