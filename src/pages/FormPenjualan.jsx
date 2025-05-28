import React, { useState, useEffect } from 'react'

// Data dummy pelanggan & produk (treatment)
const dummyPelanggan = [
  { id: 1, nama: 'Andi' },
  { id: 2, nama: 'Budi' },
  { id: 3, nama: 'Citra' },
  { id: 4, nama: 'Dewi' },
  { id: 5, nama: 'Eka' },
  { id: 6, nama: 'Fajar' },
  { id: 7, nama: 'Gina' },
  { id: 8, nama: 'Hadi' },
  { id: 9, nama: 'Intan' },
  { id: 10, nama: 'Joko' },
  { id: 11, nama: 'Kiki' },
  { id: 12, nama: 'Lina' },
  { id: 13, nama: 'Mira' },
]

const dummyProduk = [
  // Facial Wajah
  { id: 1, nama: 'Facial Normal', harga: 200000 },
  { id: 2, nama: 'Facial Acne', harga: 250000 },
  { id: 3, nama: 'Facial Antioxidant', harga: 275000 },
  { id: 4, nama: 'Facial Oxygen', harga: 300000 },
  { id: 5, nama: 'Facial Gold', harga: 350000 },
  { id: 6, nama: 'Facial Whitening', harga: 320000 },
  { id: 7, nama: 'Facial LED', harga: 400000 },
  { id: 8, nama: 'Facial Microdermabrasion', harga: 450000 },

  // Laser Treatment
  { id: 9, nama: 'Laser Proyellow', harga: 800000 },
  { id: 10, nama: 'Laser Q-Switched ND:YAG', harga: 900000 },
  { id: 11, nama: 'Laser Picosure', harga: 1200000 },

  // Perawatan Khusus
  { id: 12, nama: 'Botox', harga: 2500000 },
  { id: 13, nama: 'Rejuran', harga: 3500000 },
  { id: 14, nama: 'Whitening Healer', harga: 3000000 },
]

const formatRupiah = (number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number)

const FormPenjualan = () => {
  const [formData, setFormData] = useState({
    tanggal: '',
    pelangganId: '',
    produkId: '',
    jumlah: 1,
    total: 0,
  })

  const [orders, setOrders] = useState([])

  // Update total saat produk atau jumlah berubah
  useEffect(() => {
    const produk = dummyProduk.find((p) => p.id === Number(formData.produkId))
    if (produk) {
      setFormData((prev) => ({
        ...prev,
        total: produk.harga * prev.jumlah,
      }))
    } else {
      setFormData((prev) => ({ ...prev, total: 0 }))
    }
  }, [formData.produkId, formData.jumlah])

  // Load orders dari localStorage saat awal render
  useEffect(() => {
    const savedOrders = localStorage.getItem('orders')
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders))
    }
  }, [])

  // Simpan orders ke localStorage setiap ada perubahan
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders))
  }, [orders])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'jumlah' ? Math.max(1, Number(value)) : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.tanggal || !formData.pelangganId || !formData.produkId) {
      alert('Tanggal, Pelanggan, dan Produk harus diisi')
      return
    }

    const pelanggan = dummyPelanggan.find((p) => p.id === Number(formData.pelangganId))
    const produk = dummyProduk.find((p) => p.id === Number(formData.produkId))

    const newOrder = {
      id: Date.now(),
      tanggal: formData.tanggal,
      pelanggan: pelanggan.nama,
      produk: produk.nama,
      jumlah: formData.jumlah,
      total: formData.total,
    }

    setOrders((prev) => [newOrder, ...prev])

    // Reset form (kecuali tanggal)
    setFormData({
      tanggal: formData.tanggal,
      pelangganId: '',
      produkId: '',
      jumlah: 1,
      total: 0,
    })
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Form Pemesanan Treatment</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label htmlFor="tanggal" className="block mb-1 font-medium text-gray-700">
            Tanggal
          </label>
          <input
            type="date"
            id="tanggal"
            name="tanggal"
            value={formData.tanggal}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label htmlFor="pelangganId" className="block mb-1 font-medium text-gray-700">
            Pelanggan
          </label>
          <select
            id="pelangganId"
            name="pelangganId"
            value={formData.pelangganId}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">-- Pilih Pelanggan --</option>
            {dummyPelanggan.map((p) => (
              <option key={p.id} value={p.id}>
                {p.nama}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="produkId" className="block mb-1 font-medium text-gray-700">
            Treatment / Produk
          </label>
          <select
            id="produkId"
            name="produkId"
            value={formData.produkId}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">-- Pilih Treatment --</option>
            {dummyProduk.map((p) => (
              <option key={p.id} value={p.id}>
                {p.nama} - {formatRupiah(p.harga)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="jumlah" className="block mb-1 font-medium text-gray-700">
            Jumlah
          </label>
          <input
            type="number"
            id="jumlah"
            name="jumlah"
            value={formData.jumlah}
            min={1}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Total Harga</label>
          <div className="p-2 bg-gray-100 rounded border border-gray-300">{formatRupiah(formData.total)}</div>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded transition"
        >
          Simpan Pemesanan
        </button>
      </form>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Daftar Pemesanan</h2>
        {orders.length === 0 ? (
          <p className="text-gray-500">Belum ada pemesanan.</p>
        ) : (
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-purple-100 text-purple-700 font-semibold">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Tanggal</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Pelanggan</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Treatment</th>
                <th className="border border-gray-300 px-4 py-2 text-right">Jumlah</th>
                <th className="border border-gray-300 px-4 py-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{order.tanggal}</td>
                  <td className="border border-gray-300 px-4 py-2">{order.pelanggan}</td>
                  <td className="border border-gray-300 px-4 py-2">{order.produk}</td>
                  <td className="border border-gray-300 px-4 py-2 text-right">{order.jumlah}</td>
                  <td className="border border-gray-300 px-4 py-2 text-right">{formatRupiah(order.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  )
}

export default FormPenjualan
