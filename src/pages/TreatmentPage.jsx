import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal, ArrowDownWideNarrow, ChevronRight } from 'lucide-react'; // Importing icons

// Utility function for formatting numbers with thousand separators
const formatNumberWithThousandsSeparator = (value) => {
    const cleanValue = String(value).replace(/\D/g, '');
    if (!cleanValue) return '';
    const numberValue = parseInt(cleanValue, 10);
    if (isNaN(numberValue)) return '';
    return numberValue.toLocaleString('id-ID');
};

// Mock treatment data
const allTreatments = [
  { id: 'benings-acne-whitening-facial', name: 'Bening’s Acne / Whitening Facial', price: 'Rp 250.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_1672631739347635523.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 50, created_at: '2023-01-01T12:00:00Z', seen: 150 },
  { id: 'korean-toning-acne-combo-facial', name: 'Korean Toning / Acne Combo Facial', price: 'Rp 500.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_9389081739418855609.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 75, created_at: '2023-01-05T12:00:00Z', seen: 200 },
  { id: 'instan-glowing-facial', name: 'Instan Glowing Facial', price: 'Rp 700.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_2494771739419484209.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 60, created_at: '2023-01-10T12:00:00Z', seen: 180 },
  { id: 'luxury-facial', name: 'Luxury Facial', price: 'Rp 1.500.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_2058771739419775651.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 40, created_at: '2023-01-15T12:00:00Z', seen: 120 },
  { id: 'chromosome-facial', name: 'Chromosome Facial', price: 'Rp 2.500.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_2345751739420228859.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 30, created_at: '2023-01-20T12:00:00Z', seen: 90 },
  { id: 'face-peeling', name: 'Face Peeling (Diamond Peeling, Korean Peeling, dan Acne Peeling)', price: 'Rp 250.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_1904681739420439719.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 80, created_at: '2023-01-25T12:00:00Z', seen: 250 },
  { id: 'benings-peeling', name: 'Bening’s Peeling (Ultra Peel, Blue Peel, dan Sensi Peel)', price: 'Rp 500.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5068171739420578935.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 55, created_at: '2023-01-30T12:00:00Z', seen: 170 },
  { id: 'body-peeling', name: 'Body Peeling ( Hand Peeling dan Leg Peeling)', price: 'Rp 750.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_9633671739420731007.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 35, created_at: '2023-02-05T12:00:00Z', seen: 110 },
  { id: 'radio-frequency', name: 'Radio Frequency', price: 'Rp 250.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_6781861739420873367.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 90, created_at: '2023-02-10T12:00:00Z', seen: 300 },
  { id: 'hifu-upperface', name: 'Hifu (Upperface, Pipi, dan Double Chin)', price: 'Rp 500.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_9192001739431017178.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 25, created_at: '2023-02-15T12:00:00Z', seen: 80 },
  { id: 'mesolipolysis-injection', name: 'Mesolipolysis Injection (Perut/Lengan/Paha) (Pipi/Double chin)', price: 'Rp 500.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_4283701739430931903.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 45, created_at: '2023-02-20T12:00:00Z', seen: 130 },
  { id: 'acne-inject', name: 'Acne Inject', price: 'Rp 100.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_2270401739431089696.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 120, created_at: '2023-02-25T12:00:00Z', seen: 400 },
  { id: 'korean-infusion', name: 'Korean Infusion', price: 'Rp 500.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_1287961739431228832.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 70, created_at: '2023-03-01T12:00:00Z', seen: 210 },
  { id: 'snow-white-infusion', name: 'Snow White Infusion', price: 'Rp 1.000.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5136681739431307552.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 30, created_at: '2023-03-05T12:00:00Z', seen: 95 },
  { id: 'diamond-infusion', name: 'Diamond Infusion', price: 'Rp 2.000.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_8285761739431509392.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 20, created_at: '2023-03-10T12:00:00Z', seen: 70 },
  { id: 'chromosome-infusion', name: 'Chromosome Infusion', price: 'Rp 10.000.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3703401739431620817.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 10, created_at: '2023-03-15T12:00:00Z', seen: 50 },
  { id: 'diode-laser-acne-glowing', name: 'Diode Laser Acne/Glowing', price: 'Rp 500.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_4378751739431748179.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 65, created_at: '2023-03-20T12:00:00Z', seen: 190 },
  { id: 'q-switched-ndyag-laser', name: 'Q-Switched Ndyag Laser', price: 'Rp 500.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_7730501739431951943.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 48, created_at: '2023-03-25T12:00:00Z', seen: 160 },
  { id: 'laser-co2-erbium-laser-acne-scar', name: 'Laser CO2 / Erbium Laser - Acne Scar', price: 'Rp 750.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3992451739436157133.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 32, created_at: '2023-03-30T12:00:00Z', seen: 100 },
  { id: 'laser-co2-erbium-laser-skintag', name: 'Laser CO2 / Erbium Laser - Skintag', price: 'Rp 100.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_7167331739436186354.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 95, created_at: '2023-04-05T12:00:00Z', seen: 280 },
  { id: 'ipl-hair-removal-kumis-janggut', name: 'IPL Hair Removal (Kumis/Janggut)', price: 'Rp 150.000', imageUrl: 'https://cdn.orderonline.id/img/default-product.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 100, created_at: '2023-04-10T12:00:00Z', seen: 320 },
  // Additional treatments for widgets
  { id: 'picofront-laser', name: 'Picofront Laser', price: 'Rp 3.000.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_4791251739437189080.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 200, created_at: '2023-04-15T12:00:00Z', seen: 500 },
  { id: 'proyellow-laser-complete', name: 'Proyellow Laser Complete', price: 'Rp 1.000.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_2060761739437229655.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 180, created_at: '2023-04-20T12:00:00Z', seen: 450 },
  { id: 'prp-wajah', name: 'PRP Wajah', price: 'Rp 750.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3055371739437498490.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 160, created_at: '2023-04-25T12:00:00Z', seen: 420 },
];

// Individual Treatment Card Component
const TreatmentCard = ({ treatment }) => ( // Changed from ProductCard
    <Link to={`/products/${treatment.id}`} className="treatment-item orientation-square group"> {/* Changed from product-item */}
        <div className="product-item-top list-product-item relative overflow-hidden">
            {/* {treatment.isSale && ( // Assuming treatments might not have 'isSale' but leaving for potential future use
                <span className="treatment-label sale absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10 font-judson">sale</span>
            )} */}
            <img
                src={treatment.imageUrl}
                loading="lazy"
                alt={treatment.name}
                className="w-full h-48 object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x300/CCCCCC/333333?text=Image+Error"; }}
            />
        </div>
        <div className="product-item-bottom p-2">
            <div className="product-item-detail">
                <div title={treatment.name} className="product-item-title text-base sm:text-lg font-semibold text-gray-900 mb-1 line-clamp-2 font-judson">
                    {treatment.name}
                </div>
                <div className="product-item-price flex items-baseline">
                    <span className="text-lg font-bold text-[#DEA05B] font-judson">{treatment.price}</span>
                </div>
            </div>
        </div>
        <div className="treatment-item-hover absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"> {/* Changed from product-item-hover */}
            <div className="product-item-hover-action flex space-x-2">
                <Link to={`/products/${treatment.id}`} title="Lihat Detail" className="btn btn-outline-default p-2 rounded-full bg-white text-gray-700 hover:bg-[#DEA05B] hover:text-white transition-colors duration-200">
                    <ChevronRight size={20} />
                </Link>
            </div>
        </div>
    </Link>
);

// Treatment Sidebar Filters Component
const TreatmentSidebar = ({ searchKeyword, onSearchChange, minPrice, maxPrice, onMinPriceChange, onMaxPriceChange, onFilterPrice }) => { // Changed from ProductSidebar
    const collections = [
        { name: 'Semua Koleksi', path: '/collections/all' },
        { name: 'Perawatan Wajah', path: '/collections/perawatan-wajah' },
    ];

    const categories = [
        { name: 'Semua Kategori', path: '/categories/all' },
        { name: 'Kecantikan', path: '/categories/kecantikan' },
        { name: 'Lainnya', path: '/categories/lainnya' }, // Changed from 'Produk Lainnya'
    ];

    const handleMinChange = (e) => {
        onMinPriceChange(formatNumberWithThousandsSeparator(e.target.value));
    };

    const handleMaxChange = (e) => {
        onMaxPriceChange(formatNumberWithThousandsSeparator(e.target.value));
    };

    return (
        <div className="treatment-sidebar-wrapper space-y-4"> {/* Changed from product-sidebar-wrapper */}

            {/* Kategori */}
            <div className="bg-white rounded-xl shadow-md p-4 hidden lg:block">
                <div className="treatment-sidebar-header text-xl font-bold text-gray-800 mb-3 font-judson">Kategori Treatment</div> {/* Changed from Kategori */}
                <div className="body mt-2">
                    <ul className="treatment-categories-menu space-y-2"> {/* Changed from product-categories-menu */}
                        {categories.map(category => (
                            <li key={category.path}>
                                <Link
                                    to={category.path}
                                    className={`block text-base font-judson ${category.name === 'Semua Kategori' ? 'font-bold text-[#DEA05B]' : 'text-gray-700 hover:text-[#DEA05B] font-medium'}`}
                                >
                                    {category.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Harga */}
            <div className="bg-white rounded-xl shadow-md p-4 hidden lg:block">
                <div className="treatment-sidebar-header text-xl font-bold text-gray-800 mb-3 font-judson">Harga Treatment</div> {/* Changed from Harga */}
                <div className="body mt-2 pt-3">
                    <div className="treatment-filter-price"> {/* Changed from product-filter-price */}
                        <div className="treatment-filter-price-wrapper flex flex-col space-y-4"> {/* Changed from product-filter-price-wrapper */}
                            <div className="control-price w-full">
                                <label htmlFor="minPrice" className="block text-gray-700 text-sm mb-1 font-judson">Minimum</label>
                                <div className="flex w-full">
                                    <span className="bg-gray-100 text-gray-600 px-3 py-2 rounded-l-lg border border-gray-300 font-judson shrink-0">Rp.</span>
                                    <input
                                        type="text"
                                        id="minPrice"
                                        placeholder="25.000"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#DEA05B] font-judson"
                                        value={minPrice}
                                        onChange={handleMinChange}
                                    />
                                </div>
                            </div>
                            <div className="control-price w-full">
                                <label htmlFor="maxPrice" className="block text-gray-700 text-sm mb-1 font-judson">Maximum</label>
                                <div className="flex w-full">
                                    <span className="bg-gray-100 text-gray-600 px-3 py-2 rounded-l-lg border border-gray-300 font-judson shrink-0">Rp.</span>
                                    <input
                                        type="text"
                                        id="maxPrice"
                                        placeholder="500.000"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#DEA05B] font-judson"
                                        value={maxPrice}
                                        onChange={handleMaxChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer mt-4 text-right">
                    <button onClick={onFilterPrice} className="bg-[#DEA05B] text-white px-5 py-2 rounded-lg hover:bg-[#C98A46] transition-colors duration-300 font-semibold shadow-md font-judson">
                        Filter
                    </button>
                </div>
            </div>
        </div>
    );
};

// Treatment Widget Component (for Terbaru, Terlaris, Popular)
const TreatmentWidget = ({ title, treatments, link, sortType }) => ( // Changed from ProductWidget and products to treatments
    <div className="bg-white rounded-xl shadow-md p-4">
        <div className="widget-header flex justify-between items-center mb-4">
            <div className="widget-title text-xl font-bold text-gray-800 font-judson">{title}</div>
            <div className="widget-icon"></div>
        </div>
        <div className="widget-body space-y-4">
            {treatments.map(treatment => ( // Changed from products.map(product =>
                <Link to={`/products/${treatment.id}`} key={treatment.id} className="block group">
                    <div className="flex items-center space-x-3">
                        <div className="w-1/4 flex-shrink-0">
                            <img
                                src={treatment.imageUrl}
                                alt={treatment.name}
                                className="w-full h-auto rounded-lg object-cover border border-gray-100 group-hover:scale-105 transition-transform duration-300"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/CCCCCC/333333?text=Error"; }}
                            />
                        </div>
                        <div className="flex-1 pt-1">
                            <div title={treatment.name} className="treatment-item-title text-gray-800 text-base font-medium line-clamp-2 group-hover:text-[#DEA05B] transition-colors font-judson"> {/* Changed from product-item-title */}
                                {treatment.name}
                            </div>
                            <div className="treatment-item-price mt-1 text-[#DEA05B] text-lg font-bold font-judson"> {/* Changed from product-item-price */}
                                {treatment.price}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
        <div className="widget-action mt-6 text-right">
            <Link to={link} className="inline-flex items-center text-[#DEA05B] hover:text-[#C98A46] font-semibold font-judson">
                <ChevronRight size={18} className="mr-1" /> Lihat Semua
            </Link>
        </div>
    </div>
);


const TreatmentPage = () => {
  const treatmentsPerPage = 21; // Changed from productsPerPage
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const parsePrice = (priceStr) => {
    const cleaned = String(priceStr).replace(/Rp\.|\.|\s/g, '').trim();
    return parseInt(cleaned) || 0;
  };

  const getFilteredAndSortedTreatments = () => { // Changed from getFilteredAndSortedProducts
    let filteredTreatments = allTreatments.filter(treatment => { // Changed from allProducts.filter(product =>
      const treatmentNameMatches = treatment.name.toLowerCase().includes(searchKeyword.toLowerCase()); // Changed from productNameMatches

      const treatmentPrice = parsePrice(treatment.price); // Changed from productPrice
      const min = minPrice ? parsePrice(minPrice) : 0;
      const max = maxPrice ? parsePrice(maxPrice) : Infinity;

      const priceMatches = treatmentPrice >= min && treatmentPrice <= max; // Changed from priceMatches

      return treatmentNameMatches && priceMatches; // Changed from productNameMatches && priceMatches
    });

    filteredTreatments.sort((a, b) => { // Changed from filteredProducts.sort
      if (sortOrder === 'transaction_count') {
        return b.transaction_count - a.transaction_count;
      } else if (sortOrder === 'created_at') {
        return new Date(b.created_at) - new Date(a.created_at);
      } else if (sortOrder === 'low_price') {
        return parsePrice(a.price) - parsePrice(b.price);
      } else if (sortOrder === 'high_price') {
        return parsePrice(b.price) - parsePrice(a.price);
      }
      return 0;
    });

    return filteredTreatments;
  };

  const currentTreatments = getFilteredAndSortedTreatments(); // Changed from currentProducts
  const totalPages = Math.ceil(currentTreatments.length / treatmentsPerPage); // Changed from currentProducts.length / productsPerPage
  const startIndex = (currentPage - 1) * treatmentsPerPage; // Changed from productsPerPage
  const endIndex = startIndex + treatmentsPerPage; // Changed from productsPerPage
  const displayedTreatments = currentTreatments.slice(startIndex, endIndex); // Changed from displayedProducts

  // Widget Treatments
  const latestTreatments = allTreatments.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 3); // Changed from latestProducts
  const bestSellingTreatments = allTreatments.slice().sort((a, b) => b.transaction_count - a.transaction_count).slice(0, 3); // Changed from bestSellingProducts
  const popularTreatments = allTreatments.slice().sort((a, b) => b.seen - a.seen).slice(0, 3); // Changed from popularProducts


  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
    setCurrentPage(1);
  };

  const handleMinPriceChange = (value) => {
    setMinPrice(value);
  };

  const handleMaxPriceChange = (value) => {
    setMaxPrice(value);
  };

  const handleFilterPrice = () => {
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPaginationNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen">
      {/* Inline CSS for animations and custom font */}
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
          /* Changed from product-item-hover */
          .treatment-item-hover {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
          }
          /* Changed from product-item:hover .product-item-hover */
          .treatment-item:hover .treatment-item-hover {
            opacity: 1;
          }
          /* Changed from product-item */
          .treatment-item {
            position: relative;
            overflow: hidden;
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }
          /* Changed from product-item:hover */
          .treatment-item:hover {
            transform: translateY(-4px); /* subtle lift */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* stronger shadow on hover */
          }
          /* Changed from product-label.sale */
          .treatment-label.sale {
              background-color: #f87171; /* A shade of red for sale */
              color: white;
              font-size: 0.75rem; /* text-xs */
              font-weight: 700; /* font-bold */
              padding: 0.25rem 0.5rem; /* px-2 py-1 */
              border-radius: 0.375rem; /* rounded-md */
          }
          `}
      </style>

      <main className="container-fluid mx-auto px-4 py-8 pt-8">
        <div className="row grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-sm-3 px-0 lg:col-span-3 mt-2">
            <TreatmentSidebar
                searchKeyword={searchKeyword}
                onSearchChange={handleSearchChange}
                minPrice={minPrice}
                maxPrice={maxPrice}
                onMinPriceChange={handleMinPriceChange}
                onMaxPriceChange={handleMaxPriceChange}
                onFilterPrice={handleFilterPrice}
            />
          </div>

          {/* Main Treatment List */}
          <div className="col-sm-9 px-0 lg:col-span-9 mt-2">
            <div className="bg-white rounded-xl shadow-md p-4 mb-3">
              <div className="block-header flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b pb-4">
                <div className="block-header-left flex-1 pt-1">
                  <div className="info-records text-gray-600 font-judson">Daftar Treatment <strong>{startIndex + 1} - {Math.min(endIndex, currentTreatments.length)}</strong> dari <strong>{currentTreatments.length}</strong></div>
                </div>
                <div className="block-header-right flex flex-col md:flex-row items-end md:items-center mt-3 md:mt-0 space-y-3 md:space-y-0 md:space-x-4">
                  {/* Sorting Control */}
                  <div className="filter-sort flex items-center ml-3">
                    <span className="text-gray-700 mr-2 font-judson">Urutkan: </span>
                    <select
                      className="form-control px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DEA05B] font-judson"
                      value={sortOrder}
                      onChange={handleSortChange}
                    >
                      <option value="">Paling Sesuai</option>
                      <option value="transaction_count">Penjualan</option>
                      <option value="created_at">Terbaru</option>
                      <option value="low_price">Termurah</option>
                      <option value="high_price">Termahal</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* TOP Pagination */}
              {totalPages > 1 && (
                <div className="block-footer mb-6 flex justify-end">
                  <nav aria-label="Page navigation top">
                    <ul className="pagination flex space-x-1">
                      <li className={`page-item ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <button
                          onClick={() => handlePageChange(currentPage - 1)}
                          className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 font-judson"
                          disabled={currentPage === 1}
                        >
                          &laquo;
                        </button>
                      </li>
                      {getPaginationNumbers().map((page) => (
                        <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                          <button
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-2 rounded-lg ${currentPage === page ? 'bg-[#DEA05B] text-white' : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-100'} font-semibold font-judson`}
                          >
                            {page}
                          </button>
                        </li>
                      ))}
                      <li className={`page-item ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <button
                          onClick={() => handlePageChange(currentPage + 1)}
                          className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 font-judson"
                          disabled={currentPage === totalPages}
                        >
                          &raquo;
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}

              <div className="block-list grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {displayedTreatments.length > 0 ? (
                    displayedTreatments.map(treatment => (
                        <TreatmentCard key={treatment.id} treatment={treatment} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-600 py-10 font-judson">Tidak ada treatment yang ditemukan.</div>
                )}
              </div>

              {/* BOTTOM Pagination */}
              {totalPages > 1 && (
                <div className="block-footer mt-8 flex justify-end">
                  <nav aria-label="Page navigation bottom">
                    <ul className="pagination flex space-x-1">
                      <li className={`page-item ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <button
                          onClick={() => handlePageChange(currentPage - 1)}
                          className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 font-judson"
                          disabled={currentPage === 1}
                        >
                          &laquo;
                        </button>
                      </li>
                      {getPaginationNumbers().map((page) => (
                        <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                          <button
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-2 rounded-lg ${currentPage === page ? 'bg-[#DEA05B] text-white' : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-100'} font-semibold font-judson`}
                          >
                            {page}
                          </button>
                        </li>
                      ))}
                      <li className={`page-item ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <button
                          onClick={() => handlePageChange(currentPage + 1)}
                          className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 font-judson"
                          disabled={currentPage === totalPages}
                        >
                          &raquo;
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Floating Filter Buttons (for mobile) */}
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden p-4 z-40 rounded-t-xl border-t border-gray-200">
            <div className="flex justify-around items-center">
                <button className="flex-1 flex flex-col items-center justify-center p-2 text-gray-700 hover:text-[#DEA05B] font-medium font-judson">
                    <SlidersHorizontal size={24} className="mb-1" />
                    <span>Filter</span>
                </button>
                <button className="flex-1 flex flex-col items-center justify-center p-2 text-gray-700 hover:text-[#DEA05B] font-medium font-judson">
                    <ArrowDownWideNarrow size={24} className="mb-1" />
                    <span>Urutkan</span>
                </button>
            </div>
        </div>

        {/* Widgets Section (main-widget) */}
        <div className="main-widget container mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <TreatmentWidget
                title="Perawatan Terbaru"
                treatments={latestTreatments}
                link="/products?sort=created_at"
                sortType="created_at"
            />
            <TreatmentWidget
                title="Perawatan Terlaris"
                treatments={bestSellingTreatments}
                link="/products?sort=transaction_count"
                sortType="transaction_count"
            />
            <TreatmentWidget
                title="Popular"
                treatments={popularTreatments}
                link="/products?sort=seen"
                sortType="seen"
            />
        </div>
      </main>
    </div>
  );
};

export default TreatmentPage;
