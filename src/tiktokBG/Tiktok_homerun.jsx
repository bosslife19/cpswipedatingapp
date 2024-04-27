import React from 'react'
import { HeroPage } from './Tiktok_Homepage/HeroPage'
import { Leftside } from './LeftSide_tiktok/Leftside'
import Appssss from './Tiktok_Homepage/SideberItems'
 
export const Tiktok_homerun = () => {
  return (
    <>
    <div className="flex">         
        {/* <Leftside/> */}
        <Appssss/>
         <HeroPage/>
     </div>
    </>
  )
}
