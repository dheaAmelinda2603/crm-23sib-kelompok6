import React from 'react';

const UserNotifikasi = () => {
  const notifications = [
    { id: 1, message: "Booking treatment 'Facial Glowing' berhasil dikonfirmasi.", date: "28 Juni 2025" },
    { id: 2, message: "Promo 'Skin Booster Hemat' berlaku hingga 30 Juni 2025!", date: "27 Juni 2025" },
    { id: 3, message: "Jangan lupa treatment besok pukul 10.00 WIB.", date: "26 Juni 2025" },
  ];

  return (
    <div className="min-h-screen bg-[#FDF9F3] pt-28 p-6 sm:p-10 font-judson">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-[#8B5E3C] mb-6 text-center">Notifikasi </h2>
        <ul className="space-y-4">
          {notifications.map((notif) => (
            <li key={notif.id} className="p-4 bg-[#FFF5E6] rounded-xl shadow-md">
              <p className="text-[#5F4A38] font-medium">{notif.message}</p>
              <p className="text-sm text-gray-500 mt-1">{notif.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserNotifikasi;
