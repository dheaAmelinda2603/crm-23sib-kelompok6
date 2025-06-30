import React from 'react';
import { NavLink } from 'react-router-dom'; // ganti Link menjadi NavLink
import logo from '../../assets/logo.png';

const UserNavbar = () => {
  const activeClass = "text-[#DEA05B] font-bold"; // Warna gold saat aktif
  const normalClass = "hover:text-[#DEA05B] transition-colors";

  return (
    <nav className="w-full fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-white shadow-sm z-50">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="BENING'S Logo" className="h-12 mr-2" />
      </div>

      <ul className="flex space-x-6 text-lg font-medium text-gray-700">
        <li>
          <NavLink
            to="/user-dashboard"
            className={({ isActive }) => isActive ? activeClass : normalClass}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/riwayat-treatment"
            className={({ isActive }) => isActive ? activeClass : normalClass}
          >
            Riwayat Treatment
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/booking"
            className={({ isActive }) => isActive ? activeClass : normalClass}
          >
            Booking
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default UserNavbar;
