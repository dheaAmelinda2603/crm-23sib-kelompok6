import React, { useState } from 'react';
import UserNavbar from './UserNavbar';

const treatmentOptions = [
  "Facial Glow Up",
  "Laser Acne",
  "Peeling Wajah",
  "Rejuvenation",
  "Botox & Filler",
];

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    treatment: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Berhasil booking treatment untuk ${formData.name}!`);
    // Di sini nanti bisa ditambahkan integrasi ke backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF6EB] to-[#FFEDE1] pt-24 p-6 sm:pt-28 sm:p-10 font-judson">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Judson:wght@400;700&display=swap');
        .font-judson { font-family: 'Judson', serif; }
        `}
      </style>

      <UserNavbar />

      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-12 border border-[#f4e2d6]">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#8B5E3C] text-center mb-10 drop-shadow tracking-wide">
          Booking Treatment 💆🏻‍♀️✨
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nama */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Masukkan nama kamu"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DEA05B] transition"
            />
          </div>

          {/* Treatment */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Pilih Treatment</label>
            <select
              name="treatment"
              value={formData.treatment}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DEA05B] transition"
            >
              <option value="">-- Pilih Treatment --</option>
              {treatmentOptions.map((treat, index) => (
                <option key={index} value={treat}>{treat}</option>
              ))}
            </select>
          </div>

          {/* Tanggal */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Tanggal</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DEA05B] transition"
            />
          </div>

          {/* Waktu */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Waktu</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DEA05B] transition"
            />
          </div>

          {/* Tombol Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-[#DEA05B] hover:bg-[#C18F4E] text-white font-bold py-3 px-10 rounded-full shadow-md transition-all transform hover:-translate-y-1"
            >
              Booking Sekarang
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
