import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Sales from "./pages/Sales";
import FlashSale from "./pages/FlashSale";
import LoyaltyPoint from "./pages/LoyaltyPoint";
import Perawatan from "./components/Perawatan";
import Tentang from "./pages/Tentang";
import Marketing from "./pages/Marketing";

function App(){
  return(
    <Routes>
      <Route element={<MainLayout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/penjualan" element={<Sales />} />
<Route path="/flashsale" element={<FlashSale />} />
<Route path="/loyaltypoint" element={<LoyaltyPoint />} />
<Route path="/perawatan" element={<Perawatan />} />
<Route path="/tentang" element={<Tentang />} />
<Route path="/marketing" element={<Marketing />} />

      </Route>
    </Routes>
  )
}

export default App