import React from 'react';
import bgGold from '../assets/bg-gold.jpg';
import teamBening from '../assets/team-bening.png';
import PerawatanPage from '../pages/Perawatan';
import TreatmentPage from '../pages/Treatment';
import Marketing from './Marketing'; 
import Review from '../pages/Review';
import KulitCerah from '../pages/KulitCerah';

const Home = () => {
  return (
     <div className="font-judson antialiased text-gray-800">
        <style>
            {`
            @import url('https://fonts.googleapis.com/css2?family=Judson:wght@400;700&display=swap');

            @keyframes fadeInDown {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeInDown { animation: fadeInDown 0.6s ease-out forwards; }
            .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
            .delay-100 { animation-delay: 0.1s; }
            .delay-200 { animation-delay: 0.2s; }
            .delay-300 { animation-delay: 0.3s; }
            .delay-400 { animation-delay: 0.4s; }
            .font-judson { font-family: 'Judson', serif; } /* Custom class for Judson font */
            `}
        </style>

      {/* Hero Section: Siap Wujudkan Kulit Impian */}
      <section className="flex items-center py-12 px-4 sm:px-6 lg:px-8 relative z-0 mt-0" 
          style={{ backgroundImage: `url(${bgGold})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between relative z-10 p-6 sm:p-8 bg-white/95 rounded-3xl shadow-2xl space-y-8 lg:space-y-0 lg:space-x-12 border border-gray-100">
            <div className="lg:w-1/2 flex justify-center order-2 lg:order-1">
            <img src={teamBening} alt="Bening's Clinic Team" className="w-full max-w-sm sm:max-w-md lg:max-w-full h-auto rounded-2xl shadow-xl object-cover transform transition-transform duration-500 hover:scale-105 border-4 border-[#DEA05B]"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x600/CCCCCC/333333?text=Team+Image"; }}/>
            </div>
            <div className="text-center lg:text-left lg:w-1/2 order-1 lg:order-2">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#DEA05B] leading-tight mb-2 animate-fadeInDown delay-200">
                    Siap Wujudkan Kulit Impian Anda
                </h1>
                <p className="text-xl sm:text-2xl font-semibold text-amber-600 mb-2 animate-fadeInDown delay-100">
                    #MULAIDARIBENING
                </p>
                <p className="mt-4 text-lg sm:text-xl text-gray-700 leading-relaxed mb-10 animate-fadeInUp delay-300">
                    Selamat datang di Bening’s Clinic, destinasi terkemuka untuk perawatan kulit profesional. Kami menawarkan layanan terkini dan produk terpercaya untuk membantu Anda mencapai kulit sehat, cerah, dan bercahaya secara optimal.
                </p>
                <button className="bg-[#DEA05B] hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#DEA05B] text-lg animate-fadeInUp delay-400"> 
                    Jelajahi Layanan Kami
                </button>
            </div>
        </div>
      </section>

      <PerawatanPage />

      <TreatmentPage />

      <KulitCerah />

       <Marketing /> 

       <Review/>
    </div>
  );
};

export default Home;