import React from 'react'
import { HeroPage } from './Tiktok_Homepage/HeroPage'
import { Leftside } from './LeftSide_tiktok/Leftside'

export const Tiktok_homerun = () => {
  return (
    <>
    <div className=" Tiktokapp">         
        <Leftside/>
        <div className="main_content">
        <HeroPage/>
        </div>
    </div>
    </>
  )
}
