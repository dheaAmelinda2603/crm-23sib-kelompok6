import React, { useState } from 'react';
import profilePic from '../../assets/rejuran.jpg';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    nama: 'Nadia Fitri Lase',
    email: 'nadiafitri@gmail.com',
    noHP: '0812-3456-7890',
    jenisKelamin: 'Perempuan',
    tanggalLahir: '21 Juli 2001',
    alamat: 'Jl. Melur No. 25, Pekanbaru',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Simpan data (misalnya ke API atau localStorage)
    console.log('Data yang diperbarui:', formData);
    setIsEditing(false);
    alert('Profil berhasil diperbarui!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF6EB] to-[#FFEDE1] pt-28 p-6 sm:p-10 font-judson">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Judson:wght@400;700&display=swap');
        .font-judson { font-family: 'Judson', serif; }
        `}
      </style>

      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-10 border border-[#f4e2d6]">
        <h1 className="text-4xl font-bold text-center text-[#8B5E3C] mb-10">Profil Saya 🌸</h1>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-md border-4 border-[#DEA05B]">
            <img src={profilePic} alt="Foto Profil" className="w-full h-full object-cover" />
          </div>

          <div className="w-full">
            {!isEditing ? (
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <p className="font-semibold text-[#8B5E3C]">Nama:</p><p>{formData.nama}</p>
                <p className="font-semibold text-[#8B5E3C]">Email:</p><p>{formData.email}</p>
                <p className="font-semibold text-[#8B5E3C]">No. HP:</p><p>{formData.noHP}</p>
                <p className="font-semibold text-[#8B5E3C]">Jenis Kelamin:</p><p>{formData.jenisKelamin}</p>
                <p className="font-semibold text-[#8B5E3C]">Tanggal Lahir:</p><p>{formData.tanggalLahir}</p>
                <p className="font-semibold text-[#8B5E3C]">Alamat:</p><p>{formData.alamat}</p>
              </div>
            ) : (
              <form onSubmit={handleSave} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
                <div>
                  <label className="font-medium">Nama</label>
                  <input type="text" name="nama" value={formData.nama} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" />
                </div>
                <div>
                  <label className="font-medium">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" />
                </div>
                <div>
                  <label className="font-medium">No HP</label>
                  <input type="text" name="noHP" value={formData.noHP} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" />
                </div>
                <div>
                  <label className="font-medium">Jenis Kelamin</label>
                  <select name="jenisKelamin" value={formData.jenisKelamin} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1">
                    <option>Perempuan</option>
                    <option>Laki-laki</option>
                  </select>
                </div>
                <div>
                  <label className="font-medium">Tanggal Lahir</label>
                  <input type="text" name="tanggalLahir" value={formData.tanggalLahir} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1" />
                </div>
                <div className="sm:col-span-2">
                  <label className="font-medium">Alamat</label>
                  <textarea name="alamat" value={formData.alamat} onChange={handleChange} className="w-full border rounded px-3 py-2 mt-1"></textarea>
                </div>
                <div className="sm:col-span-2 flex justify-between mt-6">
                  <button type="button" onClick={() => setIsEditing(false)} className="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400">Batal</button>
                  <button type="submit" className="px-6 py-2 bg-[#DEA05B] text-white rounded hover:bg-[#C18F4E]">Simpan</button>
                </div>
              </form>
            )}

            {!isEditing && (
              <div className="pt-6 text-center md:text-left">
                <button onClick={() => setIsEditing(true)} className="bg-[#DEA05B] hover:bg-[#C18F4E] text-white font-bold px-8 py-2 rounded-full transition shadow-md hover:-translate-y-0.5">
                  Edit Profil
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
