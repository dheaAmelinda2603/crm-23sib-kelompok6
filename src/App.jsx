import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Sales from "./pages/Sales";

function App(){
  return(
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

      </Route>
    </Routes>
  );
}

export default App;
