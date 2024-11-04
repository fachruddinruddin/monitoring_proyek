import React from "react";
import { ChevronRight, User, Utensils } from "lucide-react";

export const Header = ({ username }) => {
  return (
    <header className="bg-blue-600 text-white p-4 m-3 flex justify-between items-center rounded-lg absolute left-1 right-1 z-10">
      <div className="flex items-center space-x-2">
        <Utensils size={20} />
        <span className="font-medium">Menu Restoran |</span>
        
        <span>Application</span>
        <ChevronRight size={16} />
        <span>Menu</span>
      </div>
      <div className="flex items-center space-x-3">
        <span>{username}</span>
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <User className="text-blue-600" size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
