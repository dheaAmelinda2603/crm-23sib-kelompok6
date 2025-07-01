import {Users,ShoppingCart,Bell,BarChart2,Settings,Star,List,Package,Home,ClipboardList,Tag, Sparkles,} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/logo.png";

const sidebarSections = [
  {
    title: null,
    items: [
      { name: 'Dashboard', icon: <Home />, path: '/dashboard' },
    ]
  },
  {
    title: 'Sales & Orders',
    items: [
      { name: 'Form Penjualan', icon: <List />, path: '/formpenjualan' },
      { name: 'Penjualan', icon: <ShoppingCart />, path: '/penjualan' },
      { name: 'Manajemen Pesanan', icon: <ClipboardList />, path: '/manajemen-pesanan' },
      { name: 'Tracking Paket', icon: <Package />, path: '/tracking-paket' },
    ]
  },
  {
    title: 'Catalog',
    items: [
      { name: 'Produk', icon: <Tag />, path: '/produklist' },
      { name: 'Treatment', icon: <Sparkles />, path: '/treatmentlist' },
    ]
  },
  {
    title: 'Marketing',
    items: [
      { name: 'Flash Sale', icon: <Bell />, path: '/flashsale' },
      { name: 'Loyalty Point', icon: <Star />, path: '/loyaltypoint' },
    ]
  },
  {
    title: 'Customers',
    items: [
      { name: 'Customer Management', icon: <Users />, path: '/pelanggan' },
    ]
  },
  {
    title: 'Analytics',
    items: [
      { name: 'Laporan', icon: <BarChart2 />, path: '/laporan' },
    ]
  },
];

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="bg-white w-64 h-screen shadow-lg px-4 py-6 hidden md:block font-judson overflow-y-auto">
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

      <div class="text-xl font-bold mb-8 text-[#DEA05B] font-judson text-center">Bening's Clinic</div>

      <nav>
        {sidebarSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-4">
            {section.title && (
              <h2 className="text-xs font-semibold text-gray-500 uppercase mt-4 mb-2">
                {section.title}
              </h2>
            )}
            <div className="space-y-1">
              {section.items.map((item) => (
                <Link key={item.name} to={item.path} className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-amber-100 transition ${
                    isActive(item.path) ? 'bg-amber-200 text-amber-800 font-semibold' : 'text-gray-700'
                  }`}>
                  <span className="w-5 h-5">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </div>
            {sectionIndex < sidebarSections.length - 1 && section.title && (
              <div className="border-b border-gray-200 mt-4"></div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;