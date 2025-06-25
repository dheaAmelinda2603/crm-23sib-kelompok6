import { useState, useEffect } from 'react';

const ProductForm = ({ addProduct, updateProduct, editingProduct }) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    // image_url: '' // bisa tambahkan jika nanti mau upload
  });

  useEffect(() => {
    if (editingProduct) setForm(editingProduct);
    else setForm({
      name: '',
      description: '',
      price: '',
      category: '',
      stock: '',
      // image_url: ''
    });
  }, [editingProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.category) return;

    editingProduct ? updateProduct(form) : addProduct(form);

    setForm({
      name: '',
      description: '',
      price: '',
      category: '',
      stock: '',
      // image_url: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="Nama Produk"
        className="w-full p-2 border rounded"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <textarea
        placeholder="Deskripsi"
        className="w-full p-2 border rounded"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Harga (contoh: 250000)"
        className="w-full p-2 border rounded"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
      <input
        type="text"
        placeholder="Kategori"
        className="w-full p-2 border rounded"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      <input
        type="number"
        placeholder="Stok"
        className="w-full p-2 border rounded"
        value={form.stock}
        onChange={(e) => setForm({ ...form, stock: e.target.value })}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {editingProduct ? 'Perbarui Produk' : 'Tambah Produk'}
      </button>
    </form>
  );
};

export default ProductForm;
