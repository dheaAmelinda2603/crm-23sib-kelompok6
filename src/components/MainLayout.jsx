import React, { useState, useEffect } from "react"; 
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom"; 
import logo from "../assets/logo.png";
import { SocialIcon } from 'react-social-icons';

export default function MainLayout() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location.pathname]); 

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/tentang", name: "Tentang" },
    { path: "/produk", name: "Produk" },
    { path: "/treatment", name: "Treatment" },
    { path: "/lokasi", name: "Lokasi" },
  ];

  const getCurrentPageName = () => {
    const currentPath = location.pathname;
    if (currentPath === "/") return "Home";
    const navItem = navItems.find((item) => item.path === currentPath);
    if (navItem) return navItem.name;
    return currentPath
      .substring(1)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());
  };

  const pageName = getCurrentPageName();

  const activeLinkStyle = {
    color: "#F97316", 
    fontWeight: "600",
    fontFamily: 'Judson, judson'
  };

  const clinicLocation = "Jl Soekarno Hatta / Arengka 1, Kavling No.03/04, Labuh Baru Tim., Payung, Kota Pekanbaru, Riau 28292.";
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicLocation)}`;
  const phoneNumber = "+62 822-8989-3325";
  const formattedPhoneNumber = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`; 

  const socialLinks = [
    { name: "Instagram", network: "instagram", url: "https://www.instagram.com/beningsclinic_pekanbaru" },
    { name: "TikTok", network: "tiktok", url: "https://www.tiktok.com/@beningsclinic" },
    { name: "YouTube", network: "youtube", url: "https://www.youtube.com/user/beningsclinic" }
  ];

  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/login'); 
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Judson, judson' }}>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <img src={logo} alt="Bening's Clinic Logo" className="h-20 w-auto object-contain" />
            </div>
            <nav className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path}
                  style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                  className="font-semibold text-gray-600 hover:text-orange-500 transition-colors duration-300"
                  end={item.path === "/"}>
                  {item.name}
                </NavLink>
              ))}
            </nav>
            <div className="hidden md:block">
              <button
                onClick={handleSignInClick}
                className="bg-amber-600 text-white font-bold px-6 py-2 rounded-md hover:bg-amber-700 transition-colors duration-300 shadow-sm">
                SIGN IN
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-orange-500 focus:outline-none" aria-label="Toggle menu">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200" onClick={() => setMobileMenuOpen(false)}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path}
                  style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                  end={item.path === "/"}>
                  {item.name}
                </NavLink>
              ))}
              <button
                onClick={handleSignInClick}
                className="w-full mt-2 bg-amber-600 text-white font-bold px-6 py-2 rounded-md hover:bg-amber-700 transition-colors duration-300 shadow-sm">
                SIGN IN
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-0 mt-0">
        <Outlet />
      </main>

      {/* FOOTER */}
<footer className="bg-[#DEA05B] text-white py-12 px-4 mt-8" style={{ fontFamily: 'Judson, judson' }}>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    {/* Location Section */}
    <div className="flex flex-col items-center md:items-start">
      <h3 className="text-xl font-semibold mb-4 text-white text-center w-full">Lokasi Kami</h3>
      <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-800 transition-colors duration-300 flex items-center justify-center md:justify-start">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        {clinicLocation}
      </a>
    </div>

    {/* Social Media Section */}
    <div className="flex flex-col items-center md:items-center">
      <h3 className="text-xl font-semibold mb-4 text-white text-center w-full">Ikuti Kami</h3>
      <div className="flex space-x-6">
        {socialLinks.map((social) => (
          <a key={social.name} href={social.url} target="_blank"
            rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110"
            aria-label={social.name}>
            <SocialIcon network={social.network} url={social.url}
              fgColor="white" bgColor="transparent" style={{ height: 48, width: 48 }} />
          </a>
        ))}
      </div>
    </div>

    {/* Contact Section */}
     <div className="flex flex-col items-center md:items-center"> 
      <h3 className="text-xl font-semibold mb-4 text-white w-full text-center">Hubungi Kami</h3>
      <div className="flex items-center justify-center md:justify-center w-full"> 
        <a href={formattedPhoneNumber} target="_blank"
          rel="noopener noreferrer" className="text-white hover:text-gray-800 transition-colors duration-300 flex items-center">
          <SocialIcon network="whatsapp" url={formattedPhoneNumber}
            fgColor="white" bgColor="transparent" style={{ height: 48, width: 48, marginRight: '8px' }} />
          {phoneNumber}
        </a>
      </div>
    </div>
  </div>
  <div className="mt-12 text-center text-white text-sm">
    © {new Date().getFullYear()} Bening's Clinic. All rights reserved.
  </div>
</footer>
    </div>
  );
}