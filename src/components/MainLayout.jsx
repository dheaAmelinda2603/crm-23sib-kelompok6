import React, { useState } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; // <-- DIPERBAIKI: Menggunakan logo.png

/**
 * Komponen ini akan menjadi layout utama aplikasi Anda.
 * Ia menampilkan header, navigasi, dan breadcrumbs di bagian atas.
 * <Outlet /> adalah placeholder dari react-router-dom di mana
 * komponen halaman Anda (seperti Dashboard, Sales, dll.) akan ditampilkan.
 */

export default function MainLayout() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Daftar link yang akan muncul di navigasi.
  // Anda bisa dengan mudah menambah atau mengurangi item di sini.
  // 'path' harus sesuai dengan path di App.jsx Anda.
  const navItems = [
    { path: "/", name: "Home" },
    { path: "/tentang", name: "Tentang" },
    { path: "/penjualan", name: "Penjualan" },
    { path: "/pelanggan", name: "Pelanggan" },
    { path: "/treatment", name: "Treatment" },
    { path: "/perawatan", name: "Perawatan" },
  ];

  // Fungsi untuk mendapatkan nama halaman saat ini untuk breadcrumbs
  const getCurrentPageName = () => {
    const currentPath = location.pathname;
    if (currentPath === "/") return "Home";

    // Mencari nama dari navItems, jika tidak ada, format pathnya
    const navItem = navItems.find((item) => item.path === currentPath);
    if (navItem) return navItem.name;

    // Fallback: format nama path jika tidak ada di navItems
    // Contoh: /nama-halaman-baru -> Nama Halaman Baru
    return currentPath
      .substring(1)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());
  };

  const pageName = getCurrentPageName();

  // Class untuk styling link aktif
  // Disarankan mendefinisikan warna ini di tailwind.config.js
  // untuk konsistensi di seluruh proyek.
  const activeLinkStyle = {
    color: "#F97316", // oranye
    fontWeight: "600",
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* HEADER & NAVIGASI */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              {/* Ini adalah bagian yang diubah dari teks menjadi gambar */}
              <img
                src={logo}
                alt="Bening's Clinic Logo"
                className="h-20 w-auto object-contain" // Ukuran logo, sesuaikan jika perlu
              />
            </div>

            {/* Navigasi Desktop */}
            <nav className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  style={({ isActive }) =>
                    isActive ? activeLinkStyle : undefined
                  }
                  className="font-semibold text-gray-600 hover:text-orange-500 transition-colors duration-300"
                  end={item.path === "/"} // Prop 'end' penting untuk 'Home'
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Tombol Sign In (Desktop) */}
            <div className="hidden md:block">
              <button className="bg-amber-600 text-white font-bold px-6 py-2 rounded-md hover:bg-amber-700 transition-colors duration-300 shadow-sm">
                SIGN IN
              </button>
            </div>

            {/* Tombol Menu Hamburger (Mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-orange-500 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isMobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Dropdown Menu Mobile */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden border-t border-gray-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  style={({ isActive }) =>
                    isActive ? activeLinkStyle : undefined
                  }
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                  end={item.path === "/"}
                >
                  {item.name}
                </NavLink>
              ))}
              <button className="w-full mt-2 bg-amber-600 text-white font-bold px-6 py-2 rounded-md hover:bg-amber-700 transition-colors duration-300 shadow-sm">
                SIGN IN
              </button>
            </div>
          </div>
        )}
      </header>

      {/* BREADCRUMBS */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-sm font-medium text-gray-700">
            <NavLink to="/" className="hover:text-orange-500">
              Home
            </NavLink>
            {pageName !== "Home" && ` / ${pageName}`}
          </p>
        </div>
      </div>

      {/* KONTEN HALAMAN */}
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
}
