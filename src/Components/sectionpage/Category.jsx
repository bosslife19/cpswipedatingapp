import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { FaComment, FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const flashcards = [
  { name: 'Gabe', rating: 4, Contents: 'i love this platform this place have shown me what real dating is all about', },
  { name: 'peter', rating: 5, Contents: 'this platform makes it easier for us to find ladies Haha i love this', },
  { name: 'jessica', rating: 3, Contents: 'why cant i see men that are not after my money i need a man please', },
  { name: 'john Davies', rating: 3, Contents: 'i found my wife in this place i thank God i found this website on time before some ladies ruin my mind about dating', },
  { name: 'angela flowealth', rating: 3, Contents: 'this place brings memories i found my husband here am really happy my friend showed me this website', },
  { name: 'benson Alexander', rating: 3, Contents: ' At first i thought this place is full of ladies that breaks heart then i found someone my heart beats for am glad i saw this website on ad', },
];

const NextArrow = ({ onClick }) => (
  <div className="control-btn" onClick={onClick}>
    <button className="next">
      <i className="fa fa-arrow-right"></i>
    </button>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="control-btn" onClick={onClick}>
    <button className="prev">
      <i className="fa fa-arrow-left"></i>
    </button>
  </div>
);

const FlashCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  function getSlidesToShow() {
    const width = window.innerWidth;
    if (width >= 768) {
      return 4;
    } else if (width >= 480) {
      return 2;
    } else {
      return 1;
    }
  }

  window.addEventListener('resize', () => {
    const newSlidesToShow = getSlidesToShow();
    if (newSlidesToShow !== settings.slidesToShow) {
      settings.slidesToShow = newSlidesToShow;
    }
  });

  return (
    <Slider {...settings}>
      {flashcards.map((flashcard, index) => (
        <motion.div
          key={index}
          className="box"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="productef ">
            <div className="slider_container">
              <div className="product_details">
                <h3>{flashcard.name}</h3>
                <div className="Contents">
                  <p>{flashcard.Contents}</p>
                </div>
                <div className="rate">
                  {[...Array(flashcard.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </Slider>
  );
};

export default FlashCard;
