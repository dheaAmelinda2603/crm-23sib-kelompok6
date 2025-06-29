import React from 'react';
import AboutImg from '../img/About.webp'; 
import { PiTarget } from 'react-icons/pi';

function Tentang() {
    return (
        <section className="bg-white px-6" style={{ fontFamily: 'Judson, judson' }}>

            {/* Section 1: Hero/Introduction */}
            <div className="max-w-6xl mx-auto pt-8 pb-16 md:pt-12 md:pb-24"> 
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Teks Kiri */}
                    <div>
                        <h2 className="text-4xl font-semibold text-[#DEA05B] mb-4 md:text-5xl"> 
                            Tentang Kami
                        </h2>
                        <div className="w-78 h-1 bg-[#DEA05B] mb-8 rounded-full"></div>

                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            Bening’s Indonesia pertama kali diluncurkan pada tahun 2021 sebagai merek perawatan kulit hasil kolaborasi antara dokter dan apoteker berpengalaman
                            di Indonesia. Produk-produk kami telah bersertifikasi BPOM dan Halal, serta dipercaya oleh lebih dari 10.000 BIGpreneur di seluruh Indonesia.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            Tahun 2024, kami memperkenalkan Skinmology Series, lini produk level-up dengan bahan aktif dari Eropa yang telah teruji secara dermatologis,
                            sebagai komitmen kami menghadirkan inovasi perawatan terbaik.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed mb-8"> 
                            Melengkapi produk skincare unggulan, Bening’s Clinic hadir sebagai solusi menyeluruh dalam dunia perawatan dan kecantikan. Kami memberikan layanan
                            premium mulai dari perawatan wajah, tubuh, hingga konsultasi kecantikan, dengan dukungan teknologi terkini dan tenaga ahli profesional.
                        </p>
                    </div>
                    {/* Gambar Kanan */}
                    <div className="flex justify-center">
                        <img
                            src={AboutImg}
                            alt="Tentang Bening's Clinic"
                            className="rounded-[60px] w-full max-w-md object-cover shadow-lg"/>
                    </div>
                </div>
            </div>

            {/* Section 2: Mission & Vision */}
            <div className="max-w-6xl mx-auto py-16 px-6 md:py-24 bg-gray-50 rounded-lg shadow-inner"> 
                <h2 className="text-4xl font-semibold text-[#DEA05B] mb-12 text-center md:text-5xl">
                    Misi & Visi Kami
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     {/* Misi */}
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                        <div className="flex-shrink-0 mb-4">
                            <div className="h-20 w-20 rounded-full bg-amber-100 flex items-center justify-center">
                                <PiTarget className="h-10 w-10 text-[#DEA05B]" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Misi</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Memberikan solusi perawatan kulit dan kecantikan holistik, didukung oleh inovasi ilmiah dan pelayanan personal, untuk meningkatkan kepercayaan diri setiap individu.
                        </p>
                    </div>

                    {/* Visi */}
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                        <div className="flex-shrink-0 mb-4">
                            <div className="h-20 w-20 rounded-full bg-amber-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#DEA05B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Visi</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Menjadi klinik estetika terdepan di Indonesia yang diakui secara global, melalui keunggulan teknologi, profesionalisme, dan hasil yang nyata.
                        </p>
                    </div>
                </div>
            </div>

            {/* Section 3: Why Choose Us / Benefits */}
            <div className="max-w-6xl mx-auto py-16 px-6 md:py-24">
                <h2 className="text-4xl font-semibold text-[#DEA05B] mb-12 text-center md:text-5xl">
                    Kenapa Memilih Bening’s Clinic?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Benefit 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border border-gray-100">
                        <div className="flex-shrink-0">
                            <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#DEA05B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-700 text-lg font-medium">Tenaga ahli bersertifikat dan berpengalaman</p>
                        </div>
                    </div>

                    {/* Benefit 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border border-gray-100">
                        <div className="flex-shrink-0">
                            <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#DEA05B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-700 text-lg font-medium">Teknologi modern & peralatan terkini</p>
                        </div>
                    </div>

                    {/* Benefit 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border border-gray-100">
                        <div className="flex-shrink-0">
                            <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#DEA05B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-700 text-lg font-medium">Layanan ramah dan personal</p>
                        </div>
                    </div>

                    {/* Benefit 4 */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border border-gray-100">
                        <div className="flex-shrink-0">
                            <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#DEA05B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-700 text-lg font-medium">Ruang perawatan yang bersih dan nyaman</p>
                        </div>
                    </div>

                    {/* Benefit 5 */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border border-gray-100">
                        <div className="flex-shrink-0">
                            <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#DEA05B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-700 text-lg font-medium">Harga transparan dan sesuai kualitas</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Tentang;