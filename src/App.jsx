import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import CustomerManagement from "./pages/CustomerManagement";
import FormPenjualan from "./pages/FormPenjualan";
import TrackingPaket from "./pages/TrackingPaket"; // import halaman tracking paket

function App(){
  return(
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pelanggan" element={<CustomerManagement />} />
        <Route path="/formpenjualan" element={<FormPenjualan />} />
        <Route path="/tracking-paket" element={<TrackingPaket />} /> {/* route tracking paket */}
      </Route>
    </Routes>
  )
}

export default App
