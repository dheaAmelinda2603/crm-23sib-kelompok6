import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Info, Mail, Share2, Plus, Minus, ChevronDown, FacebookIcon } from 'lucide-react'; // Corrected import for Pinterest

// --- Dummy Product Data (A subset for demonstration, full data from ProductPage can be used) ---
const allProductsData = [
  { id: 'translucent-powder', name: 'Translucent Powder', price: 'Rp 85.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_7034241712213640132.png', isSale: false, originalPrice: null, category: 'Kecantikan', subCategory: 'Make Up Wajah', subSubCategory: 'Bedak Wajah', collection: 'BENING\'S', transaction_count: 50, created_at: '2024-03-01T10:00:00Z', seen: 150,
    images: [
      'https://cdn.orderonline.id/uploads/images_7034241712213640132.png',
      'https://cdn.orderonline.id/uploads/images_8537221713340385905.jpg',
      'https://cdn.orderonline.id/uploads/images_7391111713340385326.jpg',
    ],
    variants: [{ type: 'Warna', options: ['Ivory', 'Natural', 'Beige'] }],
    description: `<p><span style="text-align: start;display: block"><span style="color: rgba(0, 0, 0, 0.8)"><span style="background-color: #fff">Loose Powder Bening's Indonesia Nomor Bpom NA18220400242</span></span></span></p><p><span style="text-align: start;display: block"><span style="color: rgba(0, 0, 0, 0.8)"><span style="background-color: #fff">Kelebihan Produk: </span></span></span></p><p><span style="text-align: start;display: block"><span style="color: rgba(0, 0, 0, 0.8)"><span style="background-color: #fff">Mengandung UV Filter, squalane dan vitamin E yang dapat menutrisi kulit.</span></span></span></p><p><span style="text-align: start;display: block"><span style="color: rgba(0, 0, 0, 0.8)"><span style="background-color: #fff">Dengan tekstur yang lembut dan mewah dapat menyerap kelebihan minyak pada kulit sehingga tampilan riasan menjadi lebih halus dan lebih tahan lama.</span></span></span></p><p><span style="text-align: start;display: block"><span style="color: rgba(0, 0, 0, 0.8)"><span style="background-color: #fff">Gunakan setiap hari untuk hasil riasan akhir yang lembut.</span></span></span></p><p><span style="text-align: start;display: block"><span style="color: rgba(0, 0, 0, 0.8)"><span style="background-color: #fff">UV FILTER Melindungi dari kerusakan kulit yang diakibatkan paparan buruk sinar matahari.</span></span></span></p><p><span style="text-align: start;display: block"><span style="color: rgba(0, 0, 0, 0.8)"><span style="background-color: #fff">SQUALENE Melembabkan dan mencegah kerusakan kulit dari radikal bebas , Antioksidan, Menghaluskan kulit , Membantu menutrisi kulit.</span></span></span></p><p><span style="text-align: start;display: block"><span style="color: rgba(0, 0, 0, 0.8)"><span style="background-color: #fff">VITAMIN E Menjaga kelembaban kulit, Mengandung antioksidan yang membantu, melawan radikal bebasAntiaging yang dapat mencegah penuaan dini. </span></span></span></p><p><span style="text-align: start;display: block"><span style="color: rgba(0, 0, 0, 0.8)"><span style="background-color: #fff">Klaim Product: </span></span></span></p><p><span style="text-align: start;display: block"><span style="color: rgba(0, 0, 0, 0.8)"><span style="background-color: #fff">- Tahan lama seharian (+/- 8 JAM) </span></span></span></p><p><span style="text-align: start;display: block"><span style="color: rgba(0, 0, 0, 0.8)"><span style="background-color: #fff">- Teksturnya halus,lembut dan memiliki partikel yang kecil sehingga cepat menyatu/ ngebland di wajah. </span></span></span></p><p><span style="text-align: start;display: block"><span style="color: rgba(0, 0, 0, 0.8)"><span style="background-color: #fff">- Ukurannya kecil, ringan, mudah dibawa, memudahkan touch up dan bisa sebagai setting make up dan tidak </span></span></span></p><p><span style="text-align: start;display: block"><span style="color: rgba(0, 0, 0, 0.8)"><span style="background-color: #fff">- Menempel/meninggalkan noda/(transferproof) ke pakaian. </span></span></span></p><p><span style="text-align: start;display: block"><span style="color: rgba(0, 0, 0, 0.8)"><span style="background-color: #fff">- Mengurangi tampilan pori diwajah,memberikan efek blur/menyamarkan noda diwajah, tidak menyumbat pori. </span></span></span></p><p><span style="text-align: start;display: block"><span style="color: rgba(0, 0, 0, 0.8)"><span style="background-color: #fff">- Aman digunakan untuk kulit yang berjerawat sekalipun. </span></span></span></p><p><span style="text-align: start;display: block"><span style="color: rgba(0, 0, 0, 0.8)"><span style="background-color: #fff">- Memberikan sentuhan akhir kulit smooth, flawless. </span></span></span></p><p><span style="text-align: start;display: block"><span style="color: rgba(0, 0, 0, 0.8)"><span style="background-color: #fff">- Membantu mengontrol dan menyerap minyak berlebih diwajah tapi gak bikin kulit kering (dryness) dan kusam.</span></span></span></p><p><span style="text-align: start;display: block"><span style="color: rgba(0, 0, 0, 0.8)"><span style="background-color: #fff"> Cara penggunaan : Aplikasikan Translucent Loose Setting Powder dengan menggunakan puff secara lembut dan merata setelah menggunakan day cream atau riasan wajah </span></span></span></p><p><span style="text-align: start;display: block"><span style="color: rgba(0, 0, 0, 0.8)"><span style="background-color: #fff">#skincarebeningsindonesia #loosepowder</span></span></span></p>`
  },
  { id: 'skinmology-lightening-night-cream', name: 'Skinmology Lightening Night Cream', price: 'Rp 82.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3633881724127273834.png', isSale: true, originalPrice: 'Rp 125.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', subSubCategory: 'Krim Wajah', collection: 'SKINMOLOGY', transaction_count: 140, created_at: '2024-06-28T16:00:00Z', seen: 360,
    images: [
        'https://cdn.orderonline.id/uploads/images_3633881724127273834.png',
        'https://cdn.orderonline.id/uploads/images_9366171717639702193.png', // Example additional image
    ],
    variants: [{ type: 'Ukuran', options: ['12.5g', '25g'] }],
    description: `<p>A powerful night cream designed to lighten and rejuvenate your skin while you sleep. Infused with active brightening ingredients and antioxidants.</p>
    <ul>
        <li>Reduces dark spots and hyperpigmentation</li>
        <li>Improves skin texture and tone</li>
        <li>Hydrates and nourishes deeply</li>
        <li>Contains Vitamin C and Niacinamide</li>
    </ul>
    <p>Apply evenly to face and neck after cleansing and toning every night.</p>`
  },
  { id: 'picofront-laser', name: 'Picofront Laser', price: 'Rp 3.000.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_4791251739437189080.png', isSale: false, originalPrice: null, category: 'Kecantikan', collection: 'BENING\'S', transaction_count: 200, created_at: '2024-06-05T17:00:00Z', seen: 500,
    images: [
      'https://cdn.orderonline.id/uploads/images_4791251739437189080.png',
      'https://cdn.orderonline.id/uploads/images_2060761739437229655.png' // Example image for laser
    ],
    variants: [],
    description: `<p>Picofront Laser treatment is a cutting-edge aesthetic procedure for skin rejuvenation and pigmentation removal. It uses ultra-short picosecond laser pulses to break down pigment particles and stimulate collagen production.</p>
    <p><strong>Benefits:</strong></p>
    <ul>
        <li>Effective for melasma, freckles, and sun spots</li>
        <li>Reduces fine lines and wrinkles</li>
        <li>Improves skin texture and overall radiance</li>
        <li>Minimal downtime</li>
    </ul>
    <p>Consult with our specialists to see if Picofront Laser is suitable for your skin concerns.</p>`
  },
  { id: 'acne-spot', name: 'Skinmology Acne Spot', price: 'Rp 50.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5564591722919869801.png', isSale: true, originalPrice: 'Rp 65.000', category: 'Kecantikan', subCategory: 'Perawatan Wajah', collection: 'SKINMOLOGY', transaction_count: 210, created_at: '2024-06-21T09:00:00Z', seen: 550,
    images: [
      'https://cdn.orderonline.id/uploads/images_5564591722919869801.png',
    ],
    variants: [],
    description: `<p>Skinmology Acne Spot treatment targets individual blemishes to reduce redness and inflammation quickly. Formulated with salicylic acid and tea tree oil.</p>
    <ul>
        <li>Fast-acting spot treatment</li>
        <li>Dries out pimples and prevents new breakouts</li>
        <li>Soothes irritated skin</li>
        <li>Suitable for all skin types, especially acne-prone</li>
    </ul>
    <p>Apply a small amount directly to blemishes morning and night after cleansing.</p>`
  },
];

// Re-defining for consistency and self-containment of this immersive
const collections = [
    { name: 'Semua Koleksi', path: '/produk/all' },
    { name: 'PAY DAY SALE!!', path: '/produk/pay-day-sale' },
    { name: 'NEW LAUNCHING!!!', path: '/produk/new-launching' },
    { name: 'SKINMOLOGY', path: '/produk/skinmology' },
    { name: 'PROMO BUNDLING', path: '/produk/promo-bundling' },
];

const categories = [
    {
        name: 'Home', path: '/',
        children: [
            {
                name: 'Produk', path: '/produk/all',
                children: [
                    {
                        name: 'Kecantikan', path: '/categories/kecantikan',
                        children: [
                            { name: 'Perawatan Wajah', path: '/categories/kecantikan/perawatan-wajah' },
                            { name: 'Make Up Wajah', path: '/categories/kecantikan/make-up-wajah',
                              children: [
                                  { name: 'Bedak Wajah', path: '/categories/kecantikan/make-up-wajah/bedak-wajah' },
                              ]
                            },
                        ]
                    }
                ]
            }
        ]
    }
];

const getCategoryPath = (product) => {
    // This is a simplified function. In a real app, you might have a more robust category tree lookup.
    // It attempts to build a path based on category, subCategory, subSubCategory.
    let pathSegments = ['Home', 'Produk'];
    let paths = ['/', '/produk/all'];

    if (product.category) {
        pathSegments.push(product.category);
        paths.push(`/categories/${product.category.toLowerCase().replace(/\s/g, '-')}`);
        if (product.subCategory) {
            pathSegments.push(product.subCategory);
            paths.push(`/categories/${product.category.toLowerCase().replace(/\s/g, '-')}/${product.subCategory.toLowerCase().replace(/\s/g, '-')}`);
            if (product.subSubCategory) {
                pathSegments.push(product.subSubCategory);
                paths.push(`/categories/${product.category.toLowerCase().replace(/\s/g, '-')}/${product.subCategory.toLowerCase().replace(/\s/g, '-')}/${product.subSubCategory.toLowerCase().replace(/\s/g, '-')}`);
            }
        }
    }

    return { pathSegments, paths };
};


const ProdukDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState({}); // For dropdown variants like 'Warna'

  useEffect(() => {
    // Find the product based on productId from the URL
    const foundProduct = allProductsData.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      if (foundProduct.images && foundProduct.images.length > 0) {
        setSelectedImage(foundProduct.images[0]);
      }
      // Initialize selected variant if product has variants
      if (foundProduct.variants && foundProduct.variants.length > 0) {
        const initialVariants = {};
        foundProduct.variants.forEach(variant => {
          if (variant.options && variant.options.length > 0) {
            initialVariants[variant.type] = variant.options[0];
          }
        });
        setSelectedVariant(initialVariants);
      }
    } else {
      // Handle product not found, e.g., redirect to 404 or product list
      console.error('Product not found');
      // navigate('/products/all'); // Optional: redirect if product not found
    }
  }, [productId]); // Re-run when productId changes

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center text-gray-700 font-judson">Loading product details...</div>;
  }

  const { pathSegments, paths } = getCategoryPath(product);

  const handleQuantityChange = (type) => {
    setQuantity(prevQty => {
      if (type === 'increase') return prevQty + 1;
      if (type === 'decrease' && prevQty > 1) return prevQty - 1;
      return prevQty;
    });
  };

  const handleVariantChange = (variantType, option) => {
    setSelectedVariant(prev => ({ ...prev, [variantType]: option }));
  };


  // Basic zoom effect logic
  const handleMouseMove = (e) => {
    const { currentTarget: img } = e;
    const { left, top, width, height } = img.getBoundingClientRect();
    const x = (e.pageX - left) / width * 100;
    const y = (e.pageY - top) / height * 100;

    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = 'scale(2)'; // Set scale for zoom
  };

  const handleMouseLeave = (e) => {
    const { currentTarget: img } = e;
    img.style.transformOrigin = 'center center';
    img.style.transform = 'scale(1)'; // Reset scale
  };


  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen">
      <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Judson:wght@400;700&display=swap');

          .font-judson { font-family: 'Judson', serif; }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .detail-product-wrapper {
              --67979896: block;
              --3735925a: block;
              --23c2036e: block;
              --7405c22c: block;
              --197bd42e: block;
              --3efc7af4: visible;
          }
          .zoom-on-hover img {
            transition: transform 0.2s ease-out; /* Smooth transition for zoom */
          }
          .zoom-on-hover {
            overflow: hidden; /* Hide overflow from scaled image */
          }
          .product-detail-image-thumbnails-item {
            width: 80px; /* Fixed width for thumbnails */
            height: 80px; /* Fixed height for thumbnails */
            border: 2px solid transparent;
            cursor: pointer;
            transition: border-color 0.2s;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .product-detail-image-thumbnails-item.active {
            border-color: #DEA05B;
          }
          .product-detail-image-thumbnails-item div {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
          }
          .input-group.quantity .form-control {
            text-align: center;
            border-radius: 0;
            flex-grow: 1; /* Allow input to grow */
          }
          .input-group.quantity .qty-btn {
            background-color: #f3f4f6; /* light gray */
            border-color: #d1d5db; /* gray-300 */
            color: #4b5563; /* gray-700 */
          }
          .input-group.quantity .qty-btn:hover {
            background-color: #e5e7eb; /* slightly darker gray on hover */
          }
          .vs__dropdown-toggle {
              border: 1px solid #d1d5db; /* gray-300 */
              border-radius: 0.5rem; /* rounded-lg */
              padding: 0.5rem 0.75rem; /* py-2 px-3 */
              min-height: 2.5rem; /* Ensure minimum height */
          }
          .vs__selected-options {
              display: flex;
              align-items: center;
              flex-wrap: wrap; /* Allow selected options to wrap */
              flex-grow: 1; /* Allow space for input */
          }
          .vs__selected {
              margin-right: 0.5rem;
              background-color: #e5e7eb; /* gray-200 */
              padding: 0.25rem 0.5rem;
              border-radius: 0.25rem;
              font-size: 0.875rem; /* text-sm */
          }
          .vs__search {
              flex-grow: 1; /* Allow search input to take remaining space */
              border: none;
              outline: none;
              padding: 0;
              margin: 0;
              line-height: 1.5; /* Match input height */
          }
          .vs__actions {
              display: flex;
              align-items: center;
          }
          .vs__open-indicator {
              fill: currentColor;
              transform: rotate(0deg);
              transition: transform 0.2s;
          }
          .vs--open .vs__open-indicator {
              transform: rotate(180deg);
          }
          .vs__clear {
              cursor: pointer;
          }
          .vs__spinner {
              display: none !important; /* Hide default spinner */
          }
          .product-detail-share a {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background-color: #e5e7eb; /* light gray */
              color: #4b5563; /* gray-700 */
              margin-right: 0.5rem;
              transition: background-color 0.2s, color 0.2s;
          }
          .product-detail-share a.twitter:hover { background-color: #1DA1F2; color: white; }
          .product-detail-share a.facebook:hover { background-color: #1877F2; color: white; }
          .product-detail-share a.pinterest:hover { background-color: #E60023; color: white; }
          .product-detail-share a.mail:hover { background-color: #EA4335; color: white; }
          .product-detail-share a:hover {
            background-color: #d1d5db; /* A default hover for general share */
          }
          .footbar-product {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: white;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
            padding: 1rem 0;
            z-index: 50;
            transform: translateY(100%);
            animation: slideUp 0.3s forwards;
          }
          .footbar-product.visible {
            transform: translateY(0);
          }
          @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
          `}
      </style>

      <main className="container-fluid mx-auto px-4 py-8 pt-8 bg-gray-50">
        {/* Breadcrumbs */}
        <div className="breadcrumb-wrapper mb-4 bg-white rounded-lg shadow-sm py-2 px-4">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb flex space-x-1 text-sm font-judson">
                    {paths.map((path, index) => (
                        <li key={path} className={`breadcrumb-item flex items-center ${index === pathSegments.length - 1 ? 'text-gray-800 font-bold' : 'text-gray-600'}`}>
                            {index > 0 && <span className="mx-1 text-gray-400">/</span>}
                            <Link to={path} className={`${index === pathSegments.length - 1 ? 'cursor-default' : 'hover:text-[#DEA05B]'} whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px] sm:max-w-none`}>
                                {pathSegments[index]}
                            </Link>
                        </li>
                    ))}
                </ol>
            </nav>
        </div>

        <div className="product-wrapper bg-white rounded-xl shadow-md p-4 lg:p-8">
          <div className="row grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images Section */}
            <div className="product-detail-content">
              <div className="product-detail-image aspect-w-1 aspect-h-1 mb-4 relative overflow-hidden rounded-lg border border-gray-200">
                <div className="zoom-on-hover flex items-center justify-center h-full">
                  <img
                    src={selectedImage}
                    alt={product.name}
                    className="w-full h-auto object-contain transition-transform duration-200"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/CCCCCC/333333?text=Image+Error"; }}
                  />
                </div>
              </div>
              <div className="product-detail-image-thumbnails flex space-x-2 mt-2 justify-center lg:justify-start">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    className={`product-detail-image-thumbnails-item rounded-lg ${selectedImage === img ? 'active' : ''}`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <div style={{ backgroundImage: `url(${img})` }}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info Section */}
            <div className="product-info-wrapper pt-4 pb-4 px-4">
              <div className="product-info">
                <div className="product-detail-header pb-2 border-b border-gray-100 mb-3">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 font-judson">{product.name}</h1>
                </div>
                <div className="product-detail-price mt-2 mb-4 flex items-baseline">
                  {product.isSale && product.originalPrice && (
                    <span className="text-gray-500 text-base line-through mr-2 font-judson">{product.originalPrice}</span>
                  )}
                  <span className="text-2xl md:text-3xl font-bold text-[#DEA05B] font-judson">{product.price}</span>
                </div>

                {/* Product Stock (Placeholder) */}
                <div className="product-detail-stock mt-2 mb-4 text-gray-600 font-judson">
                    Stock: Tersedia
                </div>

                {/* Product Variations (Dropdown for "Warna") */}
                {product.variants && product.variants.length > 0 && product.variants.map((variant, index) => (
                    <div key={index} className="product-detail-variation mb-4">
                        <label className="w-full block text-gray-700 text-lg mb-2 font-judson">{variant.type}</label>
                        <div className="relative">
                            <select
                                className="vs__dropdown-toggle block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DEA05B] font-judson appearance-none pr-8"
                                value={selectedVariant[variant.type] || ''}
                                onChange={(e) => handleVariantChange(variant.type, e.target.value)}
                            >
                                {variant.options.map((option, optIndex) => (
                                    <option key={optIndex} value={option}>{option}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <ChevronDown size={18} />
                            </div>
                        </div>
                    </div>
                ))}

                {/* Quantity Input */}
                <div className="product-detail-action mt-4 flex items-center space-x-4">
                    <label htmlFor="quantity-input" className="text-gray-700 text-lg font-judson">Jumlah:</label>
                    <div className="quantity-input flex border border-gray-300 rounded-lg overflow-hidden">
                        <button
                            type="button"
                            className="btn btn-md btn-light qty-btn p-2 hover:bg-gray-200 transition-colors"
                            onClick={() => handleQuantityChange('decrease')}
                            disabled={quantity <= 1}
                        >
                            <Minus size={20} />
                        </button>
                        <input
                            type="number"
                            id="quantity-input"
                            min="1"
                            max="1000"
                            className="form-control w-16 text-center focus:outline-none font-judson"
                            value={quantity}
                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        />
                        <button
                            type="button"
                            className="btn btn-md btn-light qty-btn p-2 hover:bg-gray-200 transition-colors"
                            onClick={() => handleQuantityChange('increase')}
                        >
                            <Plus size={20} />
                        </button>
                    </div>
                </div>

                {/* Buy Buttons */}
                <div className="product-detail-buy-button mt-6 space-y-3">
                  <button className="btn btn-warning btn-block p-3 w-full bg-[#DEA05B] text-white rounded-lg font-semibold hover:bg-[#C98A46] transition-colors duration-300 shadow-md font-judson">
                    <ShoppingCart size={20} className="inline-block mr-2" /> Tambah Ke Keranjang
                  </button>
                  <button title="wishlist" className="product-action-wishlist btn-md btn-outline-default p-3 w-full border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 font-judson">
                    <Heart size={20} className="inline-block mr-2" /> Tambah Wishlist
                  </button>
                </div>

                {/* Delivery Information */}
                <div className="product-detail-delivery flex items-center mt-4 p-3 bg-gray-100 rounded-lg text-gray-700 font-judson">
                  <div className="left flex-shrink-0 mr-2">
                    <Info size={20} className="text-[#DEA05B]" />
                  </div>
                  <div className="right text-sm">
                    Barang dikirim hari ini jika anda pesan sebelum pukul 19:00 WIB.
                  </div>
                </div>

                {/* Share Buttons */}
                {/* <div className="product-detail-share mt-6">
                  <span className="mr-2 text-gray-700 font-judson">Bagikan:</span>
                  <div className="d-flex flex mt-2">
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(product.name)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" title="Share to Twitter" className="twitter share-btn">
                      <TwitterIcon size={18} />
                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" title="Share to Facebook" className="facebook share-btn">
                      <FacebookIcon size={18} />
                    </a>
                    <a href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&description=${encodeURIComponent(product.name)}&media=${encodeURIComponent(product.imageUrl)}`} target="_blank" rel="noopener noreferrer" title="Share to Pinterest" className="pinterest share-btn">
                      <PiPinterestLogo size={18} /> 
                    </a>
                    <a href={`mailto:?subject=Hey, sepertinya produk ${encodeURIComponent(product.name)} cocok untuk kamu&body=ini linknya ${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" title="Share via Email" className="mail share-btn">
                      <Mail size={18} />
                    </a> */}
                    {/* Placeholder for generic share or copy link */}
                    {/* <button onClick={() => document.execCommand('copy').then(() => alert('Link copied to clipboard!'))} title="Copy Link" className="share-btn"> 
                      <Share2 size={18} />
                    </button>
                  </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="container mx-auto px-4 py-8 pt-0 mt-8 bg-white rounded-xl shadow-md p-4 lg:p-8">
          <label className="mb-3 block text-xl font-bold text-gray-800 font-judson">Deskripsi</label>
          <div className="product-detail-description text-gray-700 leading-relaxed font-judson" dangerouslySetInnerHTML={{ __html: product.description }}>
          </div>
        </div>

        {/* Sticky Footbar */}
        <div className="footbar-product visible fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50 transition-transform duration-300">
            <div className="footbar-product__wrapper container mx-auto flex justify-between items-center">
                <div className="footbar-product__wrapper__content--left flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border border-gray-200">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="ml-3">
                        <h4 className="text-base font-semibold text-gray-900 mb-0.5 line-clamp-1 font-judson">{product.name}</h4>
                        <span className="text-lg font-bold text-[#DEA05B] font-judson">{product.price}</span>
                    </div>
                </div>
                <div className="footbar-product__wrapper__content--right flex items-center space-x-2">
                    <button title="wishlist" className="product-action-wishlist btn-md btn-outline-default px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-judson">
                        <Heart size={20} />
                    </button>
                    <button className="btn btn-warning btn-cart px-4 py-2 bg-[#DEA05B] text-white rounded-lg font-semibold hover:bg-[#C98A46] transition-colors duration-300 shadow-md font-judson">
                        Tambah Ke Keranjang
                    </button>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default ProdukDetail;
