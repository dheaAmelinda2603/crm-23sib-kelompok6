import React from "react";
import { CalendarCheck, Phone, Mail, MapPin, UserCheck } from "lucide-react";

export default function CustomerProfileDashboard() {
  // Contoh data pelanggan yang bisa diganti dengan data real API nanti
  const customer = {
    name: "Bella Nirmala",
    email: "bella.nirmala@email.com",
    phone: "0812-3456-7890",
    address: "Jl. Melati No. 45, Pekanbaru",
    lastTreatment: "20 Mei 2025",
    joinDate: "2021",
    photoUrl: "https://i.pravatar.cc/150?img=65",
    treatments: [
      { name: "Facial Glowing", date: "15 April 2025" },
      { name: "Laser Acne Treatment", date: "28 Maret 2025" },
      { name: "Skin Booster", date: "10 Februari 2025" },
    ],
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Profil Pelanggan</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Foto dan Info Utama */}
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          <img
            src={customer.photoUrl}
            alt={`${customer.name} photo`}
            className="w-32 h-32 rounded-full border-4 border-pink-300 object-cover"
          />
          <h2 className="mt-4 text-xl font-semibold text-gray-800">{customer.name}</h2>
          <p className="text-pink-500 font-medium">Pelanggan Setia sejak {customer.joinDate}</p>
        </div>

        {/* Detail Kontak dan Info */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3 text-gray-700">
            <Phone className="w-6 h-6 text-pink-500" />
            <span>{customer.phone}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Mail className="w-6 h-6 text-pink-500" />
            <span>{customer.email}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <MapPin className="w-6 h-6 text-pink-500" />
            <span>{customer.address}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <CalendarCheck className="w-6 h-6 text-pink-500" />
            <span>Terakhir Perawatan: {customer.lastTreatment}</span>
          </div>
        </div>
      </div>

      {/* Riwayat Perawatan */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-pink-600 mb-4">Riwayat Perawatan</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {customer.treatments.map((treat, idx) => (
            <li key={idx}>
              {treat.name} – <span className="font-medium">{treat.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
