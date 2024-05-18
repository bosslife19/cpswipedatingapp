 import Fullsec from "../Fullsec";
import HeartD from "../HeartDouble";
import Locks from "../Lock";

 
const Secbanner = () => {
    const flashDealer = [
        { icons_late: <HeartD />, Contents: 'Find your best match', Para: "Based on your location, we find best and suitable matches for you."},
        { icons_late: <Fullsec />, Contents: 'Fully secure & encrypted',Para: "Your account is safe on Quickdate. We never share your data with third party." },
        { icons_late: <Locks />, Contents: '100% data privacy',Para: "You have full control over your personal information that you share." },
        
    ];
    
  return (
    <>
    <div className="HowItsWorks2">
        <div className="HowItsWorks2_Container">
            <div className="how_leftSide2">
                <h4>Why Quickdate is the best platform?</h4>
                <p>Quickdate, where you could meet anyone digitally! It's a complete fun to find a perfect match for you and continue to hook up. Real time messaging & lot of features that keeps you connected with your love 24x365 days.</p>
                
            </div>
            <div className="How_rightside2">
               {flashDealer.map((items,index)=>(
                <div className="" key={index}>
                <section className="HowitworksScetion2">
                <div className="creat_acc2">
                    <span>{items.icons_late}</span>
                </div>
                <div className="Howitworks_contents2">
                <h3>{items.Contents}</h3>
                <p>{items.Para}</p>
                </div>
                </section>
                </div>
               ))}
                
                
            </div>
 
        </div>
    </div>
    </>
  )
}

export default Secbanner
