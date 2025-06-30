import { useState } from "react";

const initialData = [
  { id: 1, name: "Siti", points: 120, level: "Gold" },
  { id: 2, name: "Dinda", points: 80, level: "Silver" },
  { id: 3, name: "Michelle", points: 30, level: "Bronze" },
];

// Badge component untuk level
function Badge({ level }) {
  const colors = {
    Gold: "bg-yellow-400 text-yellow-900",
    Silver: "bg-gray-400 text-gray-900",
    Bronze: "bg-orange-400 text-orange-900",
    Default: "bg-gray-200 text-gray-700",
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

  function getLevel(points) {
    if (points >= 100) return "Gold";
    if (points >= 50) return "Silver";
    if (points > 0) return "Bronze";
    return "None";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || form.points === "") {
      alert("Mohon isi nama dan poin!");
      return;
    }

    const pointsNum = Number(form.points);
    if (isNaN(pointsNum) || pointsNum < 0) {
      alert("Poin harus angka positif");
      return;
    }

    if (isEditing) {
      setUsers(users.map(u => u.id === form.id ? { ...form, points: pointsNum, level: getLevel(pointsNum) } : u));
    } else {
      const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name: form.name,
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
      className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-10"
      style={{ fontFamily: 'Judson, serif' }}
    >
      <h2
        className="text-2xl font-bold mb-4 text-center"
        style={{ color: '#DEA05B' }}
      >
        Loyalty Points - Benings Clinic
      </h2>

      <form onSubmit={handleSubmit} className="mb-6 flex gap-4 flex-wrap">
        <input
          type="text"
          name="name"
          placeholder="Nama User"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded flex-grow min-w-[150px]"
          style={{ borderColor: '#DEA05B' }}
        />
        <input
          type="number"
          name="points"
          placeholder="Poin"
          value={form.points}
          onChange={handleChange}
          className="border p-2 rounded w-24"
          style={{ borderColor: '#DEA05B' }}
        />
        <button
          type="submit"
          className="px-4 rounded text-white font-semibold"
          style={{ backgroundColor: '#DEA05B' }}
        >
          {isEditing ? "Update" : "Tambah"}
        </button>
        {isEditing && (
          <button
            type="button"
            onClick={() => { setIsEditing(false); setForm({ id: null, name: "", points: "" }); }}
            className="px-4 rounded border border-gray-300 hover:bg-gray-100"
          >
            Batal
          </button>
        )}
      </form>

      <table className="w-full border-collapse" style={{ borderColor: '#DEA05B' }}>
        <thead style={{ backgroundColor: '#FFF2E3', color: '#DEA05B' }}>
          <tr>
            <th className="border px-4 py-2 text-left">Nama</th>
            <th className="border px-4 py-2 text-left w-24">Poin</th>
            <th className="border px-4 py-2 text-left">Level</th>
            <th className="border px-4 py-2 text-center w-36">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr><td colSpan="4" className="text-center p-4">Data tidak ada</td></tr>
          ) : (
            users.map(user => (
              <tr key={user.id} className="hover:bg-[#FFF2E3]">
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.points}</td>
                <td className="border px-4 py-2"><Badge level={user.level} /></td>
                <td className="border px-4 py-2 text-center space-x-2">
                  <button
                    onClick={() => handleEdit(user)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-600 hover:underline"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
