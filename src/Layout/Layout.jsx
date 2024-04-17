import React from 'react'
import Headers from '../Components/Headers/Headers'
 import "../css_loaders/styles.css"
import { Homesection } from '../Components/HomePage/Homesection'
import TestimonialSlider from './../Components/sectionpage/Category';
  export const Layout = () => {
    
  return (
    <>
    <div className=''>
      <Headers/>
      <div className="contains">
        <Homesection/>
      </div>
      <div className="">
        <TestimonialSlider/>
      </div>
        {/* <Headers backgroundImage={backgroundImage}/>
        <Routers backgroundImage={backgroundImage}/> */}
    </div>
    </>
  )
}
