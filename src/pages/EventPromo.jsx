import React, { useState, useEffect, useRef } from 'react';

const events = [
  {
    id: 1,
    title: "Diskon Spesial Treatment Laser Wajah!",
    description: "Dapatkan potongan harga hingga 30% untuk perawatan Laser Wajah di Bening's Clinic. Wujudkan kulit impianmu sekarang!",
    imageUrl: "https://instagram.fpku1-1.fna.fbcdn.net/v/t51.2885-15/448834473_1013454720176841_5893457890123456_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18580b&_nc_ohc=abcdefghijk&_nc_ht=instagram.fpku1-1.fna.fbcdn.net&edm=AJ38zM8EAAAA&oh=01_Adabcdefghijk&oe=669A7B3C", // Example Instagram-like URL
    link: "https://www.beningsindonesia.com/promo", 
  },
  {
    id: 2,
    title: "Cashback Hingga Rp200rb dengan Kartu Kredit XYZ",
    description: "Nikmati cashback menarik setiap transaksi perawatan min. Rp1 juta menggunakan kartu kredit bank XYZ. Syarat & Ketentuan berlaku.",
    imageUrl: "https://instagram.fpku1-1.fna.fbcdn.net/v/t51.2885-15/448834473_1013454720176841_5893457890123456_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18580b&_nc_ohc=abcdefghijk&_nc_ht=instagram.fpku1-1.fna.fbcdn.net&edm=AJ38zM8EAAAA&oh=01_Adabcdefghijk&oe=669A7B3C", // Example Instagram-like URL
    link: "https://www.beningsindonesia.com/promo",
  },
  {
    id: 3,
    title: "Grand Opening Cabang Baru Pekanbaru - Diskon 25%",
    description: "Rayakan pembukaan cabang terbaru kami di Pekanbaru dengan diskon 25% untuk semua perawatan di bulan pertama!",
    imageUrl: "https://instagram.fpku1-1.fna.fbcdn.net/v/t51.2885-15/448834473_1013454720176841_5893457890123456_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18580b&_nc_ohc=abcdefghijk&_nc_ht=instagram.fpku1-1.fna.fbcdn.net&edm=AJ38zM8EAAAA&oh=01_Adabcdefghijk&oe=669A7B3C", // Example Instagram-like URL
    link: "https://www.beningsindonesia.com/cabang/pekanbaru", 
  },
  {
    id: 4,
    title: "Beli 2 Gratis 1 Serum Pencerah Bening's",
    description: "Promo terbatas! Beli 2 serum pencerah favoritmu, dapatkan 1 gratis. Kulit cerah merata kini lebih mudah.",
    imageUrl: "https://instagram.fpku1-1.fna.fbcdn.net/v/t51.2885-15/448834473_1013454720176841_5893457890123456_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18580b&_nc_ohc=abcdefghijk&_nc_ht=instagram.fpku1-1.fna.fbcdn.net&edm=AJ38zM8EAAAA&oh=01_Adabcdefghijk&oe=669A7B3C", // Example Instagram-like URL
    link: "https://www.beningsindonesia.com/product", 
  },
  {
    id: 5,
    title: "Voucher Diskon Rp100rb untuk Member Baru",
    description: "Daftar jadi member Bening's Clinic dan langsung dapatkan voucher diskon Rp100.000 untuk perawatan pertamamu.",
    imageUrl: "https://instagram.fpku1-1.fna.fbcdn.net/v/t51.2885-15/448834473_1013454720176841_5893457890123456_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18580b&_nc_ohc=abcdefghijk&_nc_ht=instagram.fpku1-1.fna.fbcdn.net&edm=AJ38zM8EAAAA&oh=01_Adabcdefghijk&oe=669A7B3C", // Example Instagram-like URL
    link: "https://www.beningsindonesia.com/register", 
  },
  {
    id: 6,
    title: "Spesial Lebaran: Paket Perawatan Glowing Idul Fitri",
    description: "Tampil bersinar di Hari Raya dengan paket perawatan khusus Idul Fitri. Kulit sehat, cerah, dan glowing maksimal!",
    imageUrl: "https://instagram.fpku1-1.fna.fbcdn.net/v/t51.2885-15/448834473_1013454720176841_5893457890123456_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18580b&_nc_ohc=abcdefghijk&_nc_ht=instagram.fpku1-1.fna.fbcdn.net&edm=AJ38zM8EAAAA&oh=01_Adabcdefghijk&oe=669A7B3C", // Example Instagram-like URL
    link: "https://www.beningsindonesia.com/promo", 
  },
];

const EventPromoSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselWrapperRef = useRef(null);
  const [cardsPerView, setCardsPerView] = useState(1);
  const cardMarginRight = 20; // Margin between cards

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) { // xl breakpoint
        setCardsPerView(3);
      } else if (window.innerWidth >= 1024) { // lg breakpoint
        setCardsPerView(2.5);
      } else if (window.innerWidth >= 768) { // md breakpoint
        setCardsPerView(1.5);
      } else { // sm and xs
        setCardsPerView(1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value

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
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            marginLeft: `-${cardMarginRight / 2}px`,
          }}
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="flex-shrink-0 px-[10px] py-1"
              style={{
                width: `calc(${100 / cardsPerView}% - ${cardMarginRight}px)`,
                marginRight: `${cardMarginRight}px`,
              }}
            >
              <div className="eventCardWrapper bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center h-full">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-md mb-4 border border-gray-100"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/CCCCCC/333333?text=Promo+Image"; }}
                />
                <h3 className="font-semibold text-gray-800 text-xl mb-2">{event.title}</h3>
                <p className="text-gray-700 text-sm flex-grow mb-4">
                  {event.description}
                </p>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#DEA05B] text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-600 transition duration-300 text-sm"
                >
                  Lihat Detail
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {currentIndex > 0 && (
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-[#DEA05B]"
            aria-label="Previous event"
          >
            <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
        )}
        {currentIndex < maxIndex && (
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-[#DEA05B]"
            aria-label="Next event"
          >
            <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        )}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: maxIndex + (cardsPerView < 1 ? 1 : 0) }).map((_, idx) => (
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
    </section>
  );
};

export default EventPromoSection;