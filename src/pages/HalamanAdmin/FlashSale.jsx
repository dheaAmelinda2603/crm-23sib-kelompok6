import { useState, useEffect } from "react";

function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 bg-[#DEA05B] text-white p-4 rounded shadow-lg z-50" style={{ fontFamily: "Judson, serif" }}>
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

  const [form, setForm] = useState({ id: null, title: "", desc: "" });
  const [isEditing, setIsEditing] = useState(false);

  const handlePromoClick = (promo) => {
    setSelectedPromoId(selectedPromoId === promo.id ? null : promo.id);
    setToastMessage(`Kamu memilih promo: ${promo.title}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.desc.trim()) {
      alert("Mohon isi judul dan deskripsi promo!");
      return;
    }

    if (isEditing) {
      setPromos((prev) =>
        prev.map((p) => (p.id === form.id ? { ...form } : p))
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

  const handleEdit = (promo) => {
    setForm(promo);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus promo ini?")) {
      const deletedPromo = promos.find((p) => p.id === id);
      setPromos((prev) => prev.filter((p) => p.id !== id));
      setToastMessage(`Promo "${deletedPromo.title}" berhasil dihapus!`);
      if (selectedPromoId === id) setSelectedPromoId(null);
    }
  };

  return (
    <div className="p-6 bg-[#fdfcfc] min-h-screen max-w-3xl mx-auto" style={{ fontFamily: "Judson, serif" }}>
      <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: "#DEA05B" }}>
        Promo Flash Sale – Benings Clinic
      </h2>

      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}

      <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded shadow space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Judul Promo"
          value={form.title}
          onChange={handleChange}
          className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#DEA05B]"
          style={{ borderColor: "#DEA05B" }}
        />
        <textarea
          name="desc"
          placeholder="Deskripsi Promo"
          value={form.desc}
          onChange={handleChange}
          rows={3}
          className="w-full border rounded p-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#DEA05B]"
          style={{ borderColor: "#DEA05B" }}
        />
        <div className="flex gap-3">
          <button
            type="submit"
            className="px-4 py-2 text-white rounded hover:opacity-90 transition"
            style={{ backgroundColor: "#DEA05B" }}
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

      <ul className="space-y-4">
        {promos.length === 0 ? (
          <li className="text-center text-gray-500">Belum ada promo.</li>
        ) : (
          promos.map((promo) => (
            <li
              key={promo.id}
              className="p-6 bg-white border rounded-xl shadow hover:bg-[#fff5ea] transition-all cursor-pointer relative"
              style={{ borderColor: "#DEA05B" }}
              onClick={() => handlePromoClick(promo)}
            >
              <h3 className="text-xl font-semibold" style={{ color: "#DEA05B" }}>{promo.title}</h3>

              {selectedPromoId === promo.id && (
                <p className="mt-2 text-gray-700">{promo.desc}</p>
              )}

              <div
                className="absolute top-4 right-4 flex gap-3"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => handleEdit(promo)}
                  className="hover:underline"
                  style={{ color: "#DEA05B" }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(promo.id)}
                  className="hover:underline"
                  style={{ color: "#DEA05B" }}
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
