import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <div className='pl-52'>
        <Link to='/' className='item font_weight text-xl'>
          E-learning System
        </Link>
      </div>
      <div className='right menu pr-52'>
        <Link to='/categories' className='item text-xl'>
          Categories
        </Link>
        <Link to='/user-list' className='item text-xl'>
          Users
        </Link>
        <Link to='/user-profile' className='item text-xl'>
          User Profile
        </Link>
        <Link to='/register' className='item text-xl'>
          Register
        </Link>
        <Link to='/login' className='item text-xl'>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
