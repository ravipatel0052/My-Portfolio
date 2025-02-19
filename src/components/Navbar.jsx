import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';  
import light_logo from '../assets/logo_red.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State for toggling the menu
  const location = useLocation();  

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle screen resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 750) {
        setIsMenuOpen(false);  // Close the menu on larger screens
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to close the dropdown when a menu item is clicked
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full flex items-center px-4 py-2 transition-all duration-300 
      ${isScrolled ? 'bg-white/60 shadow-md' : 'bg-transparent'} backdrop-blur-md z-50`}
    >
      <div className='flex items-center justify-end mr-2 w-1/12'>
        <img src={light_logo} alt='logo' className='w-10' />
      </div>
      <div className='flex items-center w-5/12'>
        {/* <h3 className=' text-2xl font-semibold font-[Poppins] text-red-600'>Ravi Patel</h3> */}
      </div>

      {/* Desktop NavLinks */}
      <ul className={`flex flex-row items-center justify-evenly w-6/12 text-gray-700 font-medium font-[Poppins] 
  ${isMenuOpen ? 'flex-col absolute bg-white/65 shadow-md top-full right-0 w-2/5 rounded-lg p-4' : 'hidden md:flex'}`}>


        <li>
          <NavLink to='/' onClick={handleMenuClick} className={({ isActive }) => isActive ? 'text-green-500' : 'hover:text-green-500'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/projects' onClick={handleMenuClick} className={({ isActive }) => isActive ? 'text-green-500' : 'hover:text-green-500'}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to='/blogs' onClick={handleMenuClick} className={({ isActive }) => isActive ? 'text-green-500' : 'hover:text-green-500'}>
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' onClick={handleMenuClick} className={({ isActive }) => isActive ? 'text-green-500' : 'hover:text-green-500'}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/contacts' onClick={handleMenuClick} className={({ isActive }) => isActive ? 'text-green-500' : 'hover:text-green-500'}>
            Contacts
          </NavLink>
        </li>
        {/* Resume button inside the dropdown */}
        {location.pathname !== '/resume' && (
          <li>
            <NavLink to='/resume' onClick={handleMenuClick}>
              <button className='px-3 py-2 text-white bg-green-400 rounded-lg text-sm font-semibold 
              hover:bg-gray-600 transition-all shadow-md'>
                Resume
              </button>
            </NavLink>
          </li>
        )}
      </ul>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden ml-auto p-2 text-gray-700"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
