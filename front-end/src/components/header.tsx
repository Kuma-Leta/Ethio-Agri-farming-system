import React from "react";
import { useNavigate } from "react-router-dom";
const Header: React.FC = () => {
  const navigate = useNavigate();
  function handleLogout() {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("token"); // Remove the token
      navigate("/login"); // Redirect to login page
    }
  }
  return (
    <header className="bg-green-700 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src="/logo.png" alt="Ethio-Agri+ Logo" className="h-8 w-8" />
          <span className="text-lg font-bold">Ethio-Agri+</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hover:text-gray-200">Language</button>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
