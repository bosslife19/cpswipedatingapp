import CircleEffectBanner from "../sections";
import IconSVG from "../StartDating";
import CustomSVGIcon from "../FindMatch";
import CreateSVG from "../CreateAcc";
  
 
export const FlashDeals = () => {
    const flashDealer = [
        { icons_late: <CreateSVG />, Contents: 'Create Account', Para: "Register your account with quick and easy steps, when you finish you will get a good looking profile."},
        { icons_late: <CustomSVGIcon />, Contents: 'Find Matches',Para: "Search & connect with matches which are perfect for you to date, it's easy & a complete fun." },
        { icons_late: <IconSVG />, Contents: 'Start Dating',Para: "nteract using our user friendly platform, Initiate conversations in mints. Date your best matches." },
        
    ];
    
  return (
    <>
    <div className="HowItsWorks">
        <div className="HowItsWorks_Container">
            <div className="how_leftSide">
                <h4>How it Works</h4>
                <p>We have made it easy for you to have fun while you use our Quickdate platform.</p>
                
            </div>
            <div className="How_rightside">
               {flashDealer.map((items,index)=>(
                <div className="" key={index}>
                <section className="HowitworksScetion">
                <div className="creat_acc">
                    <span>{items.icons_late}</span>
                </div>
                <div className="Howitworks_contents">
                <h3>{items.Contents}</h3>
                <p>{items.Para}</p>
                </div>
                </section>
                </div>
               ))}
                
                
            </div>
            <div className="CircleEffectBannerFlash">
                <CircleEffectBanner/>
                </div>
        </div>
    </div>
    </>
  )
}
