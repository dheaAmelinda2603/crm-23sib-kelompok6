import React, { useState } from 'react';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.png';

const UserNavbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const userNavItems = [
    { path: "/user-dashboard", name: "Dashboard" },
    { path: "/riwayat-treatment", name: "Riwayat Treatment" },
    { path: "/booking", name: "Booking" },
    { path: "/user-profile", name: "Profil" },
  ];

  const moreNavItems = [
    { path: "/user-notifikasi", name: "Notifikasi" },
    { path: "/user-ulasan", name: "Ulasan & Rating" },
    { path: "/user-wishlist", name: "Wishlist " },
    { path: "/user-pengaturan", name: "Pengaturan " },
  ];

  const activeLinkStyle = {
    color: "#DEA05B",
    fontWeight: "600",
    fontFamily: 'Judson, serif'
  };

  const handleLogout = () => {
    if (window.confirm("Apakah Anda yakin ingin logout?")) {
      localStorage.clear();
      navigate('/login');
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Judson:wght@400;700&display=swap');
          .font-judson { font-family: 'Judson', serif; }
        `}
      </style>

      <header className="bg-white shadow-md sticky top-0 z-50 font-judson">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="BENING'S Logo" className="h-16 object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {userNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                className="text-gray-700 font-medium hover:text-[#DEA05B] transition"
              >
                {item.name}
              </NavLink>
            ))}

            {/* Dropdown: Lainnya */}
            <div className="relative">
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-gray-700 font-medium hover:text-[#DEA05B] transition"
              >
                Lainnya ⏷
              </button>
              {showMore && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-40">
                  {moreNavItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setShowMore(false)}
                      style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-100 rounded"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* User Info & Logout */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-gray-600">Welcome, User!</span>
            <button
              onClick={handleLogout}
              className="bg-[#DEA05B] text-white font-bold px-5 py-2 rounded hover:bg-[#c58c40] transition"
            >
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#DEA05B]"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Items */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white py-2 px-4 space-y-2">
            {[...userNavItems, ...moreNavItems].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                className="block py-2 px-3 rounded hover:bg-amber-100 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <button
              onClick={handleLogout}
              className="w-full bg-[#DEA05B] text-white font-bold px-6 py-2 rounded-md hover:bg-amber-700 transition"
            >
              Logout
            </button>
          </div>
        )}
      </header>

      {/* Outlet for children pages */}
      <main className="font-judson">
        <Outlet />
      </main>
    </>
  );
};

export default UserNavbar;
