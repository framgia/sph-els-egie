import React from 'react';
import { Link } from 'react-router-dom';

const DashboardDetail = ({ path, word, lesson }) => {
  return (
    <div className='ui items'>
      <div className='item'>
        <div className='tiny ui image'>
          <img src='https://i.pravatar.cc/150?img=5' alt='' />
        </div>
        <div className='content'>
          <div className='text-xl'>John Doe</div>
          <div>
            <Link to={path}>{word}</Link>
          </div>
          <div>
            <Link to='/'>{lesson}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardDetail;
