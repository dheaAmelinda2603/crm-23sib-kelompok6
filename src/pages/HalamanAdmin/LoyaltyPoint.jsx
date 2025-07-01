import { useState } from "react";
import { Edit, Trash2, PlusCircle, CheckCircle, XCircle } from 'lucide-react'; // Import icons from lucide-react

const initialData = [
  { id: 1, name: "Siti Rahmawati", points: 250, level: "Premium" },
  { id: 2, name: "Dinda Anggraini", points: 80, level: "Silver" },
  { id: 3, name: "Michelle Tan", points: 30, level: "Reguler" },
  { id: 4, name: "Andi Wijaya", points: 150, level: "Gold" },
  { id: 5, name: "Budi Santoso", points: 0, level: "Reguler" },
  { id: 6, name: "Clara Devi", points: 200, level: "Premium" },
  { id: 7, name: "Eko Prasetyo", points: 65, level: "Silver" },
  { id: 8, name: "Fany Lestari", points: 110, level: "Gold" },
  { id: 9, name: "Gilang Ramadhan", points: 5, level: "Reguler" },
  { id: 10, name: "Hana Putri", points: 300, level: "Premium" },
];

// Badge component for levels with updated colors
function Badge({ level }) {
  const colors = {
    Premium: "bg-purple-200 text-purple-800",
    Gold: "bg-yellow-200 text-yellow-800",
    Silver: "bg-gray-200 text-gray-800",
    Reguler: "bg-blue-200 text-blue-800",
    Default: "bg-gray-100 text-gray-600", // Fallback for unknown levels
  };
  const colorClass = colors[level] || colors.Default;
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${colorClass}`}>
      {level}
    </span>
  );
}

export default function LoyaltyPoints() {
  const [users, setUsers] = useState(initialData);
  const [form, setForm] = useState({ id: null, name: "", points: "" });
  const [isEditing, setIsEditing] = useState(false);

  // Updated getLevel function for new tiers
  function getLevel(points) {
    if (points >= 200) return "Premium";
    if (points >= 100) return "Gold";
    if (points >= 50) return "Silver";
    return "Reguler"; // Any points below 50 (including 0)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || form.points === "") {
      alert("Mohon isi nama dan poin!");
      return;
    }

    const pointsNum = Number(form.points);
    if (isNaN(pointsNum) || pointsNum < 0) {
      alert("Poin harus angka positif atau nol!");
      return;
    }

    if (isEditing) {
      setUsers(users.map(u => u.id === form.id ? { ...form, points: pointsNum, level: getLevel(pointsNum) } : u));
    } else {
      const newUser = {
        id: users.length ? Math.max(...users.map(u => u.id)) + 1 : 1, // Ensure unique ID even after deletions
        name: form.name.trim(),
        points: pointsNum,
        level: getLevel(pointsNum),
      };
      setUsers([...users, newUser]);
    }

    setForm({ id: null, name: "", points: "" });
    setIsEditing(false);
  };

  const handleEdit = (user) => {
    setForm(user);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus data ini?")) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div
      className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 font-judson" // Added rounded-xl, shadow-lg, and font-judson
    >
      {/* Inline style for Judson font import (best to put in CSS file for production) */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Judson:wght@400;700&display=swap');
        .font-judson { font-family: 'Judson', serif; }
        .text-[#DEA05B] { color: #DEA05B; }
        .bg-[#DEA05B] { background-color: #DEA05B; }
        .hover\\:bg-[#C98A46]:hover { background-color: #C98A46; } /* Consistent hover color */
        .border-[#DEA05B] { border-color: #DEA05B; }
        `}
      </style>

      <h2
        className="text-3xl font-bold mb-6 text-center text-[#DEA05B]" // Larger, bolder title
      >
        Loyalty Points - Bening's Clinic
      </h2>

      <form onSubmit={handleSubmit} className="mb-8 flex flex-col sm:flex-row gap-4 items-center">
        <input
          type="text"
          name="name"
          placeholder="Nama Member" // More descriptive placeholder
          value={form.name}
          onChange={handleChange}
          className="flex-grow w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DEA05B] focus:border-transparent transition-all duration-200"
        />
        <input
          type="number"
          name="points"
          placeholder="Poin"
          value={form.points}
          onChange={handleChange}
          className="w-full sm:w-32 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DEA05B] focus:border-transparent transition-all duration-200"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2 rounded-md text-white font-semibold shadow-md bg-[#DEA05B] hover:bg-[#C98A46] transition-colors duration-300 flex items-center justify-center gap-2"
        >
          {isEditing ? <CheckCircle size={18} /> : <PlusCircle size={18} />}
          {isEditing ? "Update Member" : "Tambah Member"}
        </button>
        {isEditing && (
          <button
            type="button"
            onClick={() => { setIsEditing(false); setForm({ id: null, name: "", points: "" }); }}
            className="w-full sm:w-auto px-6 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <XCircle size={18} /> Batal
          </button>
        )}
      </form>

      <div className="overflow-x-auto"> {/* Ensures table is scrollable on small screens */}
        <table className="w-full min-w-[500px] border-collapse rounded-lg overflow-hidden shadow-sm"> {/* Added overflow-hidden and shadow-sm */}
          <thead className="bg-[#FFF2E3] text-[#DEA05B] text-sm uppercase tracking-wider"> {/* Styled header */}
            <tr>
              <th className="px-4 py-3 text-left">Nama</th>
              <th className="px-4 py-3 text-left w-24">Poin</th>
              <th className="px-4 py-3 text-left">Level</th>
              <th className="px-4 py-3 text-center w-36">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100"> {/* Added row divider */}
            {users.length === 0 ? (
              <tr><td colSpan="4" className="text-center p-6 text-gray-500">Tidak ada data member. Silakan tambahkan!</td></tr>
            ) : (
              users.map(user => (
                <tr key={user.id} className="bg-white hover:bg-[#FFF2E3]/50 transition-colors duration-150"> {/* Subtle hover */}
                  <td className="px-4 py-3 text-gray-800">{user.name}</td>
                  <td className="px-4 py-3 text-gray-800">{user.points}</td>
                  <td className="px-4 py-3"><Badge level={user.level} /></td>
                  <td className="px-4 py-3 text-center space-x-3"> {/* Increased space between buttons */}
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-blue-500 hover:text-blue-700 transition-colors duration-200 p-1 rounded-full hover:bg-blue-50"
                      title="Edit Member"
                    >
                      <Edit size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-200 p-1 rounded-full hover:bg-red-50"
                      title="Hapus Member"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}