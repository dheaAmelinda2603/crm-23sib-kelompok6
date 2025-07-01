import React from 'react';
import { useParams } from 'react-router-dom';

const DetailTreatment = () => {
  const { slug } = useParams();

  // Di real project, data treatment bisa di-fetch dari backend berdasarkan slug ini
  return (
    <div className="min-h-screen bg-[#FDF6EF] pt-28 px-6 sm:px-10 font-judson">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-bold text-[#8B5E3C] mb-6 text-center">
          Detail Treatment: {slug.replace(/-/g, ' ')}
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Ini adalah halaman detail untuk treatment <strong>{slug}</strong>. Di halaman ini kamu bisa menampilkan deskripsi lengkap, durasi, harga, gambar, dan manfaat dari treatment.
        </p>
      </div>
    </div>
  );
};

export default DetailTreatment;
