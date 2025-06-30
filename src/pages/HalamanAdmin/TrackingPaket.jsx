import React, { useState, useEffect } from "react";

const dummyTrackingData = [
  {
    id: 1,
    pelanggan: "Andi",
    paket: "Facial Whitening + Laser Proyellow",
    tanggalPesan: "2025-05-25",
    status: "Dalam Proses",
  },
  {
    id: 2,
    pelanggan: "Budi",
    paket: "Botox",
    tanggalPesan: "2025-05-26",
    status: "Pending",
  },
  {
    id: 3,
    pelanggan: "Citra",
    paket: "Facial Acne + Rejuran",
    tanggalPesan: "2025-05-24",
    status: "Selesai",
  },
  {
    id: 4,
    pelanggan: "Dewi",
    paket: "Laser Q-Switched ND:YAG",
    tanggalPesan: "2025-05-27",
    status: "Dalam Proses",
  },
  {
    id: 5,
    pelanggan: "Eka",
    paket: "Facial Microdermabrasion",
    tanggalPesan: "2025-05-28",
    status: "Pending",
  },
];

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-800",
  "Dalam Proses": "bg-blue-100 text-blue-800",
  Selesai: "bg-green-100 text-green-800",
};

const TrackingPaket = () => {
  const [trackingData, setTrackingData] = useState([]);

  useEffect(() => {
    // Simulasi fetch data
    setTrackingData(dummyTrackingData);
  }, []);

  return (
    <div
      className="p-6 max-w-5xl mx-auto"
      style={{ fontFamily: "Judson, serif" }}
    >
      <h1
        className="text-3xl font-bold mb-6"
        style={{ color: "#DEA05B" }}
      >
        Tracking Paket Treatment
      </h1>

      {trackingData.length === 0 ? (
        <p className="text-gray-500">Tidak ada paket yang sedang dalam proses.</p>
      ) : (
        <div className="overflow-x-auto rounded shadow bg-white">
          <table className="w-full">
            <thead style={{ backgroundColor: "#f9f5ef" }}>
              <tr>
                <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Pelanggan
                </th>
                <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Paket Treatment
                </th>
                <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Tanggal Pesan
                </th>
                <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {trackingData.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-[#fff7ed] transition"
                >
                  <td className="px-4 py-3">{item.pelanggan}</td>
                  <td className="px-4 py-3">{item.paket}</td>
                  <td className="px-4 py-3">{item.tanggalPesan}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        statusColors[item.status] || "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TrackingPaket;
