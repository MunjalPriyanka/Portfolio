import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

import './topbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('home');

  const navigationItems = [
    { id: 'home', icon: <AiOutlineHome />, label: 'Home' },
    { id: 'about', icon: <AiOutlineUser />, label: 'About' },
    { id: 'publication', icon: <RiServiceLine />, label: 'Publication' },
    { id: 'courses', icon: <BiBook />, label: 'Courses' },
    { id: 'contact', icon: <BiMessageSquareDetail />, label: 'Contact' },
  ];

  const handleNavItemClick = (itemId) => {
    setActiveNav(itemId);
  };

  return (
    <nav className="topbar">
      {navigationItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={() => handleNavItemClick(item.id)}
          className={activeNav === item.id ? 'active' : ''}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
};

export default Topbar;
