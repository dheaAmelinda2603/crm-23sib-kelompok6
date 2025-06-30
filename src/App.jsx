import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import CustomerManagement from "./pages/CustomerManagement";
import FormPenjualan from "./pages/FormPenjualan";
import TrackingPaket from "./pages/TrackingPaket";
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
import UserNavbar from './pages/HalamanUser/UserNavbar';
// import ProdukDetail from './pages/ProdukDetail';
import ManajemenPesanan from "./pages/ManajemenPesanan";

function App(){
  return(
    <Routes>
      {/* Route khusus tanpa MainLayout */}
      <Route path="/login" element={<Login />} />

      <Route element={<UserNavbar />}>
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/riwayat-treatment" element={<RiwayatTreatment />} />
      <Route path="/booking" element={<Booking />} />

      </Route>

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
        <Route path="/treatment" element={<Treatment />} /> {/* ✅ path disesuaikan */}
          <Route path="/Manajemen-Pesanan" element={<ManajemenPesanan />} />
      </Route>
    </Routes>
  );
}

export default App;
