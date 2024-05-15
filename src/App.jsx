import React, { useState, useEffect } from 'react';
import './App.css';
 import Preloader from './Loading/Loading';
import { Pages } from './Page/Pages';
 
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay with setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay time as needed

    // Clear the timeout if the component unmounts before the timeout finishes
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
     {isLoading ? (
        <Preloader /> // Render the Preloader component while loading
      ) : (
        <Pages />
      )}
    </>
  );
}

export default App;
