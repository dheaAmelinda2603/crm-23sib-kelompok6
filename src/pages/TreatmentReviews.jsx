import React, { useState } from "react";
import { Star } from "lucide-react";

export default function TreatmentReviews() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Dhea Amelinda",
      treatment: "Facial Glowing",
      rating: 5,
      comment: "Pelayanan sangat memuaskan dan hasilnya bagus!",
      date: "25 Mei 2025",
    },
    {
      id: 2,
      name: "Rizky Pratama",
      treatment: "Laser Acne Treatment",
      rating: 4,
      comment: "Lumayan, tapi ada sedikit rasa tidak nyaman.",
      date: "20 Mei 2025",
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    treatment: "",
    rating: 0,
    comment: "",
  });

  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-5 h-5 ${
            i <= count ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newReview.name.trim() &&
      newReview.treatment.trim() &&
      newReview.rating > 0 &&
      newReview.comment.trim()
    ) {
      const reviewToAdd = {
        ...newReview,
        id: Date.now(),
        date: new Date().toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        rating: Number(newReview.rating),
      };
      setReviews([reviewToAdd, ...reviews]);
      setNewReview({ name: "", treatment: "", rating: 0, comment: "" });
    } else {
      alert("Mohon isi semua kolom dengan benar.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Ulasan & Rating Treatment</h1>

      {/* Form input ulasan baru */}
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nama Anda"
            value={newReview.name}
            onChange={handleChange}
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-pink-500"
            required
          />
          <input
            type="text"
            name="treatment"
            placeholder="Nama Treatment"
            value={newReview.treatment}
            onChange={handleChange}
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-pink-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Rating:</label>
          <select name="rating" value={newReview.rating}  onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-pink-500" required >
            <option value={0}>Pilih rating</option>
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "bintang" : "bintang"}
              </option>
            ))}
          </select>
        </div>
        <div>
          <textarea
            name="comment"
            rows={4}
            placeholder="Tulis ulasan Anda..."
            value={newReview.comment}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-pink-500"
            required
          />
        </div>
        <button type="submit" className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition" >
          Kirim Ulasan
        </button>
      </form>

      {/* Daftar ulasan */}
      <div className="space-y-6">
        {reviews.length === 0 && <p className="text-gray-500">Belum ada ulasan.</p>}
        {reviews.map((review) => (
          <div key={review.id} className="border border-gray-200 rounded p-4 shadow-sm hover:shadow-md transition" >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-lg">{review.name}</h3>
              <div className="flex items-center">{renderStars(review.rating)}</div>
            </div>
            <p className="text-pink-600 font-medium mb-1">{review.treatment}</p>
            <p className="text-gray-700">{review.comment}</p>
            <p className="text-xs text-gray-400 mt-2">{review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
