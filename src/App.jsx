import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Menu } from './pages/Menu';
import { MenuItemDetail } from './components/menu/MenuItemDetail';

function App() {
  const [username] = useState("Fachruddin");

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header username={username} />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 bg-gray-50">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu/:id" element={<MenuItemDetail />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;