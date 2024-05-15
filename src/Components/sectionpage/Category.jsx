// TestimonialSlider.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
 
const testimonialData = [
  {
    id: 1,
    name: "John Doe",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis."
  },
  {
    id: 2,
    name: "Jane Smith",
    content: "Sed euismod neque sed nisi feugiat, et egestas libero ultricies. Duis."
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1));
  };

  return (
    <div className="testimonial-slider">
      {/* SVG Icon */}
      {/* <div className="icon-container">
 
      </div> */}

      <AnimatePresence initial={false}>
        {testimonialData.map((testimonial, index) => (
          index === activeIndex && (
            <motion.div
              key={testimonial.id}
              className="testimonial-box"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-content">
                <p>{testimonial.content}</p>
                <span>{testimonial.name}</span>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TestimonialSlider;
