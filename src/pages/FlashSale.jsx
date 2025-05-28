import { useState, useEffect } from "react";

function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // notifikasi hilang setelah 3 detik
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 bg-pink-600 text-white p-4 rounded shadow-lg z-50">
      {message}
    </div>
  );
}

export default function FlashSaleBenings() {
  const [promos, setPromos] = useState([
    {
      id: 1,
      title: "Glowing Skin Package - 30% Off",
      desc: "Diskon untuk treatment Glowing Skin + Facial. Berlaku hingga 30 Juni.",
    },
    {
      id: 2,
      title: "Free Serum Premium Benings",
      desc: "Dapatkan 1 botol serum premium gratis untuk setiap transaksi di atas Rp500.000.",
    },
    {
      id: 3,
      title: "Acne Clear Package Rp250K",
      desc: "Perawatan jerawat komplit untuk kulit cerah & bersih. Promo terbatas!",
    },
  ]);

  const [selectedPromoId, setSelectedPromoId] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Form state untuk add/edit
  const [form, setForm] = useState({ id: null, title: "", desc: "" });
  const [isEditing, setIsEditing] = useState(false);

  // Toggle deskripsi promo & tampilkan toast
  const handlePromoClick = (promo) => {
    setSelectedPromoId(selectedPromoId === promo.id ? null : promo.id);
    setToastMessage(`Kamu memilih promo: ${promo.title}`);
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Submit add/edit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim() || !form.desc.trim()) {
      alert("Mohon isi judul dan deskripsi promo!");
      return;
    }

    if (isEditing) {
      setPromos((prev) =>
        prev.map((p) =>
          p.id === form.id ? { ...form } : p
        )
      );
      setToastMessage(`Promo "${form.title}" berhasil diupdate!`);
    } else {
      const newPromo = {
        id: promos.length ? promos[promos.length - 1].id + 1 : 1,
        title: form.title,
        desc: form.desc,
      };
      setPromos((prev) => [...prev, newPromo]);
      setToastMessage(`Promo "${form.title}" berhasil ditambahkan!`);
    }

    setForm({ id: null, title: "", desc: "" });
    setIsEditing(false);
  };

  // Edit promo
  const handleEdit = (promo) => {
    setForm(promo);
    setIsEditing(true);
  };

  // Delete promo
  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus promo ini?")) {
      const deletedPromo = promos.find((p) => p.id === id);
      setPromos((prev) => prev.filter((p) => p.id !== id));
      setToastMessage(`Promo "${deletedPromo.title}" berhasil dihapus!`);
      if (selectedPromoId === id) setSelectedPromoId(null);
    }
  };

  return (
    <div className="p-6 bg-[#fdfcfc] min-h-screen max-w-3xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-pink-700 mb-6 text-center">
        Promo Flash Sale – Benings Clinic
      </h2>

      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}

      {/* Form Add/Edit */}
      <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded shadow space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Judul Promo"
          value={form.title}
          onChange={handleChange}
          className="w-full border border-pink-300 rounded p-2"
        />
        <textarea
          name="desc"
          placeholder="Deskripsi Promo"
          value={form.desc}
          onChange={handleChange}
          rows={3}
          className="w-full border border-pink-300 rounded p-2 resize-none"
        />
        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
          >
            {isEditing ? "Update Promo" : "Tambah Promo"}
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setForm({ id: null, title: "", desc: "" });
              }}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              Batal
            </button>
          )}
        </div>
      </form>

      {/* List promo */}
      <ul className="space-y-4">
        {promos.length === 0 ? (
          <li className="text-center text-gray-500">Belum ada promo.</li>
        ) : (
          promos.map((promo) => (
            <li
              key={promo.id}
              className="p-6 bg-white border border-pink-200 rounded-xl shadow hover:bg-pink-50 transition-all cursor-pointer relative"
              onClick={() => handlePromoClick(promo)}
            >
              <h3 className="text-xl font-semibold text-pink-700">{promo.title}</h3>

              {selectedPromoId === promo.id && (
                <p className="mt-2 text-gray-700">{promo.desc}</p>
              )}

              {/* Tombol Edit & Hapus */}
              <div
                className="absolute top-4 right-4 flex gap-3"
                onClick={(e) => e.stopPropagation()} // supaya klik tombol gak trigger toggle deskripsi
              >
                <button
                  onClick={() => handleEdit(promo)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(promo.id)}
                  className="text-red-600 hover:underline"
                >
                  Hapus
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
