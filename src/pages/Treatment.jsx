import React, { useState } from "react";
import Facial from "../assets/facial.png";
import Meso from "../assets/meso.jpg";
import Hifu from "../assets/hifu.jpg";
import Prp from "../assets/prp.jpg";
import Proyellow from "../assets/proyellow.jpg";
import Rejuran from "../assets/rejuran.jpg";
import Chromosome from "../assets/chromosome.jpg";

const Beranda = () => {
  const [selectedImage, setSelectedImage] = useState(Facial);

  const treatmentMenus = [
    { title: "Facial Treatments", image: Facial },
    { title: "Laser Proyellow", image: Proyellow },
    { title: "Rejuran Whitening Healer", image: Rejuran },
    { title: "Chromosome Facial", image: Chromosome },
  ];

  return (
    <div className="bg-white">

      {/* Section: Layanan Khusus */}
      <div className="text-center py-10 px-4 bg-[#f8f4f0]" style={{ fontFamily: 'Judson, Judson' }}>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Layanan Khusus Kami</h2>
        <p className="text-sm text-gray-600 mb-8 max-w-2xl mx-auto">
          Dapatkan pengalaman kecantikan eksklusif dengan promosi waktu terbatas kami.
          Temukan jalan menuju kepercayaan diri yang cemerlang. Jelajahi sekarang.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
          {[
            { title: "Facial Treatment", img: Facial },
            { title: "Mesolipolysis Treatment", img: Meso },
            { title: "Hifu Treatment", img: Hifu },
            { title: "PRP Treatment", img: Prp },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-44 object-cover" />
              <div className="p-3 font-medium text-sm text-gray-700">{item.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Kulit Cerah & Sehat */}
      <div className="bg-white px-6 py-12 text-center" style={{ fontFamily: 'Judson, Judson' }}>
        <h3 className="text-xl font-bold text-[#D4993E] mb-2">
          Kulit Cerah & Sehat, Bersama Sentuhan Ahli Bening’s Clinic
        </h3>
        <p className="text-sm text-gray-700 max-w-2xl mx-auto mb-10">
          Tim ahli kami menghadirkan perawatan kulit yang disesuaikan untuk menonjolkan kecantikan alami Anda
          memberikan hasil nyata yang membuat Anda tampil percaya diri dan segar.
        </p>

        <div className="grid md:grid-cols-3 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Menu */}
          <div className="space-y-4 text-left">
            {treatmentMenus.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(item.image)}
                className="bg-[#d8b3a1] text-white px-4 py-3 rounded-lg w-full text-left hover:bg-[#c99a85]"
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Dynamic Image Preview */}
          <div className="bg-gray-100 h-64 rounded-lg overflow-hidden flex justify-center items-center">
            <img src={selectedImage} alt="Preview" className="h-full w-full object-cover rounded-lg" />
          </div>

          {/* Right Info Box */}
          <div className="bg-[#f7f3ef] rounded-lg p-6 text-left">
            <h4 className="text-md font-semibold mb-2">
              Perawatan Wajah untuk Menutrisi dan Meremajakan Kulit
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Manjakan diri Anda dengan perawatan wajah khusus yang disesuaikan dengan jenis dan masalah kulit unik Anda.
            </p>
            <ul className="text-sm list-disc list-inside text-gray-600 space-y-1 mb-4">
              <li>Pembersihan Mendalam</li>
              <li>Pengelupasan kulit</li>
              <li>Meningkatkan Sirkulasi</li>
              <li>Hidrasi</li>
            </ul>
            <button className="bg-[#d8b3a1] hover:bg-[#c99a85] text-white px-4 py-2 rounded">
              Mulai Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
