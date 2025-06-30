
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import CustomerManagement from "./pages/CustomerManagement";
import FormPenjualan from "./pages/FormPenjualan";
import TrackingPaket from "./pages/TrackingPaket";
import Treatment from "./pages/Treatment";
import ManajemenPesanan from "./pages/ManajemenPesanan";

import FormPemesananTreatment from "./components/FormPemesananTreatment";
import ListPemesananTreatment from "./components/ListPemesananTreatment";

// ✅ Halaman gabungan Form + List (input manual)
function PemesananTreatmentPage() {
  const [data, setData] = useState([]);

  const handleAdd = (newData) => {
    setData([...data, newData]);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-purple-700">Pemesanan Treatment</h1>
      <FormPemesananTreatment onSubmit={handleAdd} />
      <ListPemesananTreatment data={data} />
    </div>
  );
}

// ✅ Halaman khusus List saja (data dummy Facial & HIFU)
function ListOnlyTreatmentPage() {
  const dummyData = [
    { nama: "Alya", treatment: "Facial", tanggal: "2025-06-26" },
    { nama: "Nina", treatment: "HIFU", tanggal: "2025-06-27" },
    { nama: "Rani", treatment: "Facial", tanggal: "2025-06-28" },
    { nama: "Salsa", treatment: "HIFU", tanggal: "2025-06-29" }
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-purple-700">List Pemesanan Treatment</h1>
      <ListPemesananTreatment data={dummyData} />

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Sales from "./pages/HalamanAdmin/Sales";
import CustomerManagement from "./pages/HalamanAdmin/CustomerManagement";
import CustomerProfileDashboard from "./pages/CustomerProfileDashboard";  
import FormPenjualan from "./pages/HalamanAdmin/FormPenjualan";
import ManajemenPesanan from "./pages/HalamanAdmin/ManajemenPesanan";
import TrackingPaket from "./pages/HalamanAdmin/TrackingPaket";
import Treatment from "./pages/Treatment"; // ✅ nama import disesuaikan
import TreatmentReviews from "./pages/TreatmentReviews";
import FlashSale from "./pages/HalamanAdmin/FlashSale";
import LoyaltyPoint from "./pages/HalamanAdmin/LoyaltyPoint";
import Perawatan from "./pages/Perawatan";
import Tentang from "./pages/Tentang";
import Marketing from "./pages/Marketing";
import Product from "./pages/Products";
import Login from "./pages/Login";
import Location from "./pages/Location";
import Review from "./pages/Review"
import KulitCerah from "./pages/KulitCerah";
import TreatmentPage from "./pages/TreatmentPage";
import ProductPage from "./pages/ProdukPage";
import AdminDashboard from './pages/AdminDashboard';
import AdminMainLayout from './components/Admin/AdminMainLayout';
import EventPromoSection from './pages/EventPromo';
import UserDashboard from './pages/HalamanUser/UserDashboard';
import RiwayatTreatment from './pages/HalamanUser/RiwayatTreatment';
import Booking from './pages/HalamanUser/Booking';
// import ProdukDetail from './pages/ProdukDetail';

function ProdukDetail() {
  const { produkId } = useParams();
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans">
      <h1 className="text-4xl font-bold text-gray-800">Product Detail Page</h1>
      <p className="mt-4 text-lg text-gray-600">Details for product: <span className="text-[#DEA05B] font-bold">{produkId}</span></p>

    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Route khusus untuk halaman login - tanpa MainLayout */}
      <Route path="/login" element={<Login />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/riwayat-treatment" element={<RiwayatTreatment />} />
      <Route path="/booking" element={<Booking />} />

      <Route element={<AdminMainLayout />}>
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/penjualan" element={<Sales />} />
        <Route path="/flashsale" element={<FlashSale />} />
        <Route path="/loyaltypoint" element={<LoyaltyPoint />} />
        <Route path="/perawatan" element={<Perawatan />} />        
        <Route path="/pelanggan" element={<CustomerManagement />} />
        <Route path="/customer-profile" element={<CustomerProfileDashboard />} />
        <Route path="/formpenjualan" element={<FormPenjualan />} />
        <Route path="/tracking-paket" element={<TrackingPaket />} />

        <Route path="/treatment" element={<Treatment />} />
        <Route path="/manajemen-pesanan" element={<ManajemenPesanan />} />

        {/* ✅ Routing komponen langsung */}
        <Route path="/form-pemesanan-treatment" element={<PemesananTreatmentPage />} />
        <Route path="/list-pemesanan-treatment" element={<ListOnlyTreatmentPage />} />
        <Route path="/Manajemen-Pesanan" element={<ManajemenPesanan />} />
        <Route path="/Products" element={<Product />} />
        <Route path="/pelanggan" element={<CustomerManagement />} />

      </Route>

      {/* Route dengan MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/treatments" element={<Treatment />} />
        <Route path="/perawatan" element={<Perawatan />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/lokasi" element={<Location />} />
        <Route path="/review" element={<Review />} />
        <Route path="/event" element={<EventPromoSection />} />
        <Route path="/kulitCerah" element={<KulitCerah />} />
        <Route path="/produk/all" element={<ProductPage />} />
        <Route path="/produk" element={<Navigate to="/produk/all?page=1" replace />} />
        <Route path="/treatment" element={<TreatmentPage />} />
        <Route path="/treatment/all" element={<TreatmentPage />} />
        <Route path="/produk" element={<Navigate to="/treatment/all?page=1" replace />} />
        <Route path="/produk/:produkId" element={<ProdukDetail />} />

      </Route>
    </Routes>
  );
}

export default App;
