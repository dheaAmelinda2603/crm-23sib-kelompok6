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
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pelanggan" element={<CustomerManagement />} />
        <Route path="/formpenjualan" element={<FormPenjualan />} />
        <Route path="/tracking-paket" element={<TrackingPaket />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/manajemen-pesanan" element={<ManajemenPesanan />} />

        {/* ✅ Routing komponen langsung */}
        <Route path="/form-pemesanan-treatment" element={<PemesananTreatmentPage />} />
        <Route path="/list-pemesanan-treatment" element={<ListOnlyTreatmentPage />} />
      </Route>
    </Routes>
  );
}

export default App;
