import React, { useState, useEffect, useRef } from 'react';
import Promo1 from '../img/Promo1.jpg'
import Promo2 from '../img/Promo2.jpg'
import Promo3 from '../img/Promo3.jpg'
import Promo4 from '../img/Promo4.jpg'
import Promo5 from '../img/Promo5.jpg'
import Promo6 from '../img/Promo6.jpg'
import Promo7 from '../img/Promo7.jpg'
import Promo8 from '../img/Promo8.jpg'
import Promo9 from '../img/Promo9.jpg'

const events = [
  {
    id: 1,
    imageUrl: Promo1,
    link: "https://www.instagram.com/beningsclinic_pekanbaru",
  },
  {
    id: 2,
    imageUrl: Promo2,
    link: "https://www.instagram.com/beningsclinic_pekanbaru",
  },
  {
    id: 3,
    imageUrl: Promo3,
    link: "https://www.instagram.com/beningsclinic_pekanbaru",
  },
  {
    id: 4,
    imageUrl: Promo4,
    link: "https://www.instagram.com/beningsclinic_pekanbaru",
  },
  {
    id: 5,
    imageUrl: Promo5,
    link: "https://www.instagram.com/beningsclinic_pekanbaru",
  },
  {
    id: 6,
    imageUrl: Promo6,
    link: "https://www.instagram.com/beningsclinic_pekanbaru",
  },
  {
    id: 7,
    imageUrl: Promo7,
    link: "https://www.instagram.com/beningsclinic_pekanbaru",
  },
  {
    id: 8,
    imageUrl: Promo8,
    link: "https://www.instagram.com/beningsclinic_pekanbaru",
  },
  {
    id: 9,
    imageUrl: Promo9,
    link: "https://www.instagram.com/beningsclinic_pekanbaru",
  },

];


const EventPromoSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselWrapperRef = useRef(null);
  const [cardsPerView, setCardsPerView] = useState(1);
  const cardMarginRight = 20; 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) { 
        setCardsPerView(3);
      } else if (window.innerWidth >= 1024) {
        setCardsPerView(2.5);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(1.5);
      } else { 
        setCardsPerView(1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = events.length;
  const maxIndex = Math.max(0, Math.ceil(totalItems - cardsPerView));

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsPerView, currentIndex, maxIndex]);

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 text-center font-judson">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Judson:wght@400;700&display=swap');
        .font-judson { font-family: 'Judson', serif; }
        `}
      </style>

      <h2 className="text-4xl sm:text-5xl font-bold text-[#DEA05B] mb-4">
        Event & Promo Spesial
      </h2>
      <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
        Jangan lewatkan penawaran terbatas dan event menarik dari Bening's Clinic!
      </p>

      <div className="relative max-w-7xl mx-auto overflow-hidden">
        <div
          ref={carouselWrapperRef}
          className="flex transition-transform ease-out duration-300"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`, marginLeft: `-${cardMarginRight / 2}px`,}} >
          {events.map((event) => (
            <div
              key={event.id}
              className="flex-shrink-0 px-[10px] py-1"
              style={{  width: `calc(${100 / cardsPerView}% - ${cardMarginRight}px)`, marginRight: `${cardMarginRight}px`, }} >
              <div className="eventCardWrapper bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center h-full">
                {/* Aspect Ratio Wrapper - Adjusted for your ~1:1.13 ratio */}
                <div className="w-full relative pb-[113.27%] mb-4 rounded-md overflow-hidden border border-gray-100"> 
                  <img src={event.imageUrl} alt={event.title}
                    className="absolute top-0 left-0 w-full h-full object-cover" 
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x679/CCCCCC/333333?text=Promo+Image"; }} />
                </div>
                <h3 className="font-semibold text-gray-800 text-xl mb-2">{event.title}</h3>
                <a href={event.link} target="_blank"
                  rel="noopener noreferrer" className="inline-block bg-[#DEA05B] text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-600 transition duration-300 text-sm mt-auto" >
                  Lihat Detail
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {currentIndex > 0 && (
          <button onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-[#DEA05B]"
            aria-label="Previous event">
            <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
        )}
        {currentIndex < maxIndex && (
          <button onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-[#DEA05B]"
            aria-label="Next event">
            <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        )}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: maxIndex + (cardsPerView < 1 ? 1 : 0) }).map((_, idx) => (
          <span key={idx} className={`block w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${currentIndex === idx ? 'bg-[#DEA05B]' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`} ></span>
        ))}
      </div>
    </section>
  );
};

export default EventPromoSection;