import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center text-white">
      <div className="flex items-center space-x-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? 'text-yellow-300 font-bold' : 'hover:text-yellow-400 font-bold'
          }
        >
          Dashboard
        </NavLink>
        <NavLink 
          to="/tasks" 
          className={({ isActive }) => 
            isActive ? 'text-yellow-300 font-bold' : 'hover:text-yellow-400 font-bold'
          }
        >
          Tasks
        </NavLink>
      </div>
      <div className="text-lg md:text-xl lg:text-2xl font-bold text-center">Task Management Dashboard</div>
      <div>
        <FaUserCircle className="text-3xl" />
      </div>
    </nav>
  );
};

export default Navbar;
