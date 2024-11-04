import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu as MenuIcon } from 'lucide-react';

export const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="bg-blue-100 w-64 min-h-screen p-4 ">
      <nav>
        <ul className="space-y-2 ">
          <li className="mt-20">
            <Link 
              to="/" 
              className={`flex items-center space-x-3 px-4 py-2 rounded hover:bg-blue-200 ${
                location.pathname === '/' ? 'bg-blue-200' : ''
              }`}
            >
              <Home size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/menu" 
              className={`flex items-center space-x-3 px-4 py-2 rounded hover:bg-blue-200 ${
                location.pathname.includes('/menu') ? 'bg-blue-200' : ''
              }`}
            >
              <MenuIcon size={20} />
              <span>Menu</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;