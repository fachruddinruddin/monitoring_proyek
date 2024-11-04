import React from 'react';
import { Link } from 'react-router-dom';

export const MenuList = ({ menus }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {menus.map((menu) => (
          <Link to={`/menu/${menu.id}`} key={menu.id}>
            <div className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold">{menu.name}</h3>
              <p className="text-gray-600">{menu.category}</p>
              <p className="text-gray-800 font-medium">Rp {menu.price.toLocaleString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuList;