import React, { useState } from 'react';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.png';

const UserNavbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const userNavItems = [
    { path: "/user-dashboard", name: "Dashboard" },
    { path: "/riwayat-treatment", name: "Riwayat Treatment" },
    { path: "/booking", name: "Booking" },
  ];

  const activeLinkStyle = {
    color: "#DEA05B",
    fontWeight: "600",
    fontFamily: 'Judson, serif'
  };

  const handleLogout = () => {
    const isConfirmed = window.confirm("Are you sure you want to log out?");

    if (isConfirmed) {
      localStorage.removeItem('userToken');
      localStorage.removeItem('userRole');
      localStorage.removeItem('userLoggedIn');
      navigate('/login');
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50" style={{ fontFamily: 'Judson, serif' }}>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Judson:wght@400;700&display=swap');
        .font-judson { font-family: 'Judson', serif; }
        `}
      </style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img src={logo} alt="BENING'S Clinic Logo" className="h-20 w-auto object-contain" />
          </div>

          <nav className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            {userNavItems.map((item) => (
              <NavLink key={item.path} to={item.path} style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                className="font-semibold text-gray-600 hover:text-[#DEA05B] transition-colors duration-300"
                end={item.path === "/user-dashboard"} >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
                <span className="font-semibold text-gray-700">Welcome, User!</span>
                <button onClick={handleLogout}
                    className="bg-[#DEA05B] text-white font-bold px-6 py-2 rounded-md hover:bg-amber-700 transition-colors duration-300 shadow-sm">
                    LOGOUT
                </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#DEA05B] focus:outline-none" aria-label="Toggle menu" >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200" onClick={() => setMobileMenuOpen(false)}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {userNavItems.map((item) => (
              <NavLink key={item.path} to={item.path} style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#DEA05B] hover:bg-amber-50"
                end={item.path === "/user-dashboard"} >
                {item.name}
              </NavLink>
            ))}
            <button onClick={handleLogout}
              className="w-full mt-2 bg-[#DEA05B] text-white font-bold px-6 py-2 rounded-md hover:bg-amber-700 transition-colors duration-300 shadow-sm" >
              LOGOUT
            </button>
          </div>
        </div>
      )}
        <Outlet />
    </nav>
  );
};

export default UserNavbar;