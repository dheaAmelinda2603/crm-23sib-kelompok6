import React, { useState, useEffect, useRef } from 'react';
import Hifu from "../assets/hifu.jpg";
import Prp from "../assets/prp.jpg";

const treatmentSlides = [
  {
    id: 1,
    title: "Treatment Laser Picosure",
    description: "Salah satu laser Terbaik, Tercanggih dan Termahal di dunia. Laser ini dapat menghilangkan kerutan halus, pigmentasi, memudarkan flek dan noda jerawat hingga mencerahkan wajah.",
    imageUrl: "https://benings-clinic.com/wp-content/uploads/2024/02/GAMBAR_TREATMENT_3.png",
  },
  {
    id: 2,
    title: "Treatment Laser Proyellow",
    description: "Laser peremajaan kulit terkini yang mampu merawat kulit hingga ke lapisan kulit bagian dalam. Laser ini dapat mengatasi pigmentasi, kulit sensitif, mengembalikan kilau kulit alami hingga mengatasi flek.",
    imageUrl: "https://benings-clinic.com/wp-content/uploads/2024/02/GAMBAR_TREATMENT_2.png",
  },
  {
    id: 3,
    title: "Treatment Laser Diode",
    description: "Laser canggih dan paling sempurna dalam mengatasi jerawat aktif, mengurangi produksi minyak berlebih dan mencerahkan wajah.",
    imageUrl: "https://benings-clinic.com/wp-content/uploads/2024/02/GAMBAR_TREATMENT_1.png",
  },
  {
    id: 4,
    title: "Body Peeling (Hand Peeling dan Leg Peeling)",
    description: "Perawatan eksfoliasi yang efektif untuk mengangkat sel kulit mati pada area tangan dan kaki, membuat kulit terasa lebih halus, cerah, dan meregenerasi kulit baru.", // Corrected description for Body Peeling
    imageUrl: "https://cdn.orderonline.id/uploads/images_9633671739420731007.png",
  },
  {
    id: 5,
    title: "Chromosome Facial",
    description: "Perawatan wajah inovatif yang dirancang untuk meremajakan kulit hingga tingkat seluler, meningkatkan elastisitas, kecerahan, dan mengurangi tanda-tua dengan pendekatan bio-regeneratif.", // Corrected description for Chromosome Facial
    imageUrl: "https://cdn.orderonline.id/uploads/images_2345751739420228859.png",
  },
];

function Treatment() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = treatmentSlides.length;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000); 
    return () => clearInterval(interval);
  }, [currentIndex]); 


  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" style={{ fontFamily: 'Judson, judson' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-12 items-center">

        {/* Left Section: Text and Controls */}
        <div className="leftSection flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 h-full py-8 lg:py-0">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4" style={{ color: '#DEA05B' }}>
            Rekomendasi Treatment
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
            Pilihan treatment terbaik menuju Wajah Bening’s Wajah Indonesia
          </p>

          <div className="controlContainer flex justify-between items-center w-full mt-auto pt-4"> 
            {/* Pagination Dots */}
            <div className="pagination flex space-x-2">
              {treatmentSlides.map((_, idx) => (
                <span
                  key={idx}
                  className={`block w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                    currentIndex === idx ? 'bg-[#DEA05B]' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                ></span>
              ))}
            </div>
            {/* Navigation Buttons */}
            <div className="buttonContainer flex gap-4">
              <button
                onClick={goToPrevious}
                className="prev border border-[#DEA05B] text-[#DEA05B] hover:bg-[#DEA05B] hover:text-white rounded-full h-10 w-10 flex items-center justify-center transition-colors duration-300 shadow-sm"
                aria-label="Previous slide"
              >
                <span>←</span>
              </button>
              <button
                onClick={goToNext}
                className="next border border-[#DEA05B] text-[#DEA05B] hover:bg-[#DEA05B] hover:text-white rounded-full h-10 w-10 flex items-center justify-center transition-colors duration-300 shadow-sm"
                aria-label="Next slide"
              >
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: Main Swiper Carousel */}
        <div className="swiper main-swiper relative w-full h-[350px] md:h-[450px] overflow-hidden rounded-2xl shadow-xl order-1 lg:order-2"> {/* Tinggi responsif */}
          <div
            className="swiper-wrapper wrapper flex h-full transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Geser 100% untuk setiap slide
          >
            {treatmentSlides.map((slide) => (
              <div
                key={slide.id}
                className="swiper-slide slides flex-shrink-0 w-full h-full relative" // Setiap slide mengambil lebar penuh
              >
                <div className="content h-full w-full rounded-2xl overflow-hidden relative">
                  <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x600/CCCCCC/333333?text=Treatment+Image"; }}
                  />
                  {/* Gradient Overlay */}
                  <div className="gradient absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 rounded-2xl"></div>

                  {/* Text Content */}
                  <div className="textContent absolute bottom-4 left-4 right-4 z-20 text-white text-left"> {/* text-white karena background gelap */}
                    <h2 className="text-xl md:text-2xl font-bold mb-1" style={{ color: '#DEA05B' }}> {/* Warna teks sesuai permintaan */}
                      {slide.title}
                    </h2>
                    <p className="text-sm md:text-base font-normal leading-snug"> {/* Ukuran font dan bobot */}
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
      </div>
    </section>
  );
}

export default Treatment;
