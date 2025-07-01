// src/pages/HalamanUser/UserWishlist.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserWishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [nama, setNama] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('wishlist');
    if (stored) setWishlist(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const handleTambahWishlist = () => {
    if (!nama || !deskripsi) return alert('Harap isi nama dan deskripsi treatment.');

    const slug = nama.toLowerCase().replace(/\s+/g, '-');
    if (wishlist.some((item) => item.slug === slug)) {
      alert('Treatment sudah ada di wishlist!');
      return;
    }

    const newItem = {
      id: Date.now(),
      nama,
      deskripsi,
      slug,
    };

    setWishlist([...wishlist, newItem]);
    setNama('');
    setDeskripsi('');
  };

  const handleHapus = (id) => {
    const filtered = wishlist.filter((item) => item.id !== id);
    setWishlist(filtered);
  };

  return (
    <div className="min-h-screen bg-[#FDF6EF] pt-28 px-6 sm:px-10 font-judson">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Judson:wght@400;700&display=swap');
          .font-judson { font-family: 'Judson', serif; }
        `}
      </style>

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 sm:p-12">
        <h2 className="text-4xl font-bold text-center text-[#8B5E3C] mb-12">
          Wishlist Treatment
        </h2>

        {/* Form Tambah Wishlist */}
        <div className="bg-[#FFF3E6] rounded-xl p-6 shadow mb-10">
          <h3 className="text-2xl font-bold mb-4 text-[#8B5E3C]">Tambah Treatment Baru</h3>
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Nama Treatment"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DEA05B]"
            />
            <textarea
              placeholder="Deskripsi Treatment"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#DEA05B]"
            />
            <button
              onClick={handleTambahWishlist}
              className="self-end bg-[#DEA05B] hover:bg-[#C58F4D] text-white font-semibold px-6 py-2 rounded-full transition duration-300 shadow"
            >
              Tambah ke Wishlist
            </button>
          </div>
        </div>

        {/* Daftar Wishlist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wishlist.length > 0 ? (
            wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-[#FFF6E9] border border-[#F3E0D0] rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 ease-in-out"
              >
                <h3 className="text-2xl font-bold text-[#8B5E3C] mb-2">{item.nama}</h3>
                <p className="text-gray-600 mb-4">{item.deskripsi}</p>

                <div className="flex justify-between items-center">
                  <Link
                    to={`/detail-treatment/${item.slug}`}
                    className="bg-[#DEA05B] hover:bg-[#C58F4D] text-white font-semibold px-5 py-2 rounded-full transition duration-300 shadow"
                  >
                    Lihat Detail
                  </Link>
                  <button
                    onClick={() => handleHapus(item.id)}
                    className="text-red-500 font-medium hover:underline text-sm"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-2">Belum ada treatment di wishlist.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserWishlist;
