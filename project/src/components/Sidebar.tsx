import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, AlertCircle, Shield, Receipt, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const Sidebar = () => {
  const { signOut } = useAuth();
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', to: '/' },
    { icon: Package, label: 'My Items', to: '/items' },
    { icon: AlertCircle, label: 'Complaints', to: '/complaints' },
    { icon: Shield, label: 'Insurance', to: '/insurance' },
    { icon: Receipt, label: 'Bills & Receipts', to: '/bills' },
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('Signed out successfully');
    } catch (error) {
      toast.error('Error signing out');
    }
  };

  return (
    <div className="w-64 bg-white h-screen shadow-lg flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">HomeSure</h1>
      </div>
      <nav className="flex-1 mt-6">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                isActive ? 'bg-gray-100 border-r-4 border-blue-500' : ''
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t">
        <button
          onClick={handleSignOut}
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 w-full"
        >
          <LogOut className="w-5 h-5 mr-3" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;