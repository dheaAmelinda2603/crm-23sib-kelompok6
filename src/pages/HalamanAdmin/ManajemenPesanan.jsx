const ManajemenPesanan = () => {
  const pesananList = [
    {
      nama: "Tika",
      treatment: "HIFU",
      tanggal: "2025-06-18",
      metode: "Transfer Bank",
      status: "Lunas",
    },
    {
      nama: "Claurine",
      treatment: "Facial",
      tanggal: "2025-06-17",
      metode: "Cash",
      status: "Diproses",
    },
    {
      nama: "Dhea",
      treatment: "Proyellow",
      tanggal: "2025-06-16",
      metode: "QRIS",
      status: "Belum Dibayar",
    },
    {
      nama: "Alyssa",
      treatment: "Facial",
      tanggal: "2025-06-16",
      metode: "QRIS",
      status: "Lunas",
    },
  ];

  return (
    <div
      className="px-6 py-8 bg-[#fdfcfc] min-h-screen space-y-8"
      style={{ fontFamily: "Judson, serif" }}
    >
      {/* Header */}
      <div className="mb-4 text-center">
        <h1 className="text-4xl font-bold mb-2" style={{ color: "#DEA05B" }}>
          Manajemen Pesanan
        </h1>
        <p className="text-gray-600">
          Kelola pesanan treatment & skincare pelanggan Benings Clinic
        </p>
      </div>

      {/* Grid Pesanan + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pesanan Card */}
        <div className="lg:col-span-2 space-y-6">
          {/* Search + Status */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <input
              type="text"
              placeholder="Cari nama pelanggan..."
              className="flex-1 border px-4 py-2 rounded focus:outline-none focus:ring-2"
              style={{ borderColor: "#DEA05B", outlineColor: "#DEA05B" }}
            />
            <select
              className="border px-4 py-2 rounded focus:outline-none focus:ring-2 w-full md:w-52"
              style={{ borderColor: "#DEA05B", outlineColor: "#DEA05B" }}
            >
              <option>Status Pesanan</option>
              <option>Belum Dibayar</option>
              <option>Lunas</option>
              <option>Diproses</option>
              <option>Selesai</option>
            </select>
          </div>

          {/* List Pesanan */}
          <h2 className="text-xl font-semibold" style={{ color: "#DEA05B" }}>
            Daftar Pesanan
          </h2>
          {pesananList.map((pesanan, index) => (
            <div
              key={index}
              className="bg-white border p-6 rounded-xl shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition hover:shadow-lg"
              style={{ borderColor: "#DEA05B" }}
            >
              <div className="flex-1 space-y-1">
                <h3 className="text-lg font-bold" style={{ color: "#DEA05B" }}>
                  {pesanan.nama}
                </h3>
                <p className="text-gray-600">
                  {pesanan.treatment} • {pesanan.tanggal}
                </p>
                <p className="text-sm text-gray-500">Metode: {pesanan.metode}</p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`inline-block px-3 py-1 text-xs rounded-full font-semibold ${
                    pesanan.status === "Lunas"
                      ? "bg-green-100 text-green-700"
                      : pesanan.status === "Diproses"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {pesanan.status}
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
        </div>

        {/* Form Pesanan */}
        <div
          className="bg-white border p-6 rounded-xl shadow space-y-4"
          style={{ borderColor: "#DEA05B" }}
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold" style={{ color: "#DEA05B" }}>
              Tambah Pesanan Baru
            </h2>
            <button
              type="button"
              className="text-sm border rounded-full px-3 py-1 hover:bg-[#f7f1e6]"
              style={{ borderColor: "#DEA05B", color: "#DEA05B" }}
            >
              Reset
            </button>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-gray-700">Nama Pelanggan</label>
              <input
                type="text"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2"
                style={{ borderColor: "#DEA05B", outlineColor: "#DEA05B" }}
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-700">Treatment / Skincare</label>
              <input
                type="text"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2"
                style={{ borderColor: "#DEA05B", outlineColor: "#DEA05B" }}
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-700">Harga</label>
              <input
                type="number"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2"
                style={{ borderColor: "#DEA05B", outlineColor: "#DEA05B" }}
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-700">Tanggal</label>
              <input
                type="date"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2"
                style={{ borderColor: "#DEA05B", outlineColor: "#DEA05B" }}
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-700">Metode Pembayaran</label>
              <select
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2"
                style={{ borderColor: "#DEA05B", outlineColor: "#DEA05B" }}
              >
                <option>Cash</option>
                <option>Transfer Bank</option>
                <option>QRIS</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-700">Catatan</label>
              <textarea
                rows="3"
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2"
                style={{ borderColor: "#DEA05B", outlineColor: "#DEA05B" }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded-full text-white font-semibold"
              style={{ backgroundColor: "#DEA05B" }}
            >
              Simpan Pesanan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManajemenPesanan;
