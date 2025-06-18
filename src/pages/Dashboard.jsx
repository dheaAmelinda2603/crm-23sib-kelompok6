// src/pages/Home.jsx (Nama file Dashboard.jsx, yang sekarang berfungsi sebagai Home)

import React from 'react';

// Import gambar dari folder src/assets
import bgGold from '../assets/bg-gold.jpg';
import teamBening from '../assets/team-bening.png';

// Import komponen dari folder pages yang akan menjadi section
import PerawatanPage from '../components/Perawatan'; // Import Perawatan.jsx
import TreatmentPage from '../pages/Treatment'; // Import Treatment.jsx


// --- START: Komponen Placeholder untuk Section Lain (yang belum ada file terpisah) ---
// IDEALNYA, Pindahkan komponen-komponen ini ke file terpisah di src/components/sections/


const InstagramFeedSection = () => {
  return (
    <section className="bg-white/80 backdrop-blur rounded-xl shadow-xl p-8 my-10 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">On Instagram</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Placeholder untuk gambar Instagram feed */}
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500">Post 1</div>
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500">Post 2</div>
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500">Post 3</div>
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500">Post 4</div>
      </div>
      <button className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition duration-300">
        Follow Us
      </button>
    </section>
  );
};
// --- END: Komponen Placeholder ---


const Home = () => { // Nama komponen di sini 'Dashboard' dapat diganti menjadi 'Home'
  return (
    <div
      className="min-h-screen bg-cover bg-center p-6 space-y-10"
      style={{ backgroundImage: `url(${bgGold})` }}
    >
      {/* 1. Hero Section (Siap Wujudkan Kulit Impian) */}
      <div className="bg-white/80 backdrop-blur rounded-xl shadow-xl flex flex-col lg:flex-row items-center p-8">
        <img
          src={teamBening}
          alt="Bening's Team"
          className="w-full lg:w-1/2 rounded-xl shadow-lg object-cover"
        />
        <div className="text-center lg:text-left mt-6 lg:mt-0 lg:ml-10">
          <h1 className="text-3xl font-bold text-yellow-700 mb-2">Siap Wujudkan Kulit Impian</h1>
          <p className="text-lg font-semibold text-yellow-500">#MULAIDARIBENING</p>
          <p className="mt-4 text-gray-700">
            Selamat datang di Bening’s Clinic, tempat Anda mendapatkan perawatan kulit terbaik dengan layanan profesional dan produk terpercaya.
          </p>
        </div>
      </div>


      {/* 3. Section: Layanan Khusus Kami (Menggunakan konten dari Perawatan.jsx) */}
      {/* PENTING: Pastikan komponen PerawatanPage diekspor sebagai default dari Perawatan.jsx */}
      <PerawatanPage />

      {/* 4. Section: Kulit Sehat & Sehat, Bersama Sentuhan Ahli (Menggunakan konten dari Treatment.jsx) */}
      {/* PENTING: Pastikan komponen TreatmentPage diekspor sebagai default dari Treatment.jsx */}
      <TreatmentPage />

      {/* 5. Section: On Instagram (Ini masih placeholder) */}
      <InstagramFeedSection />

    </div>
  );
};

export default Home; // Pastikan Anda juga mengganti nama ekspor jika Anda ingin file ini secara resmi menjadi Home.jsx