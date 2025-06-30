import React, { useState } from "react";

const initialSales = [
  { id: 1, name: "Budi Santoso", email: "budi@mail.com", phone: "081234567890", active: true, salesTarget: 10000 },
  { id: 2, name: "Siti Aminah", email: "siti@mail.com", phone: "089876543210", active: false, salesTarget: 8000 },
  { id: 3, name: "Andi Wijaya", email: "andi@mail.com", phone: "081299988877", active: true, salesTarget: 12000 },
];

export default function Sales() {
  const [sales, setSales] = useState(initialSales);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", active: true, salesTarget: 0 });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddSales = () => {
    if (!formData.name || !formData.email || !formData.phone || formData.salesTarget <= 0) {
      alert("Semua field wajib diisi dan target penjualan harus lebih dari 0!");
      return;
    }
    const newSales = {
      id: sales.length + 1,
      ...formData,
    };
    setSales([...sales, newSales]);
    setFormData({ name: "", email: "", phone: "", active: true, salesTarget: 0 });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus sales ini?")) {
      setSales(sales.filter((s) => s.id !== id));
    }
  };

  return (
    <div
      className="p-6 max-w-5xl mx-auto"
      style={{ fontFamily: "Judson, serif" }}
    >
      <h1 className="text-3xl font-bold mb-4" style={{ color: "#DEA05B" }}>
        Manajemen Sales
      </h1>

      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="mb-4 px-4 py-2 rounded font-medium transition"
        style={{
          backgroundColor: "#DEA05B",
          color: "white",
        }}
      >
        {showForm ? "Batal Tambah Sales" : "Tambah Sales"}
      </button>

      {showForm && (
        <div
          className="mb-6 p-4 rounded shadow-sm bg-white"
          style={{ border: "1px solid #DEA05B" }}
        >
          <div className="mb-2">
            <label className="block font-medium mb-1">Nama</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2"
              style={{ borderColor: "#DEA05B", outlineColor: "#DEA05B" }}
              placeholder="Nama sales"
            />
          </div>
          <div className="mb-2">
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2"
              style={{ borderColor: "#DEA05B", outlineColor: "#DEA05B" }}
              placeholder="Email sales"
            />
          </div>
          <div className="mb-2">
            <label className="block font-medium mb-1">Telepon</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2"
              style={{ borderColor: "#DEA05B", outlineColor: "#DEA05B" }}
              placeholder="Nomor telepon"
            />
          </div>
          <div className="mb-2">
            <label className="block font-medium mb-1">Target Penjualan</label>
            <input
              type="number"
              name="salesTarget"
              value={formData.salesTarget}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2"
              style={{ borderColor: "#DEA05B", outlineColor: "#DEA05B" }}
              placeholder="Target penjualan"
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="active"
              checked={formData.active}
              onChange={handleInputChange}
              id="activeCheckbox"
              className="mr-2"
              style={{ accentColor: "#DEA05B" }}
            />
            <label htmlFor="activeCheckbox" className="font-medium">Aktif</label>
          </div>
          <button
            onClick={handleAddSales}
            className="px-4 py-2 rounded font-medium transition"
            style={{
              backgroundColor: "#DEA05B",
              color: "white",
            }}
          >
            Simpan
          </button>
        </div>
      )}

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead style={{ backgroundColor: "#f9f5ef" }}>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Nama</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Telepon</th>
              <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Target</th>
              <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sales.map((s) => (
              <tr key={s.id} className="hover:bg-[#fff7ed] transition">
                <td className="px-6 py-4 whitespace-nowrap">{s.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{s.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{s.phone}</td>
                <td className="px-6 py-4 text-center">{s.salesTarget}</td>
                <td className="px-6 py-4 text-center">
                  {s.active ? (
                    <span className="inline-flex px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-700">
                      Aktif
                    </span>
                  ) : (
                    <span className="inline-flex px-2 text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-700">
                      Tidak Aktif
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-center space-x-2">
                  <button
                    className="text-[#DEA05B] hover:underline font-medium"
                    onClick={() => alert("Fitur Edit belum tersedia")}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:underline font-medium"
                    onClick={() => handleDelete(s.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {sales.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  Tidak ada data sales
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
