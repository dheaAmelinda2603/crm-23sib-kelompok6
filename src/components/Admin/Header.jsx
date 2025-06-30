import { Search, User, LogOut, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");

    if (confirmLogout) {
      console.log("User has been logged out. Redirecting to /login...");
      navigate('/login');
    } else {
      console.log("Logout cancelled. Staying on current page.");
    }
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-[#e5dacd] shadow-sm sticky top-0 z-10 font-judson">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Judson:wght@400;700&display=swap');
        .font-judson { font-family: 'Judson', serif; }
        `}
      </style>
      
      {/* Left side: Search bar */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Type here..."
            className="px-4 py-2 pl-10 text-sm border border-gray-300 bg-white rounded-full focus:outline-none focus:ring-1 focus:ring-amber-400 text-gray-800 placeholder-gray-500"/>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Notifications Icon */}
        <button className="text-gray-800 hover:text-gray-900 transition focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-75 rounded-full p-1" title="Notifications"  >
          <Bell className="w-5 h-5" />
        </button>

        {/* User Profile/Name Placeholder  */}
        <div className="flex items-center gap-2 text-gray-800">
          <User className="w-5 h-5" />
          <span className="font-medium text-sm hidden sm:block">Admin User</span>
        </div>

        {/* Logout Button */}
        <button onClick={handleLogout} className="flex items-center gap-2 px-3 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;