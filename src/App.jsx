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

      </Route>
    </Routes>
  )
}

export default App