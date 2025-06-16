import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Sales from "./pages/Sales";
import CustomerManagement from "./pages/CustomerManagement";
import CustomerProfileDashboard from "./pages/CustomerProfileDashboard";  // pastikan import ini benar
import FormPenjualan from "./pages/FormPenjualan";
import TrackingPaket from "./pages/TrackingPaket"; // import halaman tracking paket
import TreatmentReviews from "./pages/TreatmentReviews";
import FlashSale from "./pages/FlashSale";
import LoyaltyPoint from "./pages/LoyaltyPoint";
import Perawatan from "./components/Perawatan";
import Tentang from "./pages/Tentang";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/penjualan" element={<Sales />} />
        <Route path="/pelanggan" element={<CustomerManagement />} />
        <Route path="/customer-profile" element={<CustomerProfileDashboard />} /> {/* route baru */}
        <Route path="/pelanggan" element={<CustomerManagement />} />
        <Route path="/formpenjualan" element={<FormPenjualan />} />
        <Route path="/tracking-paket" element={<TrackingPaket />} /> {/* route tracking paket */}
        <Route path="/treatment-reviews" element={<TreatmentReviews />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/penjualan" element={<Sales />} />
<Route path="/flashsale" element={<FlashSale />} />
<Route path="/loyaltypoint" element={<LoyaltyPoint />} />
<Route path="/perawatan" element={<Perawatan />} />
<Route path="/tentang" element={<Tentang />} />

      </Route>
    </Routes>
  );
}

export default App;
