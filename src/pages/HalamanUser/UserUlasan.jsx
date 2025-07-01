import React, { useState } from 'react';

const UserUlasan = () => {
  const [rating, setRating] = useState(0);
  const [ulasan, setUlasan] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Terima kasih atas ulasan Anda!");
    setRating(0);
    setUlasan('');
  };

  return (
    <div className="min-h-screen bg-[#FFF9F0] pt-28 px-6 sm:px-10 font-judson">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Judson:wght@400;700&display=swap');
        .font-judson { font-family: 'Judson', serif; }
        `}
      </style>

      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        <h2 className="text-4xl font-bold text-center text-[#8B5E3C] mb-10">Beri Ulasan</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Input Rating */}
          <div>
            <label className="block text-lg text-gray-700 font-semibold mb-2">Penilaian Anda</label>
            <div className="flex space-x-3 text-3xl text-[#DEA05B] select-none">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  type="button"
                  key={num}
                  onClick={() => setRating(num)}
                  className={`focus:outline-none transition transform hover:scale-125 ${
                    num <= rating ? 'text-[#DEA05B]' : 'text-gray-300'
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Input Ulasan */}
          <div>
            <label className="block text-lg text-gray-700 font-semibold mb-2">Tulis Ulasan</label>
            <textarea
              value={ulasan}
              onChange={(e) => setUlasan(e.target.value)}
              rows="5"
              placeholder="Bagikan pengalaman Anda di sini..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#DEA05B] resize-none"
            />
          </div>

          {/* Tombol Submit */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#DEA05B] hover:bg-[#C18F4E] text-white font-bold py-3 rounded-full shadow-lg transition duration-300"
            >
              Kirim Ulasan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserUlasan;
