import { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import ProductForm from '../components/ProductForm';

function Products() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) console.error(error);
    else setProducts(data);
  };

  const addProduct = async (product) => {
    const { error } = await supabase.from('products').insert(product);
    if (error) console.error(error);
    else fetchProducts();
  };

  const updateProduct = async (product) => {
    const { error } = await supabase
      .from('products')
      .update(product)
      .eq('id', product.id);
    if (error) console.error(error);
    else {
      fetchProducts();
      setEditingProduct(null);
    }
  };

  const deleteProduct = async (id) => {
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (error) console.error(error);
    else fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">CRUD Produk (Supabase)</h1>

      <ProductForm
        addProduct={addProduct}
        updateProduct={updateProduct}
        editingProduct={editingProduct}
      />

      <ul className="mt-6">
        {products.map(product => (
          <li key={product.id} className="border p-4 my-3 rounded shadow-sm">
            <div>
              <p className="font-semibold text-lg">{product.name}</p>
              <p className="text-gray-700 text-sm">{product.description}</p>
              <p className="text-sm mt-1">Kategori: {product.category}</p>
              <p className="text-sm">Harga: Rp {product.price}</p>
              <p className="text-sm">Stok: {product.stock}</p>
            </div>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => setEditingProduct(product)}
                className="text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => deleteProduct(product.id)}
                className="text-red-600 hover:underline"
              >
                Hapus
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
