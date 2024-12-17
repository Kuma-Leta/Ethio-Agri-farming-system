import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-100 w-64 h-screen fixed top-0 left-0 pt-16 shadow-md">
      <nav className="p-4">
        <ul>
          <li className="p-2 hover:bg-green-400">
            <a href="#weather">Weather Updates</a>
          </li>
          <li className="p-2 hover:bg-green-400">
            <a href="#crop-health">Crop Health</a>
          </li>
          <li className="p-2 hover:bg-green-400">
            <a href="#advisory-services">Advisory Services</a>
          </li>
          <li className="p-2 hover:bg-green-400">
            <a href="#market-prices">Market Prices</a>
          </li>
          <li className="p-2 hover:bg-green-400">
            <a href="#notifications">Notifications</a>
          </li>
          <li className="p-2 hover:bg-green-400">
            <a href="#farming-calendar">Farming Calendar</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
