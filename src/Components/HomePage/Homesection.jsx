import { Link } from "react-router-dom"

export const Homesection = () => {


 
  return (
    <>
      <section className="Homes">
      <div className="Homes_container">
        <div className="section_bg">
          <h2> <span className="Pinks">Meet</span> new and interesting <span className="Pinks">people.</span></h2>
        <p>Join Cherry Palace Swipe LLC, where you could meet anyone, anywhere!</p>
        <div className="bg_sect_btn">
          <Link to="/">
            <button>Get Started</button>
          </Link>
          <Link to="/">
            <button>Know More</button>
          </Link>
        </div>
        </div>
        <div className="section_2_bg">
          <div className="div_section">
          <img src="https://cpswipe.com/upload/photos/2023/12/LTau4nMNOijntVCxYtKX_full.jpg"/>
            <div className="contentsPadding">
              <p>CPSwipe will use this section/page to import user data from instagram!!!!</p>
               <span>Find your Match Here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
