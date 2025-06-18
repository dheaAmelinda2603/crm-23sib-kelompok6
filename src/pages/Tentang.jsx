import React from 'react'
// import AboutImg from '../img/about-img.png' 
import AboutImg from '../img/About.webp'


function Tentang() {
    return (
        <section className="min-h-screen bg-white py-24 px-6" style={{ fontFamily: 'Judson, judson' }}>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Teks Kiri */}
                <div>
                    <h2 className="text-4xl font-semibold text-[#DEA05B] mb-6">
                        Tentang Kami
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Bening’s Indonesia pertama kali diluncurkan pada tahun 2021 sebagai merek perawatan kulit hasil kolaborasi antara dokter dan apoteker berpengalaman
                        di Indonesia. Produk-produk kami telah bersertifikasi BPOM dan Halal, serta dipercaya oleh lebih dari 10.000 BIGpreneur di seluruh Indonesia.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Tahun 2024, kami memperkenalkan Skinmology Series, lini produk level-up dengan bahan aktif dari Eropa yang telah teruji secara dermatologis,
                        sebagai komitmen kami menghadirkan inovasi perawatan terbaik.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        Melengkapi produk skincare unggulan, Bening’s Clinic hadir sebagai solusi menyeluruh dalam dunia perawatan dan kecantikan. Kami memberikan layanan
                        premium mulai dari perawatan wajah, tubuh, hingga konsultasi kecantikan, dengan dukungan teknologi terkini dan tenaga ahli profesional.
                    </p>
                </div>

                {/* Gambar Kanan */}
                <div className="flex justify-center">
                    <img
                        src={AboutImg}
                        alt="Tentang Bening's Clinic"
                        className="rounded-[60px] w-full max-w-md object-cover shadow-lg"
                    />
                </div>
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-[#DEA05B] mb-4">
                        Kenapa Memilih Bening’s Clinic?
                    </h2>
                    <ul className="list-disc pl-5 text-gray-700 text-lg space-y-2">
                        <li>Tenaga ahli bersertifikat dan berpengalaman</li>
                        <li>Teknologi modern & peralatan terkini</li>
                        <li>Layanan ramah dan personal</li>
                        <li>Ruang perawatan yang bersih dan nyaman</li>
                        <li>Harga transparan dan sesuai kualitas</li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default Tentang
