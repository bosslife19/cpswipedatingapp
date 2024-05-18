import { useContext } from 'react'
import Headers from '../Components/Headers/Headers'
 import "../css_loaders/styles.css"
import { Homesection } from '../Components/HomePage/Homesection'
 import { FlashDeals } from '../Components/sectionpage/FlashSlider';
import FlashCard from '../Components/sectionpage/Category';
import { Footer } from '../Components/footer/Footer';
import { Navigate, Outlet } from 'react-router-dom';
import { AppContext } from '../main';
import CircleEffectBanner from '../Components/sections';
import Secbanner from '../Components/sectionpage/secbanner';
import RowBanner from '../Components/sectionpage/RowBanner';
  export const Layout = () => {
    
  return (
    <>
     <div className='site_page'>
      <Headers/>
      <div className="CircleEffectBanner">
      <CircleEffectBanner/>
      </div>
      <div className="home_bg">
        <Homesection/> 
      </div>
      
      <div className="">
       <FlashCard/>
       
      </div>
      <div className="">
        <FlashDeals/>
        <Secbanner/>
      </div>
      <div className="">
      <div className="circled">
      <CircleEffectBanner/>
      </div>
        <RowBanner/>
        
      </div>
      
      <div className="">
        <Footer/>
      </div>
        {/* <Headers backgroundImage={backgroundImage}/>
        <Routers backgroundImage={backgroundImage}/> */}
    </div>
    </>
  )
}
 export const ProtectedLayout = ()=>{

  const {appState} = useContext(AppContext)

  if(!appState.user){
    return (
      <Navigate to='/login' />
    )
  }

  else{
    return <Outlet/>
  }


}