import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Sales from "./pages/Sales";
import CustomerManagement from "./pages/CustomerManagement";
import CustomerProfileDashboard from "./pages/CustomerProfileDashboard";  // pastikan import ini benar
import FormPenjualan from "./pages/FormPenjualan";
import ManajemenPesanan from "./pages/ManajemenPesanan";
import TrackingPaket from "./pages/TrackingPaket";
import Treatment from "./pages/Treatment"; // ✅ nama import disesuaikan
import TreatmentReviews from "./pages/TreatmentReviews";
import FlashSale from "./pages/FlashSale";
import LoyaltyPoint from "./pages/LoyaltyPoint";
import Perawatan from "./components/Perawatan";
import Tentang from "./pages/Tentang";
import Marketing from "./pages/Marketing";
import Product from "./pages/Products";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/perawatan" element={<Perawatan />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/penjualan" element={<Sales />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/pelanggan" element={<CustomerManagement />} />
        <Route path="/customer-profile" element={<CustomerProfileDashboard />} /> {/* route baru */}
        <Route path="/pelanggan" element={<CustomerManagement />} />
        <Route path="/formpenjualan" element={<FormPenjualan />} />
        <Route path="/tracking-paket" element={<TrackingPaket />} />
        <Route path="/treatment" element={<Treatment />} /> {/* ✅ path disesuaikan */}
        <Route path="/Manajemen-Pesanan" element={<ManajemenPesanan />} />
        <Route path="/Products" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default App;
