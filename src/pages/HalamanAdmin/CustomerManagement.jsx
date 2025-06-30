import React, { useState } from "react";

const initialCustomers = [
  {
    id: 1,
    name: "Budi Santoso",
    email: "budi@mail.com",
    phone: "081234567890",
    addressStreet: "Jl. Merdeka No. 10",
    addressCity: "Jakarta",
    gender: "Laki-laki",
    loyaltyPoints: 1000,
    active: true,
  },
  {
    id: 2,
    name: "Siti Aminah",
    email: "siti@mail.com",
    phone: "089876543210",
    addressStreet: "Jl. Sudirman No. 25",
    addressCity: "Bandung",
    gender: "Perempuan",
    loyaltyPoints: 500,
    active: false,
  },
  {
    id: 3,
    name: "Andi Wijaya",
    email: "andi@mail.com",
    phone: "081299988877",
    addressStreet: "Jl. Pahlawan No. 5",
    addressCity: "Surabaya",
    gender: "Laki-laki",
    loyaltyPoints: 750,
    active: true,
  },
  {
    id: 4,
    name: "Rina Putri",
    email: "rina@mail.com",
    phone: "081245678901",
    addressStreet: "Jl. Gatot Subroto No. 30",
    addressCity: "Medan",
    gender: "Perempuan",
    loyaltyPoints: 1200,
    active: true,
  },
];

export default function CustomerManagement() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
    addressStreet: "",
    addressCity: "",
    gender: "",
    loyaltyPoints: 0,
    active: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddCustomer = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Nama, Email, dan Telepon wajib diisi!");
      return;
    }
    const newCustomer = {
      id: customers.length > 0 ? Math.max(...customers.map((c) => c.id)) + 1 : 1,
      ...formData,
      loyaltyPoints: parseInt(formData.loyaltyPoints, 10) || 0,
    };
    setCustomers([...customers, newCustomer]);
    setFormData({
      id: null,
      name: "",
      email: "",
      phone: "",
      addressStreet: "",
      addressCity: "",
      gender: "",
      loyaltyPoints: 0,
      active: true,
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus pelanggan ini?")) {
      setCustomers(customers.filter((c) => c.id !== id));
    }
  };

  const handleReset = () => {
    setFormData({
      id: null,
      name: "",
      email: "",
      phone: "",
      addressStreet: "",
      addressCity: "",
      gender: "",
      loyaltyPoints: 0,
      active: true,
    });
  };

  return (
    <div
      className="px-6 py-8 bg-[#fdfcfc] min-h-screen space-y-8"
      style={{ fontFamily: "Judson, serif" }}
    >
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2" style={{ color: "#DEA05B" }}>
          Manajemen Pelanggan
        </h1>
        <p className="text-gray-600">Kelola data pelanggan Benings Clinic</p>
      </div>

      {/* Grid List + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Daftar Pelanggan */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: "#DEA05B" }}>
            Daftar Pelanggan
          </h2>
          {customers.map((cust) => (
            <div
              key={cust.id}
              className="bg-white border p-4 rounded-xl shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition hover:shadow-lg"
              style={{ borderColor: "#DEA05B" }}
            >
              <div>
                <h3 className="text-lg font-bold" style={{ color: "#DEA05B" }}>
                  {cust.name}
                </h3>
                <p className="text-gray-600">
                  {cust.email} • {cust.phone}
                </p>
                <p className="text-gray-600 text-sm">
                  {cust.gender} • {cust.addressStreet}, {cust.addressCity}
                </p>
                <p className="text-gray-600 text-sm">
                  Loyalty Points: {cust.loyaltyPoints}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`inline-block px-3 py-1 text-xs rounded-full font-semibold ${
                    cust.active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
                  }`}
                >
                  {cust.active ? "Aktif" : "Tidak Aktif"}
                </span>
                <button
                  className="text-red-500 text-sm font-medium hover:underline"
                  onClick={() => handleDelete(cust.id)}
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Form Pelanggan */}
        <div
          className="bg-white border p-4 rounded-xl shadow"
          style={{ borderColor: "#DEA05B" }}
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold" style={{ color: "#DEA05B" }}>
              Tambah Pelanggan Baru
            </h2>
            <button
              type="button"
              onClick={handleReset}
              className="text-sm border rounded-full px-3 py-1 hover:bg-[#f7f1e6]"
              style={{ borderColor: "#DEA05B", color: "#DEA05B" }}
            >
              Reset
            </button>
          </div>
          <form onSubmit={handleAddCustomer} className="space-y-1">
            <div>
              <label className="block text-sm text-gray-700">Nama</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border px-3 py-1 rounded"
                style={{ borderColor: "#DEA05B" }}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border px-3 py-1 rounded"
                style={{ borderColor: "#DEA05B" }}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Telepon</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border px-3 py-1 rounded"
                style={{ borderColor: "#DEA05B" }}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Alamat (Jalan)</label>
              <input
                type="text"
                name="addressStreet"
                value={formData.addressStreet}
                onChange={handleInputChange}
                className="w-full border px-3 py-1 rounded"
                style={{ borderColor: "#DEA05B" }}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Alamat (Kota)</label>
              <input
                type="text"
                name="addressCity"
                value={formData.addressCity}
                onChange={handleInputChange}
                className="w-full border px-3 py-1 rounded"
                style={{ borderColor: "#DEA05B" }}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full border px-3 py-1 rounded"
                style={{ borderColor: "#DEA05B" }}
              >
                <option value="">Pilih</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-700">Loyalty Points</label>
              <input
                type="number"
                name="loyaltyPoints"
                value={formData.loyaltyPoints}
                onChange={handleInputChange}
                className="w-full border px-3 py-1 rounded"
                style={{ borderColor: "#DEA05B" }}
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="active"
                checked={formData.active}
                onChange={handleInputChange}
                id="activeCheckbox"
                className="mr-1"
                style={{ accentColor: "#DEA05B" }}
              />
              <label htmlFor="activeCheckbox" className="text-sm text-gray-700">
                Aktif
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-1.5 rounded-full text-white font-semibold"
              style={{ backgroundColor: "#DEA05B" }}
            >
              Simpan Pelanggan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
