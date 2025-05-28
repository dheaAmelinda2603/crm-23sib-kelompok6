import React, { useState, useEffect } from 'react'

const dummyTrackingData = [
  {
    id: 1,
    pelanggan: 'Andi',
    paket: 'Facial Whitening + Laser Proyellow',
    tanggalPesan: '2025-05-25',
    status: 'Dalam Proses',
  },
  {
    id: 2,
    pelanggan: 'Budi',
    paket: 'Botox',
    tanggalPesan: '2025-05-26',
    status: 'Pending',
  },
  {
    id: 3,
    pelanggan: 'Citra',
    paket: 'Facial Acne + Rejuran',
    tanggalPesan: '2025-05-24',
    status: 'Selesai',
  },
  {
    id: 4,
    pelanggan: 'Dewi',
    paket: 'Laser Q-Switched ND:YAG',
    tanggalPesan: '2025-05-27',
    status: 'Dalam Proses',
  },
  {
    id: 5,
    pelanggan: 'Eka',
    paket: 'Facial Microdermabrasion',
    tanggalPesan: '2025-05-28',
    status: 'Pending',
  },
]

const statusColors = {
  Pending: 'bg-yellow-200 text-yellow-800',
  'Dalam Proses': 'bg-blue-200 text-blue-800',
  Selesai: 'bg-green-200 text-green-800',
}

const TrackingPaket = () => {
  const [trackingData, setTrackingData] = useState([])

  useEffect(() => {
    // Simulasi fetch data (pakai dummy)
    setTrackingData(dummyTrackingData)
  }, [])

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Tracking Paket Treatment</h1>

      {trackingData.length === 0 ? (
        <p className="text-gray-500">Tidak ada paket yang sedang dalam proses.</p>
      ) : (
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-purple-100 text-purple-700 font-semibold">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Pelanggan</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Paket Treatment</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Tanggal Pesan</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {trackingData.map((item) => (
              <tr key={item.id} className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{item.pelanggan}</td>
                <td className="border border-gray-300 px-4 py-2">{item.paket}</td>
                <td className="border border-gray-300 px-4 py-2">{item.tanggalPesan}</td>
                <td className={`border border-gray-300 px-4 py-2`}>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      statusColors[item.status] || 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default TrackingPaket
