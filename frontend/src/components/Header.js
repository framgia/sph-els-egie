import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const Header = () => {
  const history = useHistory();

  const logoutSubmit = (e) => {
    e.preventDefault();

    axios.post(`api/logout`).then((res) => {
      if (res.data.status === 200) {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_name');
        history.push(`/login`);
      }
    });
  };

  const authButtons = (
    <React.Fragment>
      <Link to='/register' className='item text-xl'>
        Register
      </Link>
      <Link to='/login' className='item text-xl'>
        Login
      </Link>
    </React.Fragment>
  );

  const logoutButton = (
    <button
      type='button'
      onClick={logoutSubmit}
      className='ui fluid large blue button my-logout-button'
    >
      Logout
    </button>
  );

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
        {!localStorage.getItem('auth_token') ? authButtons : logoutButton}
      </div>
    </div>
  );
};

export default Header;
