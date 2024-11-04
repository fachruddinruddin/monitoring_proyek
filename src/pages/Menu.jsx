import React from 'react';
import { MenuList } from '../components/menu/MenuList';
import { menuData } from '../data/menuData';

export const Menu = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Daftar Menu</h2>
      <MenuList menus={menuData} />
    </div>
  );
};

export default Menu;