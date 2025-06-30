import React, { useState, useMemo } from 'react';
import { Search, ChevronLeft, ChevronRight, Eye, ShoppingCart, CalendarDays } from 'lucide-react';

// Updated allTreatments data with numeric IDs and 'title' instead of 'name'
const allTreatments = [
    { id: 1, title: 'Bening’s Acne / Whitening Facial', price: 'Rp 250.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_1672631739347635523.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 50, created_at: '2023-01-01T12:00:00Z', seen: 150 },
    { id: 2, title: 'Korean Toning / Acne Combo Facial', price: 'Rp 500.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_9389081739418855609.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 75, created_at: '2023-01-05T12:00:00Z', seen: 200 },
    { id: 3, title: 'Instan Glowing Facial', price: 'Rp 700.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_2494771739419484209.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 60, created_at: '2023-01-10T12:00:00Z', seen: 180 },
    { id: 4, title: 'Luxury Facial', price: 'Rp 1.500.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_2058771739419775651.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 40, created_at: '2023-01-15T12:00:00Z', seen: 120 },
    { id: 5, title: 'Chromosome Facial', price: 'Rp 2.500.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_2345751739420228859.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 30, created_at: '2023-01-20T12:00:00Z', seen: 90 },
    { id: 6, title: 'Face Peeling (Diamond Peeling, Korean Peeling, dan Acne Peeling)', price: 'Rp 250.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_1904681739420439719.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 80, created_at: '2023-01-25T12:00:00Z', seen: 250 },
    { id: 7, title: 'Bening’s Peeling (Ultra Peel, Blue Peel, dan Sensi Peel)', price: 'Rp 500.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5068171739420578935.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 55, created_at: '2023-01-30T12:00:00Z', seen: 170 },
    { id: 8, title: 'Body Peeling ( Hand Peeling dan Leg Peeling)', price: 'Rp 750.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_9633671739420731007.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 35, created_at: '2023-02-05T12:00:00Z', seen: 110 },
    { id: 9, title: 'Radio Frequency', price: 'Rp 250.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_6781861739420873367.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 90, created_at: '2023-02-10T12:00:00Z', seen: 300 },
    { id: 10, title: 'Hifu (Upperface, Pipi, dan Double Chin)', price: 'Rp 500.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_9192001739431017178.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 25, created_at: '2023-02-15T12:00:00Z', seen: 80 },
    { id: 11, title: 'Mesolipolysis Injection (Perut/Lengan/Paha) (Pipi/Double chin)', price: 'Rp 500.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_4283701739430931903.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 45, created_at: '2023-02-20T12:00:00Z', seen: 130 },
    { id: 12, title: 'Acne Inject', price: 'Rp 100.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_2270401739431089696.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 120, created_at: '2023-02-25T12:00:00Z', seen: 400 },
    { id: 13, title: 'Korean Infusion', price: 'Rp 500.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_1287961739431228832.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 70, created_at: '2023-03-01T12:00:00Z', seen: 210 },
    { id: 14, title: 'Snow White Infusion', price: 'Rp 1.000.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_5136681739431307552.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 30, created_at: '2023-03-05T12:00:00Z', seen: 95 },
    { id: 15, title: 'Diamond Infusion', price: 'Rp 2.000.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_8285761739431509392.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 20, created_at: '2023-03-10T12:00:00Z', seen: 70 },
    { id: 16, title: 'Chromosome Infusion', price: 'Rp 10.000.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3703401739431620817.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 10, created_at: '2023-03-15T12:00:00Z', seen: 50 },
    { id: 17, title: 'Diode Laser Acne/Glowing', price: 'Rp 500.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_4378751739431748179.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 65, created_at: '2023-03-20T12:00:00Z', seen: 190 },
    { id: 18, title: 'Q-Switched Ndyag Laser', price: 'Rp 500.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_7730501739431951943.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 48, created_at: '2023-03-25T12:00:00Z', seen: 160 },
    { id: 19, title: 'Laser CO2 / Erbium Laser - Acne Scar', price: 'Rp 750.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3992451739436157133.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 32, created_at: '2023-03-30T12:00:00Z', seen: 100 },
    { id: 20, title: 'Laser CO2 / Erbium Laser - Skintag', price: 'Rp 100.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_7167331739436186354.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 95, created_at: '2023-04-05T12:00:00Z', seen: 280 },
    { id: 21, title: 'IPL Hair Removal (Kumis/Janggut)', price: 'Rp 150.000', imageUrl: 'https://cdn.orderonline.id/img/default-product.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 100, created_at: '2023-04-10T12:00:00Z', seen: 320 },
    { id: 22, title: 'Picofront Laser', price: 'Rp 3.000.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_4791251739437189080.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 200, created_at: '2023-04-15T12:00:00Z', seen: 500 },
    { id: 23, title: 'Proyellow Laser Complete', price: 'Rp 1.000.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_2060761739437229655.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 180, created_at: '2023-04-20T12:00:00Z', seen: 450 },
    { id: 24, title: 'PRP Wajah', price: 'Rp 750.000', imageUrl: 'https://cdn.orderonline.id/uploads/images_3055371739437498490.png', category: 'Kecantikan', collection: 'Perawatan Wajah', transaction_count: 160, created_at: '2023-04-25T12:00:00Z', seen: 420 },
];

const ITEMS_PER_PAGE = 10; // Number of treatments to show per page

const TreatmentListTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter treatments based on search term
  const filteredTreatments = useMemo(() => {
    if (!searchTerm) {
      return allTreatments;
    }
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return allTreatments.filter(treatment =>
      treatment.title.toLowerCase().includes(lowercasedSearchTerm) || // Changed to treatment.title
      treatment.category.toLowerCase().includes(lowercasedSearchTerm) ||
      (treatment.collection && treatment.collection.toLowerCase().includes(lowercasedSearchTerm))
    );
  }, [searchTerm]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredTreatments.length / ITEMS_PER_PAGE);

  // Get treatments for the current page
  const currentTreatments = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredTreatments.slice(startIndex, endIndex);
  }, [currentPage, filteredTreatments]);

  // Handle page change
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Helper function to format date
  const formatDate = (isoString) => {
    if (!isoString) return '';
    const date = new Date(isoString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md font-judson">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Judson:wght@400;700&display=swap');
        .font-judson { font-family: 'Judson', serif; }
        `}
      </style>

      <h2 className="text-2xl font-bold mb-6 text-[#DEA05B]">Daftar Treatment</h2>

      {/* Search Input */}
      <div className="mb-4 relative max-w-sm">
        <input
          type="text"
          placeholder="Cari treatment..."
          className="w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to first page on new search
          }}
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      </div>

      {/* Treatment Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gambar</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Treatment</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harga</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Terjual</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dilihat</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal Dibuat</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentTreatments.length > 0 ? (
              currentTreatments.map((treatment) => (
                <tr key={treatment.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img src={treatment.imageUrl} alt={treatment.title} className="h-12 w-12 object-cover rounded-md" />
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                    {treatment.title} {/* Changed from treatment.name to treatment.title */}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {treatment.category}
                    {treatment.collection && <span className="block text-xs text-gray-400">{treatment.collection}</span>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className="font-semibold">{treatment.price}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center gap-1 text-[#DEA05B]">
                      <ShoppingCart className="w-4 h-4" /> {treatment.transaction_count}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center gap-1 text-[#DEA05B]">
                      <Eye className="w-4 h-4" /> {treatment.seen}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4 text-green-500" /> {formatDate(treatment.created_at)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="px-6 py-4 text-center text-gray-500">
                  Tidak ada treatment ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <span className="text-sm text-gray-700">
          Menampilkan {Math.min((currentPage - 1) * ITEMS_PER_PAGE + 1, filteredTreatments.length)} -{' '}
          {Math.min(currentPage * ITEMS_PER_PAGE, filteredTreatments.length)} dari {filteredTreatments.length} treatment
        </span>
        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index + 1)}
              className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                currentPage === index + 1
                  ? 'z-10 bg-amber-100 border-[#DEA05B] text-[#DEA05B]'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="sr-only">Next</span>
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default TreatmentListTable;