import React from "react";
import ig1 from "../img/ig1.jpg";
import ig2 from "../img/ig2.jpg";
import ig3 from "../img/ig3.jpg";
import ig4 from "../img/ig4.jpg";
import ig5 from "../img/ig5.jpg";
import ig6 from "../img/ig6.jpg";
import ig from "../img/ig.jpg";

const posts = [
  { image: ig2, link: "https://instagram.com/beningsclinic_pekanbaru" },
  { image: ig6, link: "https://instagram.com/beningsclinic_pekanbaru" },
  { image: ig5, link: "https://instagram.com/beningsclinic_pekanbaru" },
  { image: ig1, link: "https://instagram.com/beningsclinic_pekanbaru" },
  { image: ig4, link: "https://instagram.com/beningsclinic_pekanbaru" },
  { image: ig3, link: "https://instagram.com/beningsclinic_pekanbaru" },
];

export default function Marketing() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className="text-3xl font-semibold mb-2 text-[#DEA05B]"
          style={{ fontFamily: "Judson, judson" }}
        >
          On Instagram
        </h2>
        <p className="text-gray-600 mb-8" style={{ fontFamily: "Judson, judson" }}>
          Ikuti kami di Instagram untuk melihat produk & perawatan terbaru!
        </p>

        {/* Keeping grid-cols-1 sm:grid-cols-2 md:grid-cols-3 as requested */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <a
              href={post.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-md shadow hover:shadow-lg transition"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-300"
                />
                <img
                  src={ig}
                  alt="Instagram"
                  className="absolute bottom-2 right-2 w-6 h-6 rounded-full opacity-90 group-hover:scale-110 transition"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Tombol "Follow Us on Instagram" */}
        <a
          href="https://www.instagram.com/beningsclinic_pekanbaru" // Pastikan ini adalah tautan Instagram yang benar
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block bg-[#DEA05B] text-white px-10 py-4 rounded-full font-semibold hover:bg-amber-600 transition duration-300 shadow-lg transform hover:scale-105 text-lg" >
          Follow Us on Instagram
        </a>
      </div>
    </div>
  );
}