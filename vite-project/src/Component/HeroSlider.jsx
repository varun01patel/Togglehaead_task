import React, { useState, useEffect } from 'react';
import "../App.css"
import slide1 from '../assets/slide1.jpg'; 
import slide2 from '../assets/slide2.jpg'; 

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: slide1,
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit .',
    },
    {
      id: 2,
      image: slide2,
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slider-item ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slide.image} alt={`Slide ${slide.id}`} />
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <button>Know More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
