import React from 'react';
import { FaSpa } from 'react-icons/fa';

const treatmentHistory = [
  {
    tanggal: '26 Maret 2025',
    jenis: 'Facial Brightening',
    beautician: 'Siti Aulia',
    status: 'Selesai',
    warnaStatus: 'bg-green-100 text-green-700',
  },
  {
    tanggal: '15 Februari 2025',
    jenis: 'Laser Acne Treatment',
    beautician: 'Rina Marlina',
    status: 'Selesai',
    warnaStatus: 'bg-green-100 text-green-700',
  },
  {
    tanggal: '10 Januari 2025',
    jenis: 'Peeling Wajah',
    beautician: 'Desi Rahmawati',
    status: 'Selesai',
    warnaStatus: 'bg-green-100 text-green-700',
  },
  {
    tanggal: '01 Desember 2024',
    jenis: 'Rejuvenation',
    beautician: 'Yuliana',
    status: 'Dibatalkan',
    warnaStatus: 'bg-red-100 text-red-600',
  },
];

const RiwayatTreatment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF6EB] to-[#FFEDE1] p-6 sm:p-10 font-judson">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Judson:wght@400;700&display=swap');
        .font-judson { font-family: 'Judson', serif; }
        `}
      </style>

      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-12 border border-[#f4e2d6]">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-[#8B5E3C] mb-10 drop-shadow-sm tracking-wide">
          Riwayat Treatment
        </h1>

        <div className="space-y-6">
          {treatmentHistory.map((item, index) => (
            <div key={index}
              className="group transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl bg-[#FFF8F4] border border-[#f4e2d6] p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center shadow-md" >
              <div className="flex items-center gap-4">
                <div className="bg-[#DEA05B] text-white rounded-full p-3 shadow-md">
                  <FaSpa className="text-2xl" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#8B5E3C] mb-1">{item.jenis}</h2>
                  <p className="text-sm text-gray-600">{item.tanggal}</p>
                  <p className="text-sm text-gray-500">Beautician: {item.beautician}</p>
                </div>
              </div>
              <span className={`mt-4 sm:mt-0 px-4 py-1 rounded-full text-sm font-semibold ${item.warnaStatus}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>

        {treatmentHistory.length === 0 && (
          <p className="text-center text-gray-500 mt-8">Belum ada riwayat treatment.</p>
        )}
      </div>
    </div>
  );
};

export default RiwayatTreatment;