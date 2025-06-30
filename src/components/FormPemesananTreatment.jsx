import { useState, useEffect } from 'react';

const UserForm = ({ addUser, updateUser, editingUser }) => {
  const [form, setForm] = useState({ name: '', email: '', role: '' });

  useEffect(() => {
    if (editingUser) setForm(editingUser);
    else setForm({ name: '', email: '', role: '' });
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) return;
    editingUser ? updateUser(form) : addUser(form);
    setForm({ name: '', email: '', role: '' });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Form Pengguna</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Nama</label>
          <input
            type="text"
            placeholder="Masukkan nama"
            className="w-full px-4 py-2 border rounded-md"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            placeholder="Masukkan email"
            className="w-full px-4 py-2 border rounded-md"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Role</label>
          <select
            className="w-full px-4 py-2 border rounded-md"
            value={form.role}
            onChange={e => setForm({ ...form, role: e.target.value })}
          >
            <option value="">-- Pilih Role --</option>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md"
        >
          {editingUser ? 'Perbarui Pengguna' : 'Tambah Pengguna'}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
