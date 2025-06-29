import {
  LayoutDashboard,
  Users,           
  ShoppingCart,    
  Bell,            
  Box,             
  BarChart2,       
  Settings,       
  User,
  Star,            
  LogIn,
  UserPlus,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/logo.png";

const menuItems = [
  { name: 'Dashboard', icon: <LayoutDashboard />, path: '/dashboard' },
  { name: 'Produk', icon: <Box />, path: '/product' },
  { name: 'Penjualan', icon: <ShoppingCart />, path: '/penjualan' },
  { name: 'FlashSale', icon: <Bell />, path: '/flashsale' },
  { name: 'LoyaltyPoint', icon: <Star />, path: '/loyaltypoint' },
  { name: 'Laporan', icon: <BarChart2 />, path: '/laporan' },
];

// buat fitur-fitur CRM SFA,SA

const accountItems = [
  { name: 'Pengaturan Akun', icon: <Settings />, path: '/akun' },
  { name: 'Sign In', icon: <LogIn />, path: '/signin' },
  { name: 'Sign Up', icon: <UserPlus />, path: '/signup' },
];

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="bg-white w-64 h-screen shadow-lg px-4 py-6 hidden md:block font-judson">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Judson:wght@400;700&display=swap');
        .font-judson { font-family: 'Judson', serif; }
        `}
      </style>

      <Link to="/" className="flex justify-center mb-4">
          <img src={logo} alt="logo" className="w-32 h-auto object-contain"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/128x64/DDD/AAA?text=Logo"; }} />
      </Link>

      <div className="border-b border-gray-200 mb-4"></div>

      <div className="text-xl font-bold mb-8 text-[#DEA05B] font-judson">Bening's Clinic</div>

      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-amber-100 transition ${ 
              isActive(item.path)
                ? 'bg-amber-200 text-amber-800 font-semibold'
                : 'text-gray-700'
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="mt-8 text-xs font-semibold text-gray-500 font-judson">AKUN</div>
      <nav className="mt-2 space-y-1">
        {accountItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-amber-100 transition ${ 
              isActive(item.path)
                ? 'bg-amber-200 text-amber-800 font-semibold' 
                : 'text-gray-700'
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;