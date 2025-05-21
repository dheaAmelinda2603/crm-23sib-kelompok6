import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Sales from "./pages/Sales";
import CustomerManagement from "./pages/CustomerManagement";

function App(){
  return(
    <Routes>
      <Route element={<MainLayout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/penjualan" element={<Sales />} />
      <Route path="/pelanggan" element={<CustomerManagement />} />

      </Route>
    </Routes>
  )
}

export default App