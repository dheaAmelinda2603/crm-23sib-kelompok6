import React from 'react';
import { Link } from 'react-router-dom';
import { FaSpa, FaCalendarCheck, FaHistory } from 'react-icons/fa';
import userProfilePic from '../../assets/rejuran.jpg';

const UserDashboard = () => {
  const userName = "Nadia Fitri Lase";
  const userMemberLevel = "Member Gold";
  const userImage = userProfilePic;

  const userStats = [
    {
      label: "Total Treatment",
      value: "5",
      icon: <FaSpa className="text-white text-3xl mb-2" />,
      color: "bg-gradient-to-br from-[#8B5E3C] to-[#B48A6E]",
      textColor: "text-white"
    },
    {
      label: "Booking Aktif",
      value: "1",
      icon: <FaCalendarCheck className="text-white text-3xl mb-2" />,
      color: "bg-gradient-to-br from-[#DEA05B] to-[#EFC994]",
      textColor: "text-white"
    },
    {
      label: "Riwayat Terakhir",
      value: "Facial",
      subValue: "26 Maret 2025",
      icon: <FaHistory className="text-[#8B5E3C] text-3xl mb-2" />,
      color: "bg-[#FFEACC]",
      textColor: "text-[#8B5E3C]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDF9F3] p-6 sm:p-10 font-judson">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Judson:wght@400;700&display=swap');
        .font-judson { font-family: 'Judson', serif; }
        `}
      </style>

      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-12 max-w-5xl mx-auto border border-[#f3e1d3] transition-all duration-300"> {/* mt-20 removed */}

        {/* Profil Pengguna */}
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#DEA05B] shadow-lg mb-4">
            <img src={userImage} alt="User Avatar" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#3f3f3f] mb-2">{userName}</h1>
          <span className="text-lg sm:text-xl text-[#DEA05B] font-semibold bg-[#fff5e5] px-4 py-1 rounded-full shadow mt-1">
            {userMemberLevel}
          </span>
        </div>

        {/* Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {userStats.map((stat, index) => (
            <div key={index} className={`${stat.color} ${stat.textColor} rounded-3xl shadow-xl p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 ease-in-out`}
              style={{ minHeight: '180px' }} >
              {stat.icon}
              <p className="text-base sm:text-lg opacity-90 mb-1">{stat.label}</p>
              <h2 className="text-4xl sm:text-5xl font-bold mb-1">{stat.value}</h2>
              {stat.subValue && (
                <p className="text-sm sm:text-base opacity-80">{stat.subValue}</p>
              )}
            </div>
          ))}
        </div>

        {/* Tombol Navigasi */}
        <div className="text-center">
          <Link to="/riwayat-treatment" className="inline-block bg-[#DEA05B] hover:bg-[#C18F4E] text-white font-bold py-3 px-10 rounded-full shadow-md transition-all text-lg hover:-translate-y-1" >
            Lihat Semua Riwayat Treatment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;