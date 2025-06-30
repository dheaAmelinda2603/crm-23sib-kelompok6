import React from 'react';
import PKU from '../img/PKU.png' 

const clinicLocationsData = [
  {
    id: 1,
    name: "Pekanbaru",
    address: "Jl Soekarno Hatta / Arengka 1, Kavling No.03/04, Payung, Pekanbaru, Riau 28292",
    imageUrl: PKU 
  },
  {
    id: 2,
    name: "Jakarta Kemang",
    address: "Jl. Kemang Timur No.6, Bangka, Mampang Prapatan, Jakarta Selatan 12730",
    imageUrl: "https://benings-clinic.com/wp-content/uploads/2023/02/Jakarta-1-1024x683.jpg"
  },
  {
    id: 3,
    name: "Jakarta Utara",
    address: "Jl. Boulevard Barat Raya QJ 5 No.1, Kelapa Gading Barat, Jakarta Utara 14240",
    imageUrl: "https://benings-clinic.com/wp-content/uploads/2023/02/Jakarta-Utara-1-1024x683.jpg"
  },
  {
    id: 4,
    name: "Bandung",
    address: "Jl. BKR No.100, Ancol, Regol, Bandung, Jawa Barat 40254",
    imageUrl: "https://benings-clinic.com/wp-content/uploads/2023/02/Bandung-1-scaled-e1676971917568.jpg"
  },
  {
    id: 5,
    name: "Bekasi",
    address: "Jl. KH. Noer Ali No.9, Jakasampurna, Bekasi Barat, Jawa Barat 17145",
    imageUrl: "https://benings-clinic.com/wp-content/uploads/2023/02/Bekasi-1-683x1024.jpg"
  },
  {
    id: 6,
    name: "Bali (Legian)",
    address: "Jl. Dewi Sri No.168c, Legian, Kuta, Badung, Bali 80361",
    imageUrl: "https://benings-clinic.com/wp-content/uploads/2023/02/Bali-1-1024x683.jpg"
  },
  {
    id: 7,
    name: "Banjarmasin",
    address: "Jl. Ahmad Yani Km.5,5 No.444, Pemurus Luar, Banjarmasin 70232",
    imageUrl: "https://benings-clinic.com/wp-content/uploads/2023/02/Banjarmasin-1-1024x683.jpg"
  },
  {
    id: 8,
    name: "Batam",
    address: "Jl. Budi Kemuliaan blok PH No. 90,, Kec. Batu Ampar, Kota Batam",
    imageUrl: "https://benings-clinic.com/wp-content/uploads/2023/02/Batam-1-1024x683.jpg"
  },
  {
    id: 9,
    name: "Bengkulu",
    address: "Jl. S. Parman No.82, Kebun Kenanga, Kec. Ratu Agung, Kota Bengkulu, Bengkulu 38222",
    imageUrl: "https://benings-clinic.com/wp-content/uploads/2023/02/Bengkulu-1-1024x683.jpg"
  },
];

export default function Location() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-[#DEA05B] text-center">
        Lokasi Bening's Clinic
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {clinicLocationsData.map((loc) => (
          <a
            key={loc.id}
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={loc.imageUrl}
              alt={`Clinic di ${loc.name}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{loc.name}</h3>
              <div className="flex items-start text-gray-600 text-sm">
                {/* Ikon lokasi */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 text-amber-600 mr-2 mt-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>{loc.address}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}