import React from 'react'
import IMG1 from '../img/IMG1.png'
import IMG2 from '../img/IMG2.png'

function Perawatan() {
  return (
    <section
      className="bg-white py-28 px-6"
      style={{ fontFamily: 'Judson, judson' }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Gambar kiri */}
        <div className="flex flex-row justify-center items-start gap-6">
          <img
            src={IMG1}
            alt="Perawatan 1"
            className="w-48 h-64 object-cover rounded-[80px] mt-[-20px]"
          />
          <img
            src={IMG2}
            alt="Perawatan 2"
            className="w-48 h-64 object-cover rounded-[80px] mt-[20px]"
          />
        </div>

        {/* Teks kanan */}
        <div>
          <h3
            className="text-2xl md:text-3xl font-semibold mb-6"
            style={{ color: '#DEA05B' }}
          >
            Kami memberikan perawatan khusus untuk penampilan dan kecantikan Anda
          </h3>

          <p className="text-gray-700 text-lg leading-relaxed">
            Kami menawarkan layanan perawatan yang dirancang untuk meningkatkan
            penampilan dan kecantikan Anda. Dengan pengalaman dan perhatian pada
            setiap detail, kami membantu Anda tampil lebih menarik setiap hari.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Perawatan
