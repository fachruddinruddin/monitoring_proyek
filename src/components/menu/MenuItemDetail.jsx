import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { menuData } from '../../data/menuData';

export const MenuItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const menu = menuData.find(item => item.id === parseInt(id));

  if (!menu) return <div>Menu tidak ditemukan</div>;

  return (
    <div className="p-6 mt-20">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">{menu.name}</h2>
        <div className="space-y-2">
          <p><span className="font-semibold">Kategori:</span> {menu.category}</p>
          <p><span className="font-semibold">Harga:</span> Rp {menu.price.toLocaleString()}</p>
          <p><span className="font-semibold">Deskripsi:</span> {menu.description}</p>
        </div>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Kembali
      </button>
    </div>
  );
};

export default MenuItemDetail;
