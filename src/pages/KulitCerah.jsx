import React, { useState } from "react";
import Facial from "../assets/facial.png";
import Proyellow from "../assets/proyellow.jpg";
import Rejuran from "../assets/rejuran.jpg";
import Chromosome from "../assets/chromosome.jpg";

function KulitCerah() {
  const treatmentMenus = [
    { title: "Facial Treatments", image: Facial  },
    { title: "Laser Proyellow", image: Proyellow },
    { title: "Rejuran Whitening Healer", image:Rejuran },
    { title: "Chromosome Facial", image: Chromosome },
  ];

  const [selectedImage, setSelectedImage] = useState(treatmentMenus[0].image);

  return (
    <section className="bg-white px-4 py-20 text-center" style={{ fontFamily: 'Judson, Judson' }}> 
      <div className="max-w-7xl mx-auto"> 
        <h3 className="text-3xl md:text-4xl font-bold text-[#DEA05B] mb-4"> 
          Kulit Cerah & Sehat, Bersama Sentuhan Ahli Bening’s Clinic
        </h3>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed"> 
          Tim ahli kami menghadirkan perawatan kulit yang disesuaikan untuk menonjolkan kecantikan alami Anda,
          memberikan hasil nyata yang membuat Anda tampil percaya diri dan segar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Menu */}
          <div className="space-y-4 text-left">
            {treatmentMenus.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(item.image)}
                className={`w-full text-left px-5 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-md
                  ${selectedImage === item.image
                    ? 'bg-[#DEA05B] text-white' // Warna aktif
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} 
                `}>
                {item.title}
              </button>
            ))}
          </div>

          {/* Dynamic Image Preview */}
          <div className="bg-gray-100 h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden flex justify-center items-center shadow-lg"> 
            <img src={selectedImage} alt="Preview" className="h-full w-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105" />
          </div>

          {/* Right Info Box */}
          <div className="bg-[#f7f3ef] rounded-lg p-6 text-left shadow-lg"> 
            <h4 className="text-xl font-bold text-gray-800 mb-3"> 
              Perawatan Wajah untuk Menutrisi dan Meremajakan Kulit
            </h4>
            <p className="text-base text-gray-700 mb-4 leading-relaxed"> 
              Manjakan diri Anda dengan perawatan wajah khusus yang disesuaikan dengan jenis dan masalah kulit unik Anda.
            </p>
            <ul className="text-base list-disc list-inside text-gray-700 space-y-2 mb-6"> 
              <li>Pembersihan Mendalam</li>
              <li>Pengelupasan kulit</li>
              <li>Meningkatkan Sirkulasi</li>
              <li>Hidrasi</li>
            </ul>
            <button className="bg-[#DEA05B] hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 shadow-md transform hover:scale-105"> 
              Mulai Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KulitCerah;
