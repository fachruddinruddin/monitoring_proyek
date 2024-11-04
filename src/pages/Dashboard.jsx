import React from 'react';
import { menuData } from '../data/menuData';

export const Dashboard = () => {
  // Extract categories from menuData
  const categories = [...new Set(menuData.map(item => item.category))];

  return (
    <div className="p-6 mt-20">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Informasi Restoran</h3>
          <p>Nama: Restoran Palm Beach</p>
          <p>Alamat: Jl. Bandengan No. 12</p>
          <p>Telepon: (024) 1234567</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Statistik Menu</h3>
          <p>Total Menu: {menuData.length}</p>
          <p>Kategori: {categories.length}</p>
          <p>Menu Favorit: Soto Ayam</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Jam Operasional</h3>
          <p>Senin - Jumat: 09:00 - 21:00</p>
          <p>Sabtu - Minggu: 10:00 - 22:00</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
