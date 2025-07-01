import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

//Mainlayout Admin
import AdminMainLayout from './components/Admin/AdminMainLayout';

//Halaman Admin
import CustomerManagement from "./pages/HalamanAdmin/CustomerManagement";
import FormPenjualan from "./pages/HalamanAdmin/FormPenjualan";
import TrackingPaket from "./pages/HalamanAdmin/TrackingPaket";
import LoyaltyPoint from "./pages/HalamanAdmin/LoyaltyPoint";
import AdminDashboard from './pages/HalamanAdmin/AdminDashboard';
import ManajemenPesanan from "./pages/HalamanAdmin/ManajemenPesanan";
import ProductListTable from './pages/HalamanAdmin/ProductList';
import TreatmentListTable from './pages/HalamanAdmin/TreatmentList';
import Sales from "./pages/HalamanAdmin/Sales";
import FlashSale from "./pages/HalamanAdmin/FlashSale";

//Halaman User
import UserDashboard from './pages/HalamanUser/UserDashboard';
import RiwayatTreatment from './pages/HalamanUser/RiwayatTreatment';
import Booking from './pages/HalamanUser/Booking';
import UserNavbar from './pages/HalamanUser/UserNavbar';

import CustomerProfileDashboard from "./pages/CustomerProfileDashboard";

//Mainlayout 
import MainLayout from "./components/MainLayout";

//Halaman Home
import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import Treatment from "./pages/Treatment";
import Perawatan from "./pages/Perawatan";
import KulitCerah from "./pages/KulitCerah";
import EventPromoSection from './pages/EventPromo';
import Marketing from "./pages/Marketing";
import Review from "./pages/Review"
import Tentang from "./pages/Tentang";
import ProductPage from "./pages/ProdukPage";
import TreatmentPage from "./pages/TreatmentPage";
import Location from "./pages/Location";

import ProdukDetail from './pages/ProdukDetail';
import TreatmentReviews from "./pages/TreatmentReviews";
import Product from "./pages/Products";
import UserProfile from './pages/HalamanUser/UserProfile';
import UserNotifikasi from './pages/HalamanUser/UserNotifikasi';
import UserUlasan from './pages/HalamanUser/UserUlasan';
import UserWishlist from './pages/HalamanUser/UserWishlist';
import UserPengaturan from './pages/HalamanUser/UserPengaturan';
import DetailTreatment from './pages/HalamanUser/DetailTreatment';

// function ProdukDetail() {
//   const { produkId } = useParams();
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans">
//       <h1 className="text-4xl font-bold text-gray-800">Product Detail Page</h1>More actions
//       <p className="mt-4 text-lg text-gray-600">Details for product: <span className="text-[#DEA05B] font-bold">{produkId}</span></p>
//     </div>
//   );
// }


function App() {
  return (
    <Routes>
      {/* Route khusus tanpa MainLayout */}
      <Route path="/login" element={<Login />} />

      {/* Route khusus User */}
      <Route element={<UserNavbar />}>
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/riwayat-treatment" element={<RiwayatTreatment />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/user-profile" element={<UserProfile />} />

        <Route path="/user-notifikasi" element={<UserNotifikasi />} />
        <Route path="/user-ulasan" element={<UserUlasan />} />
        <Route path="/user-wishlist" element={<UserWishlist />} />
        <Route path="/user-pengaturan" element={<UserPengaturan />} />
        <Route path="/detail-treatment/:slug" element={<DetailTreatment />} />
      </Route>

      {/* Route khusus Admin */}
      <Route element={<AdminMainLayout />}>
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/penjualan" element={<Sales />} />
        <Route path="/flashsale" element={<FlashSale />} />
        <Route path="/loyaltypoint" element={<LoyaltyPoint />} />
        <Route path="/produklist" element={<ProductListTable />} />
        <Route path="/treatmentlist" element={<TreatmentListTable />} />
        <Route path="/pelanggan" element={<CustomerManagement />} />
        <Route path="/customer-profile" element={<CustomerProfileDashboard />} />
        <Route path="/formpenjualan" element={<FormPenjualan />} />
        <Route path="/tracking-paket" element={<TrackingPaket />} />
        <Route path="/Manajemen-Pesanan" element={<ManajemenPesanan />} />
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
        <Route path="/produk/:produkId" element={<ProdukDetail />} />
        <Route path="/treatment" element={<TreatmentPage />} />
        <Route path="/treatment" element={<Navigate to="/treatment/all?page=1" replace />} />
        <Route path="/treatment/all" element={<TreatmentPage />} />

      </Route>

    </Routes>
  );
}

export default App;
