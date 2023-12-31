import React from 'react';
import CTA from './CTA';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kalyani Selvarajah</h1>
        <h5 className="text-light">Assistant Professor - University of Windsor</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
