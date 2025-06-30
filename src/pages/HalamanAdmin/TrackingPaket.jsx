import React, { useState, useEffect } from "react";

const dummyTrackingData = [
  {
    id: 1,
    pelanggan: "Andi",
    paket: "Translucent Powder",
    tanggalPesan: "2025-06-20",
    status: "Dalam Proses",
  },
  {
    id: 2,
    pelanggan: "Budi",
    paket: "Night Cream Flex",
    tanggalPesan: "2025-06-19",
    status: "Pending",
  },
  {
    id: 3,
    pelanggan: "Citra",
    paket: "Facial Wash Exclusive",
    tanggalPesan: "2025-06-18",
    status: "Selesai",
  },
  {
    id: 4,
    pelanggan: "Dewi",
    paket: "Day Cream Exclusive",
    tanggalPesan: "2025-06-18",
    status: "Dalam Proses",
  },
  {
    id: 5,
    pelanggan: "Eka",
    paket: "Skinmology Acne Spot",
    tanggalPesan: "2025-06-17",
    status: "Pending",
  },
  {
    id: 6,
    pelanggan: "Fajar",
    paket: "Skinmology Lightening Sunscreen",
    tanggalPesan: "2025-06-17",
    status: "Selesai",
  },
  {
    id: 7,
    pelanggan: "Gina",
    paket: "Skinmology Serum Brightening",
    tanggalPesan: "2025-06-16",
    status: "Selesai",
  },
  {
    id: 8,
    pelanggan: "Hana",
    paket: "Paket Bright and Glow Treatment",
    tanggalPesan: "2025-06-15",
    status: "Dalam Proses",
  },
];

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-700",
  "Dalam Proses": "bg-blue-100 text-blue-700",
  Selesai: "bg-green-100 text-green-700",
};

const TrackingPaket = () => {
  const [trackingData, setTrackingData] = useState([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    setTrackingData(dummyTrackingData);
  }, []);

  const filteredData = trackingData.filter((item) => {
    const matchName = item.pelanggan.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus ? item.status === filterStatus : true;
    return matchName && matchStatus;
  });

  return (
    <div
      className="px-6 py-8 bg-[#fdfcfc] min-h-screen space-y-8"
      style={{ fontFamily: "Judson, serif" }}
    >
      {/* Header */}
      <div className="mb-4 text-center">
        <h1 className="text-4xl font-bold mb-2" style={{ color: "#DEA05B" }}>
          Tracking Paket
        </h1>
        <p className="text-gray-600">
          Pantau status paket treatment & skincare pelanggan Benings Clinic
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <input
          type="text"
          placeholder="Cari nama pelanggan..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border px-4 py-2 rounded focus:outline-none focus:ring-2"
          style={{ borderColor: "#DEA05B", outlineColor: "#DEA05B" }}
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border px-4 py-2 rounded focus:outline-none focus:ring-2 w-full md:w-52"
          style={{ borderColor: "#DEA05B", outlineColor: "#DEA05B" }}
        >
          <option value="">Status Paket</option>
          <option value="Pending">Pending</option>
          <option value="Dalam Proses">Dalam Proses</option>
          <option value="Selesai">Selesai</option>
        </select>
      </div>

      {/* Title Daftar */}
      <h2 className="text-xl font-semibold" style={{ color: "#DEA05B" }}>
        Daftar Paket
      </h2>

      {/* Grid Tracking */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white border p-6 rounded-xl shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition hover:shadow-lg"
            style={{ borderColor: "#DEA05B" }}
          >
            <div className="flex-1 space-y-1">
              <h3 className="text-lg font-bold" style={{ color: "#DEA05B" }}>
                {item.pelanggan}
              </h3>
              <p className="text-gray-600">
                {item.paket} • {item.tanggalPesan}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`inline-block px-3 py-1 text-xs rounded-full font-semibold ${
                  statusColors[item.status] || "bg-gray-200 text-gray-700"
                }`}
              >
                {item.status}
              </span>
              <button
                className="text-[#DEA05B] text-sm font-medium hover:underline"
              >
                Edit
              </button>
              <button
                className="text-red-500 text-sm font-medium hover:underline"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}

        {filteredData.length === 0 && (
          <p className="text-gray-500 col-span-full">Tidak ada paket ditemukan.</p>
        )}
      </div>
    </div>
  );
};

export default TrackingPaket;
