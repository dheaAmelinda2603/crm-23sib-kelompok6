import React, { useState } from 'react';
import defaultProfile from '../../assets/rejuran.jpg'; // Pastikan path benar

const UserPengaturan = () => {
  const [nama, setNama] = useState('Nadia Fitri Lase');
  const [email, setEmail] = useState('nadia@example.com');
  const [password, setPassword] = useState('');
  const [notifikasi, setNotifikasi] = useState(true);
  const [fotoProfil, setFotoProfil] = useState(defaultProfile); // Default dari rejuran.jpg

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFotoProfil(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pengaturan berhasil disimpan.");
  };

  return (
    <div className="min-h-screen bg-[#FEF9F5] pt-28 px-6 sm:px-10 font-judson">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Judson:wght@400;700&display=swap');
        .font-judson { font-family: 'Judson', serif; }
        `}
      </style>

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-10">
        <h2 className="text-4xl font-bold text-[#8B5E3C] text-center mb-10">Pengaturan Akun</h2>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Ganti Foto Profil */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#DEA05B] mb-3">
              <img
                src={fotoProfil}
                alt="Foto Profil"
                className="w-full h-full object-cover"
              />
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFotoChange}
              className="text-sm text-gray-600"
            />
          </div>

          {/* Ganti Nama */}
          <div>
            <label className="block text-[#8B5E3C] font-semibold mb-2">Nama Lengkap</label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DEA05B]"
            />
          </div>

          {/* Ganti Email */}
          <div>
            <label className="block text-[#8B5E3C] font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DEA05B]"
            />
          </div>

          {/* Ganti Password */}
          <div>
            <label className="block text-[#8B5E3C] font-semibold mb-2">Password Baru</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password baru"
              className="w-full px-4 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DEA05B]"
            />
          </div>

          {/* Checkbox Notifikasi */}
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              checked={notifikasi}
              onChange={(e) => setNotifikasi(e.target.checked)}
              className="h-5 w-5 mr-3 text-[#DEA05B] border-gray-300 rounded"
            />
            <span className="text-gray-700">Aktifkan notifikasi melalui email</span>
          </div>

          {/* Tombol Simpan */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#DEA05B] hover:bg-[#C18F4E] text-white font-bold py-3 rounded-full shadow-md transition duration-300"
            >
              Simpan Pengaturan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserPengaturan;
