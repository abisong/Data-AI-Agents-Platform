import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Settings } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Database className="mr-2" />
          <span className="text-xl font-bold">JpSecureNet.ai</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-200">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-200">Contact</Link></li>
            <li><Link to="/settings" className="hover:text-blue-200 flex items-center"><Settings className="mr-1" size={16} /> Settings</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;