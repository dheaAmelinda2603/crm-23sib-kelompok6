import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Putri Anggraini",
    feedback: "Perawatan di Bening's Clinic sangat luar biasa! Kulit saya terasa lebih sehat dan cerah. Sangat puas dengan hasilnya, bahkan setelah beberapa kunjungan. Setiap detail diperhatikan dengan seksama.",
    avatarUrl: "https://placehold.co/100x100/ADD8E6/FFFFFF?text=PA", 
    rating: 5,
  },
  {
    id: 2,
    name: "Rizky Firmansyah",
    feedback: "Tempatnya nyaman dan stafnya sangat profesional. Selalu betah setiap kali perawatan. Sangat direkomendasikan untuk pria juga yang peduli dengan kesehatan kulit mereka!",
    avatarUrl: "https://placehold.co/100x100/FFD700/333333?text=RF",
    rating: 5,
  },
  {
    id: 3,
    name: "Dewi Lestari",
    feedback: "Produk-produk Bening's sangat efektif dan aman untuk kulit sensitif saya. Kulit saya kini jauh lebih baik dan tidak ada lagi iritasi. Terima kasih banyak atas rekomendasi terbaiknya!",
    avatarUrl: "https://placehold.co/100x100/C0C0C0/FFFFFF?text=DL", 
    rating: 4,
  },
  {
    id: 4,
    name: "Joko Santoso",
    feedback: "Konsultasi yang mendalam dan solusi yang tepat sasaran. Saya melihat peningkatan signifikan setelah beberapa sesi perawatan. Mereka benar-benar mengerti kebutuhan kulit saya.",
    avatarUrl: "https://placehold.co/100x100/FFB6C1/333333?text=JS", 
    rating: 5,
  },
  {
    id: 5,
    name: "Lina Marlina",
    feedback: "Pelayanan yang ramah dan cepat. Perawatan wajahnya membuat saya merasa segar dan muda kembali. Pasti akan jadi langganan setia di Bening's Clinic!",
    avatarUrl: "https://placehold.co/100x100/B0E0E6/333333?text=LM", 
    rating: 4,
  },
  {
    id: 6,
    name: "Faisal Rahman",
    feedback: "Klinik ini punya teknologi canggih dan hasilnya sesuai ekspektasi. Sangat cocok bagi yang mencari perawatan kulit serius dengan hasil yang nyata.",
    avatarUrl: "https://placehold.co/100x100/DAA520/FFFFFF?text=FR", 
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.167c.969 0 1.371 1.24.588 1.81l-3.36 2.441a1 1 0 00-.364 1.118l1.287 3.951c.3.921-.755 1.688-1.54 1.118l-3.36-2.441a1 1 0 00-1.176 0l-3.36 2.441c-.785.57-1.84-.197-1.54-1.118l1.287-3.951a1 1 0 00-.364-1.118L2.001 9.387c-.783-.57-.38-1.81.588-1.81h4.167a1 1 0 00.95-.69l1.286-3.95z" />
      </svg>
    );
  }
  return <div className="flex items-center justify-center space-x-1 mb-2">{stars}</div>;
};

function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselWrapperRef = useRef(null);
  const [cardsPerView, setCardsPerView] = useState(1);
  const cardMarginRight = 15; 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) { 
        setCardsPerView(2.5);
      } else if (window.innerWidth >= 1024) { 
        setCardsPerView(2);
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

  const totalItems = testimonials.length;
  const maxIndex = Math.max(0, totalItems - Math.floor(cardsPerView));

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
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 text-center" style={{ fontFamily: 'Judson, judson' }}>
      <h2 className="text-4xl sm:text-5xl font-bold text-[#DEA05B] mb-4">
        #SahabatBening
      </h2>
      <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
        Dengarkan apa kata mereka yang telah merasakan langsung manfaat perawatan di Bening's Clinic. Kepuasan Anda adalah prioritas kami.
      </p>

      <div className="relative max-w-7xl mx-auto overflow-hidden">
        {/* Swiper Wrapper - Mengandung semua kartu dan menerapkan pergeseran */}
        <div ref={carouselWrapperRef} className="flex transition-transform ease-out duration-300"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,  marginLeft: `-${cardMarginRight / 2}px`, 
          }} >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-shrink-0 px-[10px] py-1" 
              style={{ width: `calc(${100 / cardsPerView}% - ${cardMarginRight}px)`,  marginRight: `${cardMarginRight}px`,
              }} >
              <div className="testimonyWrapper bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center h-full"> 
                <div className="profile mb-2"> 
                  <img src={testimonial.avatarUrl}  alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mx-auto mb-1 border-2 border-[#DEA05B]" 
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/64x64/CCCCCC/333333?text=User"; }} />
                  <h4 className="font-semibold text-gray-800 text-base">{testimonial.name}</h4>
                </div>
                <StarRating rating={testimonial.rating} />
                <p className="testimony text-gray-700 text-sm italic flex-grow mb-2"> 
                  "{testimonial.feedback}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Navigasi */}
        {currentIndex > 0 && (
          <button onClick={goToPrevious} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-[#DEA05B]" aria-label="Testimonial sebelumnya" >
            <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7">
              </path></svg>
          </button>
        )}
        {currentIndex < maxIndex && (
          <button onClick={goToNext} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-[#DEA05B]"
            aria-label="Testimonial berikutnya">
            <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7">
              </path>
              </svg>
          </button>
        )}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <span key={idx}
            className={`block w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
              currentIndex === idx ? 'bg-[#DEA05B]' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}></span>
        ))}
      </div>
    </section>
  );
}

export default Review;
