
import {
  LayoutDashboard,
  User,
  ShoppingCart,
  Box,
  BarChart2,
  Settings,
  List,
Bell,
  Star,
  LogIn,
  UserPlus,
  Package,

  Sparkles, // <-- Tambahkan ini untuk ikon Treatment

  UserCheck,

} from 'lucide-react'

import { Link, useLocation } from 'react-router-dom'

const menuItems = [
  { name: 'Dashboard', icon: <LayoutDashboard />, path: '/' },
  { name: 'Treatment', icon: <Sparkles />, path: '/treatment' }, // <-- Ditambahkan
  { name: 'Produk', icon: <Box />, path: '/produk' },
  { name: 'Pelanggan', icon: <User />, path: '/pelanggan' },
  { name: 'FormPenjualan', icon: <List />, path: '/formpenjualan' },
  { name: 'Tracking Paket', icon: <Package />, path: '/tracking-paket' },


  { name: 'Penjualan', icon: <ShoppingCart />, path: '/penjualan' },
  { name: 'FlashSale', icon: <Bell />, path: '/flashsale' },
  { name: 'LoyaltyPoint', icon: <Star />, path: '/loyaltypoint' },

  { name: 'Laporan', icon: <BarChart2 />, path: '/laporan' },

  { name: 'Perawatan', icon: <BarChart2 />, path: '/perawatan' },
  { name: 'Tentang', icon: <BarChart2 />, path: '/tentang' },
  { name: 'Marketing', icon: <BarChart2 />, path: '/marketing' },



  // Tambahan menu baru untuk Ulasan & Rating Treatment
  { name: 'Ulasan & Rating', icon: <List />, path: '/treatment-reviews' },

]


const accountItems = [
  { name: "Pengaturan Akun", icon: <Settings />, path: "/akun" },
  { name: "Sign In", icon: <LogIn />, path: "/signin" },
  { name: "Sign Up", icon: <UserPlus />, path: "/signup" },
];

const specialButton = {
  name: "Profil Pelanggan",
  icon: <UserCheck />,
  path: "/customer-profile",
};

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const baseClass =
    "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-100 transition";

  return (
    <aside className="bg-white w-64 h-screen shadow-lg px-4 py-6 hidden md:block">
      <div className="text-xl font-bold mb-8 text-purple-700">UMKM CRM</div>
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`${baseClass} ${
              isActive(item.path)
                ? "bg-purple-200 text-purple-800 font-semibold"
                : "text-gray-700"
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}

        {/* Button khusus: Profil Pelanggan */}
        <Link
          to={specialButton.path}
          className={`${baseClass} mt-6 border-2 border-purple-600 text-purple-700 font-semibold ${
            isActive(specialButton.path) ? "bg-purple-200" : ""
          }`}
        >
          <span className="w-5 h-5">{specialButton.icon}</span>
          {specialButton.name}
        </Link>
      </nav>

      <div className="mt-8 text-xs font-semibold text-gray-500">AKUN</div>
      <nav className="mt-2 space-y-1">
        {accountItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`${baseClass} ${
              isActive(item.path)
                ? "bg-purple-200 text-purple-800 font-semibold"
                : "text-gray-700"
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
