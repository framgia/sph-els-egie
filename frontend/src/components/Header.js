import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/' className='item font_weight text-xl'>
        E-learning System
      </Link>
      <div className='right menu'>
        <Link to='/categories' className='item text-lg middle'>
          Categories
        </Link>
        <Link to='/user-list' className='item text-lg'>
          Users
        </Link>
        <Link to='/' className='item text-lg'>
          Link3
        </Link>
      </div>
    </div>
  );
};

export default Header;
