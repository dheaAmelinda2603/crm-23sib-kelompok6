import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import CustomerManagement from "./pages/CustomerManagement";
import FormPenjualan from "./pages/FormPenjualan";
import TrackingPaket from "./pages/TrackingPaket";
import Treatment from "./pages/Treatment";
import ManajemenPesanan from "./pages/ManajemenPesanan";

function App(){
  return(
    <Routes>
      {/* Route khusus untuk halaman login - tanpa MainLayout */}
      <Route path="/login" element={<Login />} />

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
