import React from 'react'
import { BsFillBalloonFill, BsXbox } from 'react-icons/bs';
import { CiPercent } from "react-icons/ci";
import { GiLovers } from 'react-icons/gi';
import { MdMarkEmailUnread } from 'react-icons/md';
export const FlashDeals = () => {

    const flashDealer = [
        { icons_late: <CiPercent />, Contents: 'Discover up to 1000 matches with our intelligent two-way matching feature.', },
        { icons_late: <GiLovers />, Contents: 'Find someone special with one of our many search options and add those you like to your Favourites.', },
        { icons_late: <MdMarkEmailUnread />, Contents: 'When you are ready, contact members using an easy and private messaging interface', },
        { icons_late: <BsFillBalloonFill />, Contents: 'See what you have in common with others at a glance', },
        { icons_late: <BsXbox />, Contents: 'You are in control block members who do not meet your standards or report unsavoury members', },
       
        // Add more flashcard objects as needed
      ];
  return (
    <>
    <div className="flashSliders">
        <div className="flash_container">
            <div className="sectionFlash">
            <h2>Your tools to <span className='colored'>find</span> your perfect <span className='colored'> Match</span></h2>
            </div>
            <div className="grid_display">
                {flashDealer.map((items,index)=>(
                   <div key={index} className="">
                    <div className="mainboard">
                        <i>{items.icons_late}</i>
                        <p>{items.Contents}</p>
                    </div>
                   </div> 
                ))}
            </div>
        </div>
    </div>
    </>
  )
}
